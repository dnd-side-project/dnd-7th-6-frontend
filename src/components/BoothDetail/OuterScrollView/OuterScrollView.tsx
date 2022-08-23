import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {LayoutChangeEvent} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

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
import {Button} from 'src/components/Recommend/AddPostButton/AddPostButton.styles';
import PlusIcon32 from 'src/icons/PlusIcon32';
import useGetPhotoBooth from 'src/querys/useGetPhotoBooth';
import {RootState} from 'src/redux/store';
import {heightPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

interface Props {
  id: number;
  distance?: number;
}

const OuterScrollView = ({id, distance}: Props) => {
  const navigation = useNavigation();
  const {data: photoBooth} = useGetPhotoBooth(id);
  const scrollRef = useRef<ScrollView>(null);
  const [scrollIndex, setScrollIndex] = useState(0);
  const [scrollTargets, setScrollTargets] = useState([0, 0, 0]);
  const {isLoggedIn} = useSelector((state: RootState) => state.userReducer);

  const setScrollTarget = (idx: number) => (e: LayoutChangeEvent) => {
    const {layout} = e.nativeEvent;

    setScrollTargets(prev => {
      const next = [...prev];
      next[idx] = layout.y;
      return next;
    });
  };
  const handleReviewWrite = () => {
    if (!isLoggedIn) {
      navigation.navigate('RouteLoginScreen' as never);
      return;
    }
    if (!photoBooth) {
      return;
    }
    navigation.navigate(
      'BoothReview' as never,
      {
        placeName: photoBooth.photoBooth.name,
        boothId: photoBooth.photoBooth.id,
      } as never,
    );
  };

  useEffect(() => {
    scrollRef.current?.scrollTo({
      x: 0,
      y: scrollTargets[scrollIndex] - heightPercentage(48),
      animated: true,
    });
  }, [scrollIndex]);
  return (
    <>
      <ScrollContainer ref={scrollRef} stickyHeaderIndices={[2]}>
        <ImageSliderOrganism booth={photoBooth} />
        <DescriptionOrganism booth={photoBooth} distance={distance} />
        <BoothDetailNavigation index={scrollIndex} setIndex={setScrollIndex} />
        <StarScoreOrganism booth={photoBooth} />
        <BoothConditionOrganism booth={photoBooth} onLayout={setScrollTarget(0)} />
        <PhotoConditionOrganism booth={photoBooth} />
        <Boundary />
        <GridPhotoOrganism id={id} onLayout={setScrollTarget(1)} />
        <Boundary />
        <ReviewOrganism id={id} onLayout={setScrollTarget(2)} />
      </ScrollContainer>
      <Button onPress={handleReviewWrite}>
        <PlusIcon32 color={theme.colors.grayscale[2]} />
      </Button>
    </>
  );
};

export default OuterScrollView;
