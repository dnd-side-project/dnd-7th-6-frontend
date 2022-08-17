import React, {useEffect, useRef, useState} from 'react';
import {Animated, Easing, LayoutChangeEvent} from 'react-native';

import {Button, Container, style} from './BoothDetailNavigation.styles';

import {
  ButtonTitle,
  Navigator,
  OuterSlider,
} from 'src/components/utils/LineSlideView/LineSlideView.styles';

interface Props {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

const BoothDetailNavigation = ({index, setIndex}: Props) => {
  const [parentWidth, setParentWidth] = useState(0);
  const slideAnimation = useRef(new Animated.Value((index * parentWidth) / 3)).current;

  const handleLayout = (e: LayoutChangeEvent) => {
    const {width} = e.nativeEvent.layout;
    setParentWidth(width);
  };
  const handleNavigate = (idx: number) => () => {
    setIndex(idx);
  };

  const moveSlide = Animated.timing(slideAnimation, {
    toValue: (index * parentWidth) / 3,
    duration: 300,
    easing: Easing.linear,
    useNativeDriver: false,
  });

  useEffect(() => {
    moveSlide.start();
  }, [index]);

  return (
    <Container>
      <Navigator onLayout={handleLayout}>
        <Button onPress={handleNavigate(0)}>
          <ButtonTitle selected={index === 0}>정보</ButtonTitle>
        </Button>
        <Button onPress={handleNavigate(1)}>
          <ButtonTitle selected={index === 1}>사진</ButtonTitle>
        </Button>
        <Button onPress={handleNavigate(2)}>
          <ButtonTitle selected={index === 2}>상세리뷰</ButtonTitle>
        </Button>
      </Navigator>
      <OuterSlider>
        <Animated.View style={{...style.slider, left: slideAnimation}} />
      </OuterSlider>
    </Container>
  );
};

export default BoothDetailNavigation;
