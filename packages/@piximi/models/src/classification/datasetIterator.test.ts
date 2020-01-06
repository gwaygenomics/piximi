import "@tensorflow/tfjs-node";

import * as tensorflow from "@tensorflow/tfjs";
import {Category, Image, Partition} from "@piximi/types";
import {datasetIterator, get, open, xs} from "./datasetIterator";

// tensorflow.setBackend("webgl");

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
    data: "https://picsum.photos/224/224",
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
    data: "https://picsum.photos/224/224",
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

describe("datasetIterator", () => {
  it("get", async () => {
    const buffer: Buffer = await get("https://picsum.photos/seed/piximi/224");

    expect(buffer.length).toEqual(12904);
  });

  it("open", async () => {
    const canvas: HTMLCanvasElement = await open(
      "https://picsum.photos/seed/piximi/224"
    );

    expect(canvas.width).toEqual(224);
    expect(canvas.height).toEqual(224);
  });

  it("xs", async () => {
    const buffers = await xs(images);

    const b = [
      "https://picsum.photos/224/224",
      "https://picsum.photos/224/224"
    ];

    expect(buffers).toEqual(b);
  });

  // it("next", async () => {
  //   const dataset = datasetIterator(categories, images);

  //   const next = dataset.next();

  //   const [xs, ys] = next.value;

  //   expect(xs.shape).toEqual([1, 224, 224, 3]);
  //   expect(ys.shape).toEqual([1, 2]);
  // });
});
