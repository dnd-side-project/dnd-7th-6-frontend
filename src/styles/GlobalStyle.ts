import {DefaultTheme, Theme} from '@react-navigation/native';

const GlobalStyle: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

export default GlobalStyle;
