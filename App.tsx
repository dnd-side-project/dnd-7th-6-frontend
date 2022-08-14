import {ThemeProvider} from '@emotion/react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';

import AppInner from 'AppInner';
import {Interceptor} from 'src/components/utils/Interceptor';
import store from 'src/redux/store';
import RouteLoginScreen from 'src/screens/LoginScreen';
import GlobalStyle from 'src/styles/GlobalStyle';
import theme from 'src/styles/Theme';

export type RootParamList = {
  BoothScreen: undefined;
  RecommendScreen: undefined;
  StorageScreen: undefined;
  MyScreen: undefined;
};
export type RootScreenProps = NativeStackScreenProps<RootParamList, 'BoothScreen'>;
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Interceptor>
            <NavigationContainer theme={GlobalStyle}>
              <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="AppInner">
                <Stack.Screen name="AppInner" component={AppInner} />
                <Stack.Screen name="RouteLoginScreen" component={RouteLoginScreen} />
              </Stack.Navigator>
            </NavigationContainer>
          </Interceptor>
        </Provider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
