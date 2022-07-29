import {
  responsiveScreenWidth,
  responsiveScreenFontSize,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';

const FIGMA__WINDOW__WIDTH = 375;
const FIGMA__WINDOW__HEIGHT = 812;

export const widthPercentage = (width: number): number => {
  return responsiveScreenWidth(100 * (width / FIGMA__WINDOW__WIDTH));
};

export const heightPercentage = (height: number): number => {
  return responsiveScreenHeight(100 * (height / FIGMA__WINDOW__HEIGHT));
};

export const fontPercentage = (size: number): number => {
  return responsiveScreenFontSize(size * 0.125);
};
