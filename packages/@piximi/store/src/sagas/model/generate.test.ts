import * as actions from "../../actions";
import {Category, Image, Partition} from "@piximi/types";
import {generate, watchGenerate} from "./generate";
import {put, takeLatest} from "redux-saga/effects";
import * as classifier from "@piximi/models";

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

describe("generate", () => {
  it("dispatches the 'generate' action", () => {
    const saga = watchGenerate();

    expect(saga.next().value).toEqual(takeLatest("generate", generate));

    expect(saga.next().done).toBeTruthy();
  });

  it("executes the `generate` function", async () => {
    const data = await classifier.generate(images, categories);

    const generator = generate(
      actions.generate({images: images, categories: categories})
    );

    await generator.next();

    expect(generator.next(data).value).toEqual(
      put(actions.generated({data: data}))
    );

    expect(generator.next().done).toBeTruthy();
  });
});
