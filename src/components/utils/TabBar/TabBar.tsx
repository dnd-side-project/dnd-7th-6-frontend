import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React, {useEffect, useRef} from 'react';
import {Animated, Easing, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';

import {BodyText5} from '../Text';
import {TabWrapper} from './TabBar.styles';

import {RootState} from 'src/redux/store';
import {heightPercentage} from 'src/styles/ScreenResponse';

const TabBar = ({descriptors, state, navigation}: BottomTabBarProps) => {
  const slideUpAnimation = useRef(new Animated.Value(heightPercentage(54))).current;
  const isVisibleTabBar = useSelector(
    (globalState: RootState) => globalState.tabBarReducer.isVisibleTabBar,
  );
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
