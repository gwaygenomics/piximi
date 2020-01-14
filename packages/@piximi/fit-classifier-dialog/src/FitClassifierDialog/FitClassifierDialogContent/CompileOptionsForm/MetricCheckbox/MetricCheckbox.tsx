import * as React from "react";
import {Metric} from "@piximi/types";
import {Checkbox} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {updateMetrics} from "@piximi/store";

export const MetricCheckbox = ({metric}: {metric: Metric}) => {
  const dispatch = useDispatch();

  const checked = useSelector(({classifier}) => {
    return classifier.metrics.includes(metric);
  });

  const metrics = useSelector(({classifier}) => {
    return classifier.metrics;
  });

  const onChange = () => {
    if (checked) {
      dispatch(
        updateMetrics({metrics: metrics.filter((item) => item !== metric)})
      );
    } else {
      dispatch(updateMetrics({metrics: [...metrics, metric]}));
    }
  };

  return <Checkbox checked={checked} onChange={onChange} value={metric} />;
};
