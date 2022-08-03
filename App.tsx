import {ThemeProvider} from '@emotion/react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute, NavigationContainer} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

import RouteBoothScreen from 'src/screens/BoothScreen';
import MyScreen from 'src/screens/MyScreen/MyScreen';
import RouteRecommendScreen from 'src/screens/RecommendScreen';
import StorageScreen from 'src/screens/StorageScreen/StorageScreen';
import GlobalStyle from 'src/styles/GlobalStyle';
import theme from 'src/styles/Theme';

export type RootParamList = {
  BoothScreen: undefined;
  RecommendScreen: undefined;
  StorageScreen: undefined;
  MyScreen: undefined;
};
export type RootScreenProps = NativeStackScreenProps<RootParamList, 'BoothScreen'>;

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <ThemeProvider theme={theme}>
        <NavigationContainer theme={GlobalStyle}>
          <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen
              name={'BoothScreen'}
              component={RouteBoothScreen}
              options={({route}) => ({
                tabBarStyle: (() => {
                  const routeName = getFocusedRouteNameFromRoute(route) ?? '';
                  console.log(routeName);
                  if (routeName === 'BoothSearch') {
                    return {display: 'none'};
                  }
                  return;
                })(),
              })}
            />
            <Tab.Screen name={'RecommendScreen'} component={RouteRecommendScreen} />
            <Tab.Screen name={'StorageScreen'} component={StorageScreen} />
            <Tab.Screen name={'MyScreen'} component={MyScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
