/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Provider } from 'mobx-react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets, TransitionSpecs } from '@react-navigation/stack'
import Splash from './src/screen/splash';
import Login from './src/screen/login';
import Home from './src/screen/home';
import Message from './src/screen/message';
import userData from './src/store/userData';
import messageData from './src/store/messageData';

const Stack = createStackNavigator()
const { Navigator, Screen } = Stack


const App = ({ }) =>{
  return(
    <Provider userData={userData} messageData={messageData}>
      <NavigationContainer>
        <Navigator
          initialRouteName="splash"
          screenOptions={
            {
              ...TransitionPresets.FadeFromBottomAndroid,
              headerMode:"none"
            }
          }
        >
          <Screen name="splash" component={Splash}/>
          <Screen name="login" component={Login}/>
          <Screen name="home" component={Home}/>
          <Screen name="message" component={Message}/>
        </Navigator>
      </NavigationContainer>
    </Provider> 
  )
}
export default App;
