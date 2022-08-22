import React, {PropsWithChildren, useEffect, useRef, useState} from 'react';
import {Animated, Easing, LayoutChangeEvent} from 'react-native';
import * as Swiper from 'react-native-swiper';

import {
  Button,
  ButtonTitle,
  Container,
  Navigator,
  OuterSlider,
  style,
} from './LineSlideView.styles';

interface Props {
  items: {name: string; count: number}[];
  index: number;
  setIndex: (idx: number) => void;
  disable?: boolean;
}

const LineSlideView = ({
  items,
  index,
  setIndex,
  children,
  disable = false,
}: PropsWithChildren<Props>) => {
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
    if (index <= 0) {
      swiperRef.current?.scrollBy(-1);
    } else {
      swiperRef.current?.scrollBy(1);
    }
  }, [index]);

  return (
    <Container>
      <Navigator onLayout={handleLayout}>
        {items.map(({name, count}, i) => (
          <Button key={name} onPress={disable ? () => {} : () => setIndex(i)}>
            <ButtonTitle selected={index === i}>{name}</ButtonTitle>
            <ButtonTitle selected={index === i}>{count}</ButtonTitle>
          </Button>
        ))}
      </Navigator>
      <OuterSlider>
        <Animated.View style={{...style.innerSlider, left: slideAnimation}} />
      </OuterSlider>
      <Swiper.default
        showsPagination={false}
        loop={false}
        scrollEnabled={false}
        onIndexChanged={disable ? () => {} : handleChangeSwiperIndex}
        horizontal={true}
        ref={swiperRef}>
        {children}
      </Swiper.default>
    </Container>
  );
};

export default LineSlideView;
