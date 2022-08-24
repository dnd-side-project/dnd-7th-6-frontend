import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {useSelector} from 'react-redux';

import PostWriteTabBar from './PostWriteTabBar';
import {BottomBarTitle, IconWrapper, TabWrapper} from './TabBar.styles';

import FocusedBoothIcon from 'src/icons/FocusedNavigation/FocusedBoothIcon';
import FocusedRecommendNavIcon from 'src/icons/FocusedNavigation/FocusedRecommendNavIcon';
import FocusedRecordIcon from 'src/icons/FocusedNavigation/FocusedRecordIcon';
import FocusedStorageIcon from 'src/icons/FocusedNavigation/FocusedStorageIcon';
import BoothNavIcon from 'src/icons/Navigation/BoothNavIcon';
import RecommendNavIcon from 'src/icons/Navigation/RecommendNavIcon';
import RecordNavIcon from 'src/icons/Navigation/RecordNavIcon';
import StorageNavIcon from 'src/icons/Navigation/StorageNavIcon';
import {RootState} from 'src/redux/store';

const TabBar = ({descriptors, state, navigation}: BottomTabBarProps) => {
  const {isVisibleTabBar, isPostWriteScreen} = useSelector(
    (globalState: RootState) => globalState.tabBarReducer,
  );

  const BottomTabIconSelector = ({
    routeName,
    isFocused,
  }: {
    routeName: string;
    isFocused: boolean;
  }) => {
    switch (routeName) {
      case 'RouteRecommendScreen':
        return isFocused ? <FocusedRecommendNavIcon /> : <RecommendNavIcon />;
      case 'BoothScreen':
        return isFocused ? <FocusedBoothIcon /> : <BoothNavIcon />;
      case 'StorageScreen':
        return isFocused ? <FocusedStorageIcon /> : <StorageNavIcon />;
      case 'RouteRecordScreen':
        return isFocused ? <FocusedRecordIcon /> : <RecordNavIcon />;
      default:
        return <></>;
    }
  };

  if (isPostWriteScreen) {
    return <PostWriteTabBar />;
  }

  return (
    <SafeAreaView style={{zIndex: 1}}>
      {isVisibleTabBar && (
        <View style={{flexDirection: 'row', overflow: 'hidden'}}>
          {state.routes.map((route, index) => {
            const {options} = descriptors[route.key];
            const label = options.tabBarLabel as string;
            const routeName = route.name;
            const handlePress = () => {
              navigation.navigate(route.name);
            };
            const isFocused = state.index === index;
            return (
              <TabWrapper key={route.key} onPress={handlePress} isFocused={isFocused}>
                <IconWrapper>
                  <BottomTabIconSelector routeName={routeName} isFocused={isFocused} />
                </IconWrapper>
                <BottomBarTitle isFocused={isFocused}>{label}</BottomBarTitle>
              </TabWrapper>
            );
          })}
        </View>
      )}
    </SafeAreaView>
  );
};

export default TabBar;
