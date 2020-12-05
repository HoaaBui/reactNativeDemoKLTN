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
import { Image } from 'react-native-elements';

const HomeScreen = () => {
    return (
        <Image
        source={{ uri: image }}
        style={{ width: 200, height: 200 }}
        />
        // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        //   <Text>Home Screen.</Text>
        // </View>
      );
}

export default HomeScreen;