import React, {PropsWithChildren, useEffect, useRef, useState} from 'react';
import {Animated, Easing, LayoutChangeEvent} from 'react-native';
import * as Swiper from 'react-native-swiper';

import {Button, ButtonTitle, Navigator, OuterSlider, style} from './LineSlideView.styles';

interface Props {
  items: {name: string; count: number}[];
  index: number;
  setIndex: (idx: number) => void;
}

const LineSlideView = ({items, index, setIndex, children}: PropsWithChildren<Props>) => {
  const [parentWidth, setParentWidth] = useState(0);
  const swiperRef = useRef<Swiper.default>(null);
  const slideAnimation = useRef(new Animated.Value((index * parentWidth) / 2)).current;

  const handleLayout = (e: LayoutChangeEvent) => {
    const {width} = e.nativeEvent.layout;
    setParentWidth(width);
  };
  const handleChangeSwiperIndex = (idx: number) => {
    setIndex(idx);
  };

  const moveSlide = Animated.timing(slideAnimation, {
    toValue: (index * parentWidth) / 2,
    duration: 300,
    easing: Easing.linear,
    useNativeDriver: false,
  });

  useEffect(() => {
    moveSlide.start();
    swiperRef.current?.scrollTo(index);
  }, [index]);

  return (
    <>
      <Navigator onLayout={handleLayout}>
        {items.map(({name, count}, i) => (
          <Button key={name} onPress={() => setIndex(i)}>
            <ButtonTitle selected={index === i}>{name}</ButtonTitle>
            <ButtonTitle selected={index === i}>{count}</ButtonTitle>
          </Button>
        ))}
      </Navigator>
      <OuterSlider>
        <Animated.View style={{...style.innerSlider, left: slideAnimation}} />
      </OuterSlider>
      <Swiper.default
        onIndexChanged={handleChangeSwiperIndex}
        horizontal={true}
        ref={swiperRef}
        showsPagination={false}>
        {children}
      </Swiper.default>
    </>
  );
};

export default LineSlideView;
