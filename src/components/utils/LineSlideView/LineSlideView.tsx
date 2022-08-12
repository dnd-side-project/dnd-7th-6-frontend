import React, {useEffect, useRef, useState} from 'react';
import {Animated, Easing, GestureResponderEvent, LayoutChangeEvent} from 'react-native';

import {Button, ButtonTitle, Navigator, OuterSlider, style} from './LineSlideView.styles';

interface Props {
  items: {name: string; count: number}[];
  index: number;
  onPressNavigator: (index: number) => (event: GestureResponderEvent) => void;
}

const LineSlideView = ({items, index, onPressNavigator}: Props) => {
  const [parentWidth, setParentWidth] = useState(0);
  const slideAnimation = useRef(new Animated.Value((index * parentWidth) / 2)).current;
  const handleLayout = (e: LayoutChangeEvent) => {
    const {width} = e.nativeEvent.layout;
    setParentWidth(width);
  };

  const moveSlide = Animated.timing(slideAnimation, {
    toValue: (index * parentWidth) / 2,
    duration: 300,
    easing: Easing.linear,
    useNativeDriver: false,
  });

  useEffect(() => {
    moveSlide.start();
  }, [index]);

  return (
    <>
      <Navigator onLayout={handleLayout}>
        {items.map(({name, count}, i) => (
          <Button key={name} onPress={onPressNavigator(i)}>
            <ButtonTitle selected={index === i}>{name}</ButtonTitle>
            <ButtonTitle selected={index === i}>{count}</ButtonTitle>
          </Button>
        ))}
      </Navigator>
      <OuterSlider>
        <Animated.View style={{...style.innerSlider, left: slideAnimation}} />
      </OuterSlider>
    </>
  );
};

export default LineSlideView;
