import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {SafeAreaView} from 'react-native';

import {BoothParamList} from '.';

import ReviewListOrganism from 'src/components/ReviewImageDetail/ReviewListOrganism';
import LeftBackHeader from 'src/components/utils/Header/LeftBackHeader';
import useGetInfiniteReviews from 'src/querys/useGetInfiniteReviews';
import toLocaleString from 'src/utils/toLocaleString';

export type ReviewDetailScreenProps = NativeStackScreenProps<BoothParamList, 'ReviewDetailScreen'>;

const Header = ({boothId}: {boothId: number}) => {
  const navigation = useNavigation();
  const {data} = useGetInfiniteReviews(boothId);

  return (
    <LeftBackHeader onPressBack={() => navigation.goBack()}>
      리뷰 전체 {!!data && toLocaleString(data?.pages[0].totalElements)}
    </LeftBackHeader>
  );
};

const ReviewDetailScreen = ({route}: ReviewDetailScreenProps) => {
  return (
    <SafeAreaView>
      <Header boothId={route.params?.boothId} />
      <ReviewListOrganism boothId={route.params?.boothId} />
    </SafeAreaView>
  );
};

export default ReviewDetailScreen;
