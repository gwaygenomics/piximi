import Button from "@material-ui/core/Button/Button";
import {generateAction} from "@piximi/store";
import {Category, Image, Partition, Project} from "@piximi/types";
import * as React from "react";
import {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";

import {useStyles} from "./GenerateButton.css";

export const GenerateButton = ({next}: {next: any}) => {
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    dispatch(generateAction({images: trainingImages, categories: categories}));

    next();
  }, [dispatch]);

  const categories = useSelector(
    ({project}: {project: Project}): Array<Category> => {
      return project.categories;
    }
  );

  const trainingImages = useSelector(
    ({project}: {project: Project}): Array<Image> => {
      return project.images.filter((image: Image) => {
        return (
          image.partition === Partition.Training &&
          image.categoryIdentifier !== "00000000-0000-0000-0000-00000000000"
        );
      });
    }
  );

  const validationImages = useSelector(
    ({project}: {project: Project}): Array<Image> => {
      return project.images.filter((image: Image) => {
        return (
          image.partition === Partition.Validation &&
          image.categoryIdentifier !== "00000000-0000-0000-0000-00000000000"
        );
      });
    }
  );

  const classes = useStyles({});

  return (
    <Button
      className={classes.button}
      color="primary"
      onClick={onClick}
      variant="contained"
    >
      Generate
    </Button>
  );
};
