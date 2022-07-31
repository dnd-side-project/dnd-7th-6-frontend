import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {Text, View} from 'react-native';

import {RecommendParamList} from '.';

type RecommendScreenProps = NativeStackScreenProps<RecommendParamList, 'RecommendScreen'>;

const RecommendScreen = ({navigation}: RecommendScreenProps) => {
  return (
    <View>
      <Text onPress={() => navigation.push('RecommendDetail', {postId: 1})}>Main</Text>
    </View>
  );
};

export default RecommendScreen;
