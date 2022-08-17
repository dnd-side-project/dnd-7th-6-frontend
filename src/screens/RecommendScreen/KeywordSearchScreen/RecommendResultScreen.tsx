import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';

import {RecommendSearchParamList} from '.';

import RecommendResultOrganism from 'src/components/RecommendResult/RecommendResultOrganism';
export type RecommendResultScreenProps = NativeStackScreenProps<
  RecommendSearchParamList,
  'RecommendResult'
>;

const RecommendResultScreen = (props: RecommendResultScreenProps) => {
  return <RecommendResultOrganism {...props} />;
};

export default RecommendResultScreen;
