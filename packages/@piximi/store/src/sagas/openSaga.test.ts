import {put, takeLatest} from "redux-saga/effects";
import {openSaga, watchOpenSaga} from "./openSaga";

describe("openMobileNetV1Saga", () => {
  it("dispatches the 'openMobileNetV1Action'", () => {
    const saga = watchOpenSaga();

    expect(saga.next().value).toEqual(takeLatest("open-MobileNetV1", openSaga));

    expect(saga.next().done).toBeTruthy();
  });

  it("executes the `openMobileNetV1` function", () => {
    const payload = {
      path:
        "https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json",
      classes: 10,
      units: 100
    };

    const saga = openSaga({payload: payload, type: "open-MobileNetV1"});

    saga.next();

    const a = saga.next().value;
    const b = put({type: "opened-MobileNetV1"});

    expect(a).toEqual(b);

    expect(saga.next().done).toBeTruthy();
  });
});
