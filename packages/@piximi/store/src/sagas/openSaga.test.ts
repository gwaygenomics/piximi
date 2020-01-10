import {put, takeLatest} from "redux-saga/effects";
import {openSaga, watchOpenSaga} from "./openSaga";
import {mobilenetv1} from "@piximi/models";
import * as actions from "../actions";

describe("openSaga", () => {
  it("dispatches the 'openAction'", () => {
    const saga = watchOpenSaga();

    expect(saga.next().value).toEqual(takeLatest("open", openSaga));

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

    const generator = openSaga(actions.open(payload));

    await generator.next();

    expect(generator.next({opened: mock}).value).toEqual(
      put(actions.opened({opened: mock}))
    );

    expect(generator.next().done).toBeTruthy();
  });
});
