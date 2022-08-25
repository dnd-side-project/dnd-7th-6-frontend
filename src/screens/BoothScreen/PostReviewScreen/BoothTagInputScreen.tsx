import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';

import {PostReviewParamList} from '.';

import BoothReviewHeader from 'src/components/BoothReview/BoothReviewHeader';
import ReviewTagOrganism from 'src/components/BoothReview/ReviewTagOrganism';
import DismissCommonKeyboardView from 'src/components/utils/DismissCommonKeyboardView';

export type BoothTagInputScreenProps = NativeStackScreenProps<
  PostReviewParamList,
  'BoothTagInputScreen'
>;
const BoothTagInputScreen = ({navigation}: BoothTagInputScreenProps) => {
  return (
    <DismissCommonKeyboardView>
      <BoothReviewHeader onPress={() => navigation.goBack()}>부스 리뷰 작성</BoothReviewHeader>
      <ReviewTagOrganism />
    </DismissCommonKeyboardView>
  );
};

export default BoothTagInputScreen;
