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
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './screens/HomeScreens/MainHome';
import NotificationScreen from './screens/NotificationScreens/MainNotificatons';
import ProfileScreen from './screens/ProfileScreens/MainProfiles';
import EditProfileScreen from './screens/ProfileScreens/EditProfileScreens';

import IntroduceScreen from './screens/ProfileScreens/IntroduceScreen';
import HowToUseScreen from './screens/ProfileScreens/HowToUseScreen';
import SettingsScreen from './screens/ProfileScreens/SettingsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const ProfileStack = createStackNavigator();


const App: () => React$Node = () => {
  return (
    <NavigationContainer style={{backgroundColor: '#694fad'}}>
      <Tab.Navigator
      initialRouteName="Feed"

      tabBarOptions={{
        activeTintColor: '#1BA9FF',
      }}>
        <Tab.Screen
          name="Feed"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarColor: '#694fad',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="Notifications"
          component={NotificationScreen}
          options={{
            tabBarLabel: 'Notifications',
            tabBarColor: '#694fad',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="Profiles"
          component={ProfileStackScreen}
          options={{
            tabBarLabel: 'Profiles',
            tabBarColor: '#694fad',
            // tabBarVisible: false, sử dụng biến truyền component con sang cha để gán giá trị
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );

};

const ProfileStackScreen = () => {
  return(
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        options={{headerShown: false}}
        name="Profile"
        component={ProfileScreen}
      />

      <ProfileStack.Screen
        name="Edit Profile"
        component={EditProfileScreen}
      />

      <ProfileStack.Screen
        name="Introduce"
        component={IntroduceScreen}
      />

      <ProfileStack.Screen
        name="How to use"
        component={HowToUseScreen}
      />

      <ProfileStack.Screen
        name="Settings"
        component={SettingsScreen}
      />
    </ProfileStack.Navigator>
  );
};

export default App;
