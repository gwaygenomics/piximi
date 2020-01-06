import "@tensorflow/tfjs-node";

import {Category, Image, Partition} from "@piximi/types";
import * as tensorflow from "@tensorflow/tfjs";

import {generate} from "./generate";

tensorflow.setBackend("tensorflow");

jest.setTimeout(50000);

const categories: Array<Category> = [
  {
    description: "a",
    identifier: "11111111-1111-1111-1111-11111111111",
    index: 1,
    visualization: {
      color: "#FFFFFF",
      visible: true
    }
  },
  {
    description: "b",
    identifier: "22222222-2222-2222-2222-22222222222",
    index: 2,
    visualization: {
      color: "#FFFFFF",
      visible: true
    }
  }
];

const images: Array<Image> = [
  {
    categoryIdentifier: "11111111-1111-1111-1111-11111111111",
    checksum: "",
    data: "https://picsum.photos/seed/piximi/224",
    identifier: "11111111-1111-1111-1111-11111111111",
    partition: Partition.Training,
    scores: [],
    visualization: {
      brightness: 0,
      contrast: 0,
      visible: true,
      visibleChannels: []
    }
  },
  {
    categoryIdentifier: "22222222-2222-2222-2222-22222222222",
    checksum: "",
    data: "https://picsum.photos/seed/piximi/224",
    identifier: "22222222-2222-2222-2222-22222222222",
    partition: Partition.Training,
    scores: [],
    visualization: {
      brightness: 0,
      contrast: 0,
      visible: true,
      visibleChannels: []
    }
  }
];

describe("generate", () => {
  it("zip", async () => {
    const xs = tensorflow.data.array(
      images.map((image) => {
        return {xs: image.data};
      })
    );

    expect(await xs.toArray()).toEqual([
      {xs: "https://picsum.photos/seed/piximi/224"},
      {xs: "https://picsum.photos/seed/piximi/224"}
    ]);

    const ys = tensorflow.data.array(
      categories.map((category) => category.identifier)
    );
  });

  it("toArray", async () => {
    const generator = generate(categories, images);

    const dataset = tensorflow.data.generator(generator);

    const array = await dataset.toArray();

    const ys = array.map((y) => {
      return y.ys;
    });

    expect(ys).toEqual([0, 1]);
  });
});
