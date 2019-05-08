import * as React from 'react';
import { CirclePicker } from 'react-color';
import { colors } from '../../constants';
import { Category } from '../../types';

type Props = {
  categories: Category[];
  onChange: any;
};

const ColorPicker = (props: Props) => {
  const { onChange, categories } = props;

  const usedColors = (categories: any) => {
    if (categories) {
      return categories.map((category: any) => category.color.toUpperCase());
    } else {
      return [];
    }
  };

  const availableColors = (categories: any) => {
    return colors.filter(
      color => !usedColors(categories).includes(color.toUpperCase())
    );
  };

  return (
    <CirclePicker colors={availableColors(categories)} onChange={onChange} />
  );
};

export default ColorPicker;
