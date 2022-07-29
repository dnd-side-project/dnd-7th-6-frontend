import {Theme} from '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: PrimaryColorTheme;
      secondary: Array<SecondaryColorTheme>;
      grayscale: Array<string>;
    };
  }
}

export interface PrimaryColorTheme {
  normal: string;
}

export interface SecondaryColorTheme {
  light: string;
  normal: string;
  dark: string;
}

const theme: Theme = {
  colors: {
    primary: {
      normal: '#0F0F0F',
    },
    secondary: [
      {light: '#FE5454', normal: '#FF4040', dark: 'DC0909'},
      {light: '#FE5454', normal: '#FF4040', dark: 'DC0909'},
      {light: '#E7E8F7', normal: '#878BE4', dark: '#44479C'},
    ],
    grayscale: [
      '#FFFFFF',
      '#FFFFFF',
      '#F6F6F6',
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
};

export default theme;
