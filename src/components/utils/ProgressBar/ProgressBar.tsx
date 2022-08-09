import React, {useEffect, useRef} from 'react';
import {Animated, Easing} from 'react-native';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

import {MainBar} from './ProgressBar.styles';

interface Props {
  prevIndex: number;
  nextIndex: number;
  total: number;
}

const ProgressBar = ({prevIndex, nextIndex, total}: Props) => {
  const fillAnimation = useRef(
    new Animated.Value((prevIndex / total) * widthPercentage(343)),
  ).current;
  const next = widthPercentage(343) * (nextIndex / total);

  const fill = Animated.timing(fillAnimation, {
    toValue: next,
    duration: 1000,
    easing: Easing.sin,
    useNativeDriver: false,
  });

  useEffect(() => {
    fill.start();
  }, [fillAnimation]);

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
