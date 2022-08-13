import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React, {useEffect, useRef} from 'react';
import {Animated, Easing, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {BodyText5} from '../Text';
import PostWriteTabBar from './PostWriteTabBar';
import {TabWrapper} from './TabBar.styles';

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
        {state.routes.map(route => {
          const {options} = descriptors[route.key];
          const label = options.tabBarLabel as string;
          const handlePress = () => {
            navigation.navigate(route.name);
          };
          return (
            <TabWrapper key={route.key} onPress={handlePress}>
              <BodyText5>{label}</BodyText5>
            </TabWrapper>
          );
        })}
      </Animated.View>
    </SafeAreaView>
  );
};

export default TabBar;
