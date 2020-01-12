import "@tensorflow/tfjs-node";

import {Category, Image, Partition} from "@piximi/types";
import * as tensorflow from "@tensorflow/tfjs";

import {encodeCategory, encodeImage, generate, generator} from "./generate";

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
  it("encodeCategory", async () => {
    const dataset = tensorflow.data.generator(generator(categories, images));

    const processed = dataset.map(encodeCategory(categories.length));

    expect((await processed.toArray())[0].ys.shape).toEqual([2]);
  });

  it("encodeImage", async () => {
    const dataset = tensorflow.data
      .generator(generator(categories, images))
      .map(encodeCategory(categories.length))
      .mapAsync(encodeImage);

    expect((await dataset.toArray())[0].xs.shape).toEqual([224, 224, 3]);
  });

  it("generator", async () => {
    const dataset = tensorflow.data.generator(generator(categories, images));

    const expected = [
      {
        xs: "https://picsum.photos/seed/piximi/224",
        ys: 0
      },
      {
        xs: "https://picsum.photos/seed/piximi/224",
        ys: 1
      }
    ];

    expect(await dataset.toArray()).toEqual(expected);
  });

  it("example", async () => {
    const data = await generate(images, categories);

    expect((await data.toArray())[0].xs.shape).toEqual([224, 224, 3]);
  });
});
