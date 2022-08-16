import React, {useEffect, useRef, useState} from 'react';
import {LayoutChangeEvent} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import BoothConditionOrganism from '../BoothConditionOrganism';
import BoothDetailNavigation from '../BoothDetailNavigation/BoothDetailNavigation';
import DescriptionOrganism from '../DescriptionOrganism';
import GridPhotoOrganism from '../GridPhotoOrganism';
import ImageSliderOrganism from '../ImageSliderOrganism';
import PhotoConditionOrganism from '../PhotoConditionOrganism';
import ReviewOrganism from '../ReviewOrganism';
import StarScoreOrganism from '../StarScoreOrganism/StarScoreOrganism';
import {ScrollContainer} from './OuterScrollView.styles';

import Boundary from 'src/components/PostWrite/Boundary';
import {heightPercentage} from 'src/styles/ScreenResponse';

interface Props {
  id: number;
  distance: number;
}

const OuterScrollView = ({id, distance}: Props) => {
  const scrollRef = useRef<ScrollView>(null);
  const [scrollIndex, setScrollIndex] = useState(0);
  const [scrollTargets, setScrollTargets] = useState([0, 0, 0]);

  const setScrollTarget = (idx: number) => (e: LayoutChangeEvent) => {
    setScrollTargets(prev => {
      const next = [...prev];
      next[idx] = e.nativeEvent.layout.y;
      return next;
    });
  };

  useEffect(() => {
    scrollRef.current?.scrollTo({
      x: 0,
      y: scrollTargets[scrollIndex] - heightPercentage(48),
      animated: true,
    });
  }, [scrollIndex]);

  return (
    <ScrollContainer ref={scrollRef} stickyHeaderIndices={[2]}>
      <ImageSliderOrganism id={id} />
      <DescriptionOrganism id={id} distance={distance} />
      <BoothDetailNavigation index={scrollIndex} setIndex={setScrollIndex} />
      <StarScoreOrganism id={id} />
      <BoothConditionOrganism id={id} onLayout={setScrollTarget(0)} />
      <PhotoConditionOrganism id={id} />
      <Boundary />
      <GridPhotoOrganism id={id} onLayout={setScrollTarget(1)} />
      <Boundary />
      <ReviewOrganism id={id} onLayout={setScrollTarget(2)} />
    </ScrollContainer>
  );
};

export default OuterScrollView;
