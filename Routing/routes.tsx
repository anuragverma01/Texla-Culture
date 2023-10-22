import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screenthree} from '../Screens/loginScreen/screenthree';
import {Screenfour} from '../Screens/loginScreen/screenfour';
import Intro from '../Screens/IntroScreen/intro';

const Routes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="intro">
        <Stack.Screen
          name="screen3"
          component={Screenthree}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="screen4"
          component={Screenfour}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="intro"
          component={Intro}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
