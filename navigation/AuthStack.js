import React, {useEffect} from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-community/async-storage';
import {GoogleSignin} from '@react-native-community/google-signin';

const Stack = createStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      try {
        if (value == null) {
          AsyncStorage.setItem('alreadyLaunched', 'true');
          setIsFirstLaunch(true);
        } else {
          setIsFirstLaunch(false);
        }
      } catch (e) {
        console.log(e);
      }
    });

    GoogleSignin.configure({
      webClientId:
        '650912920132-me48o9a3uti6c8pgilc0gch8ugvt0frf.apps.googleusercontent.com',
    });
  }, []);

  if (isFirstLaunch == null) {
    return null;
  } else if (isFirstLaunch == true) {
    routeName = 'Onboarding';
  } else {
    routeName = 'Login';
  }

  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            elevation: 0,
          },
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <FontAwesome.Button
                name="long-arrow-left"
                size={25}
                backgroundColor="#f9fafd"
                color="#333"
                onPress={() => navigation.navigate('Login')}
              />
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
