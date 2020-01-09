import {put, takeLatest} from "redux-saga/effects";
import {compileSaga, watchCompileSaga} from "./compileSaga";

describe("compileSaga", () => {
  it("should dispatch the 'compile' action", () => {
    const saga = watchCompileSaga();

    expect(saga.next().value).toEqual(takeLatest("compile", compileSaga));

    expect(saga.next().done).toBeTruthy();
  });

  it("should execute the compile function", () => {
    const saga = compileSaga();

    saga.next();

    const a = saga.next().value;
    const b = put({type: "compile"});

    expect(a).toEqual(b);

    expect(saga.next().done).toBeTruthy();
  });
});
