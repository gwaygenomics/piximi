import * as React from "react";
import {Metric} from "@piximi/types";
import {useStyles} from "./Metrics.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {useMenu} from "@piximi/hooks";
import {Divider} from "@material-ui/core";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";

const descriptions = new Map<Metric, string>();

descriptions.set(Metric.BinaryAccuracy, "Binary accuracy");
descriptions.set(Metric.CategoricalAccuracy, "Categorical accuracy");
descriptions.set(Metric.CategoricalCrossentropy, "Categorical cross-entropy");
descriptions.set(Metric.Cosine, "Cosine proximity");
descriptions.set(Metric.MAE, "Mean absolute error (MAE)");
descriptions.set(Metric.MAPE, "Mean absolute percentage error (MAPE)");
descriptions.set(Metric.MSE, "Mean squared error (MSE)");
descriptions.set(Metric.Precision, "Precision");
descriptions.set(
  Metric.SparseCategoricalCrossentropy,
  "Sparse categorical cross-entropy"
);

type MetricsProps = {};

export const Metrics = ({}: MetricsProps) => {
  const {anchorEl, closeMenu, openedMenu, openMenu} = useMenu();

  const [metrics, setMetrics] = React.useState<Array<Metric>>([
    Metric.CategoricalAccuracy
  ]);

  const classes = useStyles({});

  const onClick = (metric: Metric) => {
    setMetrics([...metrics, metric]);

    closeMenu();
  };

  return (
    <>
      <List
        subheader={
          <ListSubheader className={classes.ListSubheader} disableGutters>
            Metrics
          </ListSubheader>
        }
      >
        {metrics.map((metric: Metric) => {
          return (
            <>
              <ListItem disableGutters>
                <ListItemText primary={descriptions.get(metric)} />

                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>

              <Divider component="li" />
            </>
          );
        })}

        <ListItem disableGutters onClick={openMenu}>
          <ListItemText primary="&nbsp;" />

          <ListItemSecondaryAction>
            <IconButton edge="end" onClick={openMenu}>
              <AddIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>

      <Menu
        anchorEl={anchorEl}
        keepMounted
        onClose={closeMenu}
        open={openedMenu}
      >
        <MenuItem onClick={() => onClick(Metric.BinaryAccuracy)}>
          Binary accuracy
        </MenuItem>

        <MenuItem onClick={() => onClick(Metric.CategoricalAccuracy)}>
          Categorical accuracy
        </MenuItem>

        <MenuItem onClick={() => onClick(Metric.CategoricalCrossentropy)}>
          Categorical cross-entropy
        </MenuItem>

        <MenuItem onClick={() => onClick(Metric.Cosine)}>
          Cosine proximity
        </MenuItem>

        <MenuItem onClick={() => onClick(Metric.MAE)}>
          Mean absolute error (MAE)
        </MenuItem>

        <MenuItem onClick={() => onClick(Metric.MAPE)}>
          Mean absolute percentage error (MAPE)
        </MenuItem>

        <MenuItem onClick={() => onClick(Metric.MSE)}>
          Mean squared error (MSE)
        </MenuItem>

        <MenuItem onClick={() => onClick(Metric.Precision)}>Precision</MenuItem>

        <MenuItem onClick={() => onClick(Metric.SparseCategoricalCrossentropy)}>
          Sparse categorical accuracy
        </MenuItem>
      </Menu>
    </>
  );
};
