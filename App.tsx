import {ThemeProvider} from '@emotion/react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';

import TabBar from 'src/components/utils/TabBar';
import store from 'src/redux/store';
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
        <Provider store={store}>
          <NavigationContainer theme={GlobalStyle}>
            <Tab.Navigator
              screenOptions={{headerShown: false}}
              tabBar={props => <TabBar {...props} />}>
              <Tab.Screen
                name={'BoothScreen'}
                component={RouteBoothScreen}
                options={{tabBarLabel: '위치'}}
              />
              <Tab.Screen
                name={'RecommendScreen'}
                component={RouteRecommendScreen}
                options={{tabBarLabel: '추천'}}
              />
              <Tab.Screen
                name={'StorageScreen'}
                component={StorageScreen}
                options={{tabBarLabel: '찜'}}
              />
              <Tab.Screen name={'MyScreen'} component={MyScreen} options={{tabBarLabel: '마이'}} />
            </Tab.Navigator>
          </NavigationContainer>
        </Provider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
