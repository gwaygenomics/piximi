import sagaHelper from "redux-saga-testing";
import {call, put, select} from "redux-saga/effects";
import {CompileOptions, Loss, Model, Optimizer} from "@piximi/types";
import * as tensorflow from "@tensorflow/tfjs";
import "@tensorflow/tfjs-node";

const compile = (options: CompileOptions): Promise<tensorflow.LayersModel> => {
  const modelUrl =
    "https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json";

  return new Promise((resolve) => {
    return tensorflow
      .loadLayersModel(modelUrl)
      .then((result) => {
        result.compile({
          optimizer: options.optimizationFunction,
          loss: options.lossFunction,
          metrics: options.metrics
        });
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

const compileSuccessAction = (payload: any) => ({
  type: "COMPILE_SUCCESS",
  payload
});

const compileErrorAction = (error: any) => ({
  type: "COMPILE_ERROR",
  payload: error
});

const selectCompileOptions = (state: Model): CompileOptions => {
  return state.compileOptions;
};

function* compileSaga() {
  try {
    // We get the filters list from the state, using "select"
    const compileOptions: CompileOptions = yield select(selectCompileOptions);

    // We try to call the API, with the given input
    // We expect this API takes a string and returns an array of all the words, split by comma
    const someData = yield call(compile, compileOptions);

    // From the data we get from the API, we filter out the words 'foo' and 'bar'
    const transformedData = someData.filter((w) => w);

    yield put(compileSuccessAction(transformedData));
  } catch (e) {
    // If we got an exception along the way, we call the error action with the error message
    yield put(compileErrorAction(e.message));
  }
}

jest.setTimeout(300000);

describe("compile", () => {
  it("", async () => {
    const compileOptions = {
      learningRate: 0.01,
      lossFunction: Loss.CategoricalCrossentropy,
      metrics: [],
      optimizationFunction: Optimizer.SGD
    };

    const graph: tensorflow.LayersModel = await compile(compileOptions);

    return expect(graph.summary()).resolves.toBeNaN();
  });
});

// describe('', () => {
//   describe("compile", () => {
//     const it = sagaHelper(compileSaga());
//
//     // it('', async (result) => {
//     //   const compileOptions = {
//     //     learningRate: 0.01,
//     //     lossFunction: Loss.CategoricalCrossentropy,
//     //     metrics: [],
//     //     optimizationFunction: Optimizer.SGD
//     //   };
//     //
//     //   const graph: tensorflow.LayersModel = await compile(compileOptions);
//     //
//     //   return expect(graph.summary()).resolves.toBeNaN();
//     // });
//
//     // it('should get the list of filters from the state', result => {
//     //   expect(result).toEqual(select(selectCompileOptions));
//     //
//     //   // Here we specify what the selector should have returned.
//     //   // The selector is not called so we have to give its expected return value.
//     //   return ['foo', 'bar'];
//     // });
//
//     // it('should have called the mock API first, which we are going to specify the results of', (result) => {
//     //   const compileOptions = {
//     //     learningRate: 0.01,
//     //     lossFunction: Loss.CategoricalCrossentropy,
//     //     metrics: [],
//     //     optimizationFunction: Optimizer.SGD
//     //   };
//     //
//     //   expect(result).toEqual(call(compile, compileOptions));
//     //
//     //   // Here we specify what the API should have returned.
//     //   // Again, the API is not called so we have to give its expected response.
//     //   return ['hello', 'foo', 'bar', 'world'];
//     // });
//
//     // it('and then trigger an action with the transformed data we got from the API', result => {
//     //   expect(result).toEqual(put(compileSuccessAction(['hello', 'world'])));
//     // });
//     //
//     // it('and then nothing', result => {
//     //   expect(result).toBeUndefined();
//     // });
//   });
//
//   // describe('Scenario 2: When the input only contains foo and bar', () => {
//   //   const it = sagaHelper(compileSaga());
//   //
//   //   it('should get the list of filters from the state', result => {
//   //     expect(result).toEqual(select(selectCompileOptions));
//   //     return ['foo', 'bar'];
//   //   });
//   //
//   //   it('should have called the mock API first, which we are going to specify the results of', result => {
//   //     expect(result).toEqual(call(compile, 'foo,bar'));
//   //     return ['foo', 'bar'];
//   //   });
//   //
//   //   it('and then trigger the empty action since foo and bar are filtered out', result => {
//   //     expect(result).toEqual(put(someActionEmpty()));
//   //   });
//   //
//   //   it('and then nothing', result => {
//   //     expect(result).toBeUndefined();
//   //   });
//   // });
//   //
//   // describe('Scenario 3: The API is broken and throws an exception', () => {
//   //   const it = sagaHelper(compileSaga());
//   //
//   //   it('should get the list of filters from the state', result => {
//   //     expect(result).toEqual(select(selectCompileOptions));
//   //     return ['foo', 'bar'];
//   //   });
//   //
//   //   it('should have called the mock API first, which will throw an exception', result => {
//   //     expect(result).toEqual(call(compile, 'hello,foo,bar,world'));
//   //
//   //     // Here we pretend that the API threw an exception.
//   //     // We don't "throw" here but we return an error, which will be considered by the
//   //     // redux-saga-testing helper to be an exception to throw on the generator
//   //     return new Error('Something went wrong');
//   //   });
//   //
//   //   it('and then trigger an error action with the error message', result => {
//   //     expect(result).toEqual(put(compileErrorAction('Something went wrong')));
//   //   });
//   //
//   //   it('and then nothing', result => {
//   //     expect(result).toBeUndefined();
//   //   });
//   // });
// });
