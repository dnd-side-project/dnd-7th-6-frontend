import {Theme} from '@emotion/react';

import {fontPercentage} from './ScreenResponse';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: Array<ColorTheme>;
      secondary: Array<ColorTheme>;
      grayscale: Array<string>;
    };
    fonts: {
      Headline: Array<HeadLineFontsTheme>;
      SubHeadline: Array<HeadLineFontsTheme>;
      Body: Array<HeadLineFontsTheme>;
    };
  }
}

export interface ColorTheme {
  light: string;
  normal: string;
  dark: string;
}

export interface HeadLineFontsTheme {
  size: number;
  fontFamily: string;
  lineHeight: number;
}

const theme: Theme = {
  colors: {
    primary: [
      {light: '#8B55FF', normal: '#6947EE', dark: '#6E30F3'},
      {light: '#8B55FF', normal: '#6947EE', dark: '#6E30F3'},
      {light: '#FF90C0', normal: '#FF58A0', dark: '#FC3D8F'},
    ],
    secondary: [
      {light: '#FE5454', normal: '#FF4040', dark: '#DC0909'},
      {light: '#FE5454', normal: '#FF4040', dark: '#DC0909'},
      {light: '#E7E8F7', normal: '#878BE4', dark: '#44479C'},
    ],
    grayscale: [
      '#FFFFFF',
      '#FFFFFF',
      '#F9F9F9',
      '#E5E5E5',
      '#CCCCCC',
      '#BDBDBD',
      '#999999',
      '#666666',
      '#4C4C4C',
      '#333333',
      '#191919',
    ],
  },
  fonts: {
    Headline: [
      {
        size: fontPercentage(28),
        fontFamily: 'Pretendard-SemiBold',
        lineHeight: fontPercentage(36),
      },
      {
        size: fontPercentage(24),
        fontFamily: 'Pretendard-SemiBold',
        lineHeight: fontPercentage(32),
      },
      {
        size: fontPercentage(22),
        fontFamily: 'Pretendard-SemiBold',
        lineHeight: fontPercentage(30),
      },
    ],
    SubHeadline: [
      {
        size: fontPercentage(20),
        fontFamily: 'Pretendard-SemiBold',
        lineHeight: fontPercentage(28),
      },
      {
        size: fontPercentage(18),
        fontFamily: 'Pretendard-SemiBold',
        lineHeight: fontPercentage(24),
      },
      {
        size: fontPercentage(16),
        fontFamily: 'Pretendard-SemiBold',
        lineHeight: fontPercentage(20),
      },
      {
        size: fontPercentage(14),
        fontFamily: 'Pretendard-SemiBold',
        lineHeight: fontPercentage(20),
      },
    ],
    Body: [
      {
        size: fontPercentage(16),
        fontFamily: 'Pretendard-Medium',
        lineHeight: fontPercentage(22),
      },
      {
        size: fontPercentage(16),
        fontFamily: 'Pretendard-Regular',
        lineHeight: fontPercentage(22),
      },
      {
        size: fontPercentage(14),
        fontFamily: 'Pretendard-Medium',
        lineHeight: fontPercentage(20),
      },
      {
        size: fontPercentage(14),
        fontFamily: 'Pretendard-Regular',
        lineHeight: fontPercentage(20),
      },
      {
        size: fontPercentage(12),
        fontFamily: 'Pretendard-Medium',
        lineHeight: fontPercentage(18),
      },
      {
        size: fontPercentage(12),
        fontFamily: 'Pretendard-Regular',
        lineHeight: fontPercentage(18),
      },
    ],
  },
};

export default theme;
