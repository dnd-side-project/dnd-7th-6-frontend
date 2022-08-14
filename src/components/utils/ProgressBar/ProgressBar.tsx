import React, {useEffect, useRef} from 'react';
import {Animated, Easing} from 'react-native';

import {MainBar} from './ProgressBar.styles';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

interface Props {
  index: number;
  total: number;
}

const ProgressBar = ({index, total}: Props) => {
  const fillAnimation = useRef(new Animated.Value((index / total) * widthPercentage(343))).current;

  const fill = Animated.timing(fillAnimation, {
    toValue: (index / total) * widthPercentage(343),
    duration: 500,
    easing: Easing.exp,
    useNativeDriver: false,
  });

  useEffect(() => {
    fill.start();
  }, [fillAnimation, index]);

  return (
    <MainBar>
      <Animated.View
        style={{
          width: fillAnimation,
          height: heightPercentage(4),
          backgroundColor: theme.colors.grayscale[5],
          borderRadius: 8,
        }}
      />
    </MainBar>
  );
};

export default ProgressBar;
