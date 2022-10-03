import {ThemeProvider} from '@emotion/react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import CodePush from 'react-native-code-push';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';

import AppInner from 'AppInner';
import UserProvider from 'src/components/UserProvider';
import {Interceptor} from 'src/components/utils/Interceptor';
import store from 'src/redux/store';
import RouteLoginScreen from 'src/screens/LoginScreen';
import PermissionScreen from 'src/screens/PermissionScreen';
import TermsScreen from 'src/screens/TermsScreen';
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
          <UserProvider>
            <Interceptor>
              <NavigationContainer theme={GlobalStyle}>
                <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="AppInner">
                  <Stack.Screen name="AppInner" component={AppInner} />
                  <Stack.Screen name="RouteLoginScreen" component={RouteLoginScreen} />
                  <Stack.Screen name="InitPermissionScreen" component={PermissionScreen} />
                  <Stack.Screen name="InitTermsScreen" component={TermsScreen} />
                </Stack.Navigator>
              </NavigationContainer>
            </Interceptor>
          </UserProvider>
        </Provider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

const codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
  updateDialog: {
    title: '앱 업데이트가 필요합니다.',
    optionalInstallButtonLabel: '업데이트',
    optionalIgnoreButtonLabel: '아니요.',
  },
  installMode: CodePush.InstallMode.IMMEDIATE,
};

export default CodePush(codePushOptions)(App);
