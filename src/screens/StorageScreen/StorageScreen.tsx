import * as React from 'react';
import {SafeAreaView} from 'react-native';

import StorageHeader from 'src/components/Storage/StorageHeader';
import SwipeOrganism from 'src/components/Storage/SwipeOrganism';

const StorageScreen = () => {
  return (
    <SafeAreaView>
      <StorageHeader />
      <SwipeOrganism />
    </SafeAreaView>
  );
};

export default StorageScreen;
