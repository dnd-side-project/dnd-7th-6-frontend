import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React, {useEffect, useRef} from 'react';
import {Animated, Easing, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

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
import {closePostWrite} from 'src/redux/actions/TabBarAction';
import {RootState} from 'src/redux/store';
import {heightPercentage} from 'src/styles/ScreenResponse';

const TabBar = ({descriptors, state, navigation}: BottomTabBarProps) => {
  const dispatch = useDispatch();
  const slideUpAnimation = useRef(new Animated.Value(heightPercentage(54))).current;
  const {isVisibleTabBar, isPostWriteScreen} = useSelector(
    (globalState: RootState) => globalState.tabBarReducer,
  );
  const {screenIndex} = useSelector((globalState: RootState) => globalState.postWriteReducer);
  const slideDown = Animated.timing(slideUpAnimation, {
    toValue: 0,
    duration: 300,
    easing: Easing.linear,
    useNativeDriver: false,
  });
  const slideUp = Animated.timing(slideUpAnimation, {
    toValue: heightPercentage(54),
    duration: 300,
    easing: Easing.linear,
    useNativeDriver: false,
  });

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

  useEffect(() => {
    if (isVisibleTabBar) {
      slideUp.start();
    } else {
      slideDown.start();
    }
  }, [isVisibleTabBar]);

  useEffect(() => {
    if (screenIndex >= 4) {
      dispatch(closePostWrite());
    }
  }, [screenIndex]);

  if (isPostWriteScreen) {
    return <PostWriteTabBar />;
  }

  return (
    <SafeAreaView>
      <Animated.View style={{height: slideUpAnimation, flexDirection: 'row'}}>
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
      </Animated.View>
    </SafeAreaView>
  );
};

export default TabBar;
