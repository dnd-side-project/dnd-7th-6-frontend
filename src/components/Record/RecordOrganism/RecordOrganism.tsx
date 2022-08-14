import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';

import NickNameView from '../NickNameView';
import RecordHeader from '../RecordHeader';

import {RootState} from 'src/redux/store';

const RecordOrganism = () => {
  const isLoggedIn = useSelector((state: RootState) => state.userReducer.isLoggedIn);

  return (
    <View>
      <RecordHeader />
      {isLoggedIn && <NickNameView />}
    </View>
  );
};

export default RecordOrganism;
