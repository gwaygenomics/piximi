import * as classifier from "@piximi/models";
import {put, takeLatest} from "redux-saga/effects";

import * as actions from "../actions";
import {open, watchOpen} from "./open";

describe("open", () => {
  it("dispatches the 'open' action", () => {
    const saga = watchOpen();

    expect(saga.next().value).toEqual(takeLatest("open", open));

    expect(saga.next().done).toBeTruthy();
  });

  it("executes the `open` function", async () => {
    const pathname =
      "https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json";

    const classes = 10;

    const units = 100;

    const opened = await classifier.open(pathname, classes, units);

    const payload = {pathname: pathname, classes: classes, units: units};

    const generator = open(actions.open(payload));

    await generator.next();

    expect(generator.next({opened: opened}).value).toEqual(
      put(actions.opened({opened: opened}))
    );

    expect(generator.next().done).toBeTruthy();
  });
});
