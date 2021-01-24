import React, {useState, useContext, useMemo} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {BottomPopup} from './BottomPopup';
import UserContext from './UserContext';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CreateOrderScreen = ({navigation}) => {
  const [image, setImage] = useState('https://api.adorable.io/avatars/80/abott@adorable.png');
  const {colors} = useTheme();
  const [Title, setTitle] = useState('Test popup modal');

  const [deliveryTimeData, setDeliveryTimeData] = useState([
    {id:1, description:'Morning (7h30 -12h00)'},
    {id:2, description:'Evening (13h30 -18h00)'},
    {id:3, description:'Afternoon (18h30 -21h00)'},
    {id:4, description:'On weekdays'},
    {id:5, description:'At weekends'},
  ]);

  const [serviceData, setServiceData] = useState([
    {id:1, title:'Express Delivery', timeDelivery:'2-4 days', price:'100.000 VND'},
    {id:2, title:'Money-saving Delivery', timeDelivery:'7-9 days', price:'40.000 VND'},
    {id:3, title:'Normal Delivery', timeDelivery:'3-5 days', price:'6000 VND'},
  ]);

  const [valueforContext, setValueforContext] = useContext(UserContext);

  let bottomSheetNote = React.createRef();
  let bottomSheetDeliveryTime = React.createRef();
  let bottomSheetServices = React.createRef();
 
  const _onPressButton = () => {
    bottomSheetNote.show();
  }

  const _onPressButtonDeliveryTime = () => {
    bottomSheetDeliveryTime.show();
  }

  const _onPressButtonServices = () => {
    bottomSheetServices.show();
  }

  return (
    <ScrollView style={styles.container}>
      <View style={{height:50, justifyContent:'center', marginLeft:8}}><Text style={{fontSize:16, color: '#666666'}}>SENDER - RECEIVER</Text></View>
      <View style={{padding:8, backgroundColor:'#ffff'}}>
        <Text style={{fontSize:16, color: '#1BA9FF', marginBottom:5}}>Sender</Text>
        <View style={{flex:1, alignItems:'center', justifyContent:'space-between', flexDirection:'row', paddingRight:5, paddingBottom:5}}>
          <Text style={{fontSize:14, color: '#000000', paddingBottom:5}}>{valueforContext.name}</Text>
          <Text style={{fontSize:14, color: '#FD8209', paddingBottom:5}} onPress={() => navigation.navigate('Update Location Delivery')}>Update</Text>
        </View>

        <Text style={{fontSize:16, color: '#1BA9FF', paddingBottom:5}}>Receiver</Text>
        <View style={styles.action}>
          <Feather name="phone" color={colors.text} size={16} />
          <TextInput
            placeholder="Phone"
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={16} />
          <TextInput
            placeholder="Your full name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
        <Feather name="map-pin" color={colors.text} size={16} />
          <TextInput
            placeholder="Address"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
      </View>
      
      <View style={{height:50, justifyContent:'center', marginLeft:8}}><Text style={{fontSize:16, color: '#666666'}}>ITEMS - SERVICES</Text></View>
      <View style={{padding:8, backgroundColor:'#ffff', paddingBottom:5}}>
        <Text style={{fontSize:16, color: '#1BA9FF', paddingBottom:5}}>Items</Text>
        <View style={styles.action}>
          <Feather name="info" color={colors.text} size={16} />
          <TextInput
            placeholder="Items description"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <Feather name="dollar-sign" color={colors.text} size={16} />
          <TextInput
            placeholder="Value of goods"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>

        <View style={{flex:1, alignItems:'center', justifyContent:'space-between', flexDirection:'row', paddingRight:5, paddingBottom:5}}>
        <Text style={{fontSize:16, color: '#1BA9FF', paddingBottom:5}}>Services</Text>
        <Text style={{fontSize:14, color: '#FD8209', paddingBottom:5}} onPress={_onPressButtonServices}>Choose your services</Text>
        </View>
        <Text>The service that you choose is Express Delivery.</Text>
      </View>

      <View style={{height:50, justifyContent:'center', marginLeft:8}}><Text style={{fontSize:16, color: '#666666'}}>BACKGROUND INFORMATION</Text></View>
      <View style={{padding:8, backgroundColor:'#ffff', paddingBottom:20}}>
        <View style={{flex:1, alignItems:'center', justifyContent:'space-between', flexDirection:'row', paddingRight:5, paddingBottom:5}}>
        <Text style={{fontSize:14, color: '#000000', paddingBottom:5}}>Delivery Date: 26/12/2020 - 2/1/2020</Text>
        <Text style={{fontSize:14, color: '#FD8209', paddingBottom:5}}></Text>
        </View>
        <View style={{flex:1, alignItems:'center', justifyContent:'space-between', flexDirection:'row', paddingRight:5, paddingBottom:5}}>
        <Text style={{fontSize:14, color: '#000000', paddingBottom:5}}>Delivery time: All days long</Text>
        <Text style={{fontSize:14, color: '#FD8209', paddingBottom:5}} onPress={_onPressButtonDeliveryTime}>Update</Text>
        </View>
        <View style={{flex:1, alignItems:'center', justifyContent:'space-between', flexDirection:'row', paddingRight:5, paddingBottom:5}}>
        <Text style={{fontSize:14, color: '#000000', paddingBottom:5}}>Note: Don't slam the door!</Text>
        <Text style={{fontSize:14, color: '#FD8209', paddingBottom:5}} onPress={_onPressButton}>Update</Text>
        </View>
        <Text>Total price: 135.000 VND</Text>
      </View>
      
      <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
          <Text style={styles.panelButtonTitle}>Create An Order</Text>
      </TouchableOpacity>

      <BottomPopup
          title = 'Services'
          ref ={(target) => bottomSheetServices = target}
          updateService = {(val)=> updateServiceParent(val)} 
          itemList = {serviceData}
        >
      </BottomPopup>

      <BottomPopup
          title = 'Delivery Time'
          ref ={(target) => bottomSheetDeliveryTime = target}
          updateDeliveryTime = {(val)=> updateDeliveryTimeParent(val)}  
          itemList = {deliveryTimeData}
        >
      </BottomPopup>

      <BottomPopup
          title = 'Note'
          ref = {(target) => bottomSheetNote = target}
          updateNoteContent={(val)=> updateNoteContentParent(val)} 
        >
      </BottomPopup>

    </ScrollView>
  );
};

export default CreateOrderScreen;

const styles = StyleSheet.create({
  deliveryTimeList:{
    
  },

  deliveryTimeItem:{
    borderBottomWidth:1,
    borderBottomColor: '#777',
    color:'#777',
    fontSize:16,
    padding:15,
  },
  
  deliveryTimeItemLastChild:{
    borderBottomWidth:0,
    borderBottomColor: '#777',
    color:'#777',
    fontSize:16,
    padding:15,
  },

  textAreaInput:{
    borderWidth: 1,
    borderColor: '#777',
    padding:8,
    margin:10,
    color: '#666666',
    borderRadius: 5,
    justifyContent:'flex-start',
    alignItems:'flex-start',
    textAlignVertical: "top",
  },

  container: {
    flex: 1,
  },
  
  noteButton:{
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#1BA9FF',
    alignItems: 'center',
    marginTop: 10,
    width:100,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'
  },

  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#1BA9FF',
    alignItems: 'center',
    marginTop: 10,
  },

  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
  },

  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,

    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  panelHeader: {
    alignItems: 'center',
  },

  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  
  panelTitle: {
    fontSize: 27,
    height: 35,
  },

  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },

  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },

  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },

  action: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomColor: '#f2f2f2',
    borderTopColor: '#f2f2f2',
    borderRightColor: '#f2f2f2',
    borderLeftColor: '#f2f2f2',
    alignItems:'center',
    marginBottom:5,
    marginRight:10,
    paddingLeft:5,
    borderRadius:10,
    height:40,
  },

  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },

  textInput: {
    flex: 1,
    color: '#05375a',
  },

});
