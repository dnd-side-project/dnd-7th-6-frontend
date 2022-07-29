import {ThemeProvider} from '@emotion/react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

import BoothScreen from 'src/screens/BoothScreen/BoothScreen';
import MyScreen from 'src/screens/MyScreen/MyScreen';
import RouteRecommendScreen from 'src/screens/RecommendScreen';
import StorageScreen from 'src/screens/StorageScreen/StorageScreen';
import theme from 'src/styles/Theme';

export type RootParamList = {
  BoothScreen: undefined;
  RecommendScreen: undefined;
  StorageScreen: undefined;
  MyScreen: undefined;
};

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
    <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name={'BoothScreen'} component={BoothScreen} />
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
