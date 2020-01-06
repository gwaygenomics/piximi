import "@tensorflow/tfjs-node";

import {Category, Image, Partition} from "@piximi/types";
import * as tensorflow from "@tensorflow/tfjs";
import * as ImageJS from "image-js";

import {encode, generate, get} from "./generate";

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
  it("generator", async () => {
    const generator = generate(categories, images);

    const dataset = tensorflow.data.generator(generator);

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

  it("encode", async () => {
    const generator = generate(categories, images);

    const dataset = tensorflow.data.generator(generator);

    const depth: number = categories.length;

    const processed = dataset.map(encode(depth));

    const encoded = await processed.toArray();

    expect(encoded.map((sample) => sample.ys.shape)).toEqual([[2], [2]]);
  });

  it("fetch", async () => {
    const generator = generate(categories, images);

    const dataset = tensorflow.data.generator(generator);

    const fetch = async (item: {
      xs: string;
      ys: number;
    }): Promise<{xs: tensorflow.Tensor3D; ys: number}> => {
      const fetched = await tensorflow.util.fetch(item.xs);

      const buffer: ArrayBuffer = await fetched.arrayBuffer();

      const data: ImageJS.Image = await ImageJS.Image.load(buffer);

      const canvas: HTMLCanvasElement = data.getCanvas();

      const xs: tensorflow.Tensor3D = tensorflow.browser.fromPixels(canvas);

      return new Promise((resolve) => {
        return resolve({...item, xs: xs});
      });
    };

    const fetched = dataset.mapAsync(fetch);

    let x: Array<{
      xs: tensorflow.Tensor3D;
      ys: number;
    }> = await fetched.toArray();

    expect(x.map((item) => item.xs.shape)).toEqual([
      [224, 224, 3],
      [224, 224, 3]
    ]);
  });
});
