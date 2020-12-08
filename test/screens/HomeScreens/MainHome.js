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
import { Image } from 'react-native';

const HomeScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
            source={require('./Transportation.jpg')}
            style={{width:400, height:200}}
            />
            <View style={styles.header}>
              <MaterialCommunityIcons name="qrcode-scan" color="#FFFFFF" size={24} />
              <MaterialCommunityIcons name="magnify" color="#FFFFFF" size={24} />
            </View>
              
            <View style={styles.container_featureList}>
              <View style={styles.featureItem}>
                <MaterialCommunityIcons name="plus-circle-outline" color="#1BA9FF" size={45} />
                <Text style={styles.text}>Create orders</Text>
              </View>
              
              <View style={styles.featureItem}>
                <MaterialCommunityIcons name="package-variant-closed" color="#1BA9FF" size={45} />
                <Text style={styles.text}>Your orders</Text>
              </View>

              <View style={styles.featureItem}>
                <MaterialCommunityIcons name="face-agent" color="#1BA9FF" size={45} />
                <Text style={styles.text}>CS</Text>
              </View>
            </View>

            <View>
              <Text>News</Text>
            </View>
            
        </ScrollView>
      );
}

const styles = StyleSheet.create({
    header:{
      width: '95%',
      position:'absolute',
      top:0,bottom:0,right:0,left:10,
      flexDirection:'row',
      justifyContent:'space-between',
    },

    container:{
      flex:1,
      backgroundColor: '#fff',
      //alignItems:'center',
    },

    container_featureList:{
      width: '100%',
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingRight: 10,
      paddingLeft: 10,
      borderBottomWidth: 3,
      borderBottomColor: '#DCDCDC',
    },
    featureItem:{
      width: 75,
      height: 100,
      margin: 0,
      padding: 0,
      alignItems:'center',
      justifyContent:"center",
      // backgroundColor:"red",
    },

    text:{
      fontSize: 12,
      marginTop:5,
      alignItems: 'center',
    }
});


export default HomeScreen;