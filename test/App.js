/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useMemo} from 'react';
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

import CreateOrderScreen from './screens/HomeScreens/CreateOrdersScreen';
import YourOrderScreen from './screens/HomeScreens/YourOrdersScreen';
import YourOrderDetailScreen from './screens/HomeScreens/YourOrderDetailScreen';
import YourOrderDetailDeliveryStatusScreen from './screens/HomeScreens/YourOrderDetailDeliveryStatusScreen';

import UserContext from './screens/HomeScreens/UserContext';
import UserContextProfile from './screens/ProfileScreens/UserContext';
import UpdateLocationDelivery from './screens/HomeScreens/UpdateLocationDelivery';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const ProfileStack = createStackNavigator();


const App: () => React$Node = () => {

  const ProfileStackScreen = () => {
    return(
      <UserContextProfile.Provider value={[valueforContext, setValueforContext]}>
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
      </UserContextProfile.Provider>
    );
  };
  
  const [valueforContext, setValueforContext] = useState({
    name: 'Bui Gia Hoa',
    address: '20 Le Truc Street, Ward 7, Binh Thanh District, Ho Chi Minh',
    phoneNumber: '0902733275',
    customerId: '123456789',
    email: 'hoa199297@gmail.com',
    gender: 'Male',
    dayofBirth: '29/7/1998',
  });
  
  const HomeStackScreen = () => {
    return(
      <UserContext.Provider value={[valueforContext, setValueforContext]}>
        <ProfileStack.Navigator>
          <ProfileStack.Screen
            options={{headerShown: false}}
            name="Home"
            component={HomeScreen}
          />
    
          <ProfileStack.Screen
            name="Create An Order"
            component={CreateOrderScreen}
          />
    
          <ProfileStack.Screen
            name="Your Orders"
            component={YourOrderScreen}
          />

          <ProfileStack.Screen
            name="Your Order Detail Screen"
            component={YourOrderDetailScreen}
          />

          <ProfileStack.Screen
            name="Your Order Detail Delivery Status Screen"
            component={YourOrderDetailDeliveryStatusScreen}
          />

          <ProfileStack.Screen
            name="Update Location Delivery"
            component={UpdateLocationDelivery}
          />
        </ProfileStack.Navigator>
      </UserContext.Provider>
    );
  };  

  return (
    <NavigationContainer style={{backgroundColor: '#694fad'}}>
      <Tab.Navigator
      initialRouteName="Feed"

      tabBarOptions={{
        activeTintColor: '#1BA9FF',
      }}>
        <Tab.Screen
          name="Feed"
          component={HomeStackScreen}
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
export default App;
