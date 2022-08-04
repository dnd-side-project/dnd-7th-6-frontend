import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {useSelector} from 'react-redux';

import {BodyText5} from '../Text';
import {Container, TabWrapper} from './TabBar.styles';

import {RootState} from 'src/redux/store';

const TabBar = ({descriptors, state, navigation}: BottomTabBarProps) => {
  const isVisibleTabBar = useSelector(
    (globalState: RootState) => globalState.tabBarReducer.isVisibleTabBar,
  );

  return (
    <>
      {!isVisibleTabBar || (
        <Container>
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
        </Container>
      )}
    </>
  );
};

export default TabBar;
