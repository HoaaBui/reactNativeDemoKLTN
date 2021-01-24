import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  ScrollView,
  Modal,
  SafeAreaView,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

export default class ScanScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
        show: false,
        data: '',
        statusList: [
          {Title:'Load package'},
          {Title:'Unload package'},
          {Title:'Vehicle starts'},
          {Title:'Vehicle arrived'},
        ]
    }
  }
  
  onSuccess = e => {
    // Linking.openURL(e.data).catch(err =>
    //   console.error('An error occured', err)
    // );

    if(e.data){
      this.setState({'show': true, data: e.data});
    }
  };
  
  onSetState = () => {
    this.setState({'show': false});
  }

  render() {
    return (
      <SafeAreaView>
        <QRCodeScanner
          onRead={this.onSuccess}
          flashMode={RNCamera.Constants.FlashMode.off}
          showMarker={true}
          markerStyle={{borderColor:'#1BA9FF', borderRadius:10}}
        />

        <Modal
          transparent={true}
          visible={this.state.show}  
        >
          <View
            style={{backgroundColor:'#000000aa', flex:1, justifyContent:'center', alignItems:'center', height:200}}
          >
            <View style={{backgroundColor:'#ffffff', margin:50, padding:10, borderRadius:10, flex:1, width:300, height:200}}
            >
              {/* <Text>{this.state.data}</Text> */}
              {
                this.state.statusList.map((item,i) =>       
                    <Text style={ (i === this.state.statusList.length-1) 
                      ? styles.deliveryTimeItemLastChild : styles.deliveryTimeItem} 
                      key={item.i + item.Title} onPress={this.onSetState}>
                        {item.Title}
                    </Text>)
              }
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
    height:70,
    padding:10,
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  },
    
  deliveryTimeItem:{
    borderBottomWidth:1,
    borderBottomColor: '#777',
    color:'#777',
    fontSize:16,
    padding:15,
    paddingBottom:5,
  },
  
  deliveryTimeItemLastChild:{
    borderBottomWidth:0,
    borderBottomColor: '#777',
    color:'#777',
    fontSize:16,
    padding:15,
    paddingBottom:5,
  },
  
  iconColor: {
    color:'#1BA9FF'
  }
});