import {put, takeLatest} from "redux-saga/effects";
import {openSaga, watchOpenSaga} from "./openSaga";
import {mobilenetv1} from "@piximi/models";
import {openAction, openedAction} from "../actions/model";

describe("openSaga", () => {
  it("dispatches the 'openAction'", () => {
    const saga = watchOpenSaga();

    expect(saga.next().value).toEqual(takeLatest("open", openSaga));

    expect(saga.next().done).toBeTruthy();
  });

  it("executes the `open` function", async () => {
    const payload = {
      path:
        "https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json",
      classes: 10,
      units: 100
    };

    const mock = await mobilenetv1(
      payload.classes,
      payload.path,
      payload.units
    );

    const generator = openSaga(openAction(payload));

    generator.next();

    expect(generator.next({opened: mock}).value).toEqual(
      put(openedAction({opened: mock}))
    );

    expect(generator.next().done).toBeTruthy();
  });
});
