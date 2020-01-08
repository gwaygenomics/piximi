import * as React from "react";
import {OptimizationFunction} from "../OptimizationFunction/OptimizationFunction";
import {LossFunction} from "../LossFunction";
import {Metrics} from "../Metrics";
import {Model} from "../Model";

type CompileOptionsListItemProps = {};

export const CompileOptionsForm = ({}: CompileOptionsListItemProps) => {
  return (
    <>
      <Model />
      <OptimizationFunction />
      <LossFunction />
      <Metrics />
    </>
  );
};
