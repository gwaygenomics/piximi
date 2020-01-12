import {put, takeLatest} from "redux-saga/effects";
import {open, watchOpen} from "./open";
import {mobilenetv1} from "@piximi/models";
import * as actions from "../../actions";

describe("open", () => {
  it("dispatches the 'open' action", () => {
    const saga = watchOpen();

    expect(saga.next().value).toEqual(takeLatest("open", open));

    expect(saga.next().done).toBeTruthy();
  });

  it("executes the `open` function", async () => {
    const payload = {
      pathname:
        "https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json",
      classes: 10,
      units: 100
    };

    const mock = await mobilenetv1(
      payload.classes,
      payload.pathname,
      payload.units
    );

    const generator = open(actions.open(payload));

    await generator.next();

    expect(generator.next({opened: mock}).value).toEqual(
      put(actions.opened({opened: mock}))
    );

    expect(generator.next().done).toBeTruthy();
  });
});
