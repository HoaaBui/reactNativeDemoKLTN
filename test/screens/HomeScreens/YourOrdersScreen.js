import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Card} from 'react-native-shadow-cards';

const YourOrderScreen = ({navigation}) => {
  const [people, setPeople] = useState([
    {id:'1', deliveryStatus:'Delivery Success', orderId:'37979398', description:'clothes clothes clothes clothes', itemsNumber:'1', price:'61.000 VND', image: require('./Transportation.jpg'), note: 'Pay by cash'},
    {id:'2', deliveryStatus:'Delivery Success', orderId:'37979398', description:'clothes clothes clothes clothes', itemsNumber:'1', price:'61.000 VND', image: require('./Transportation.jpg'), note: 'Pay by cash'},
    {id:'3', deliveryStatus:'Delivery Success', orderId:'37979398', description:'clothes clothes clothes clothes', itemsNumber:'1', price:'61.000 VND', image: require('./Transportation.jpg'), note: 'Pay by cash'},
    {id:'4', deliveryStatus:'Delivery Success', orderId:'37979398', description:'clothes clothes clothes clothes', itemsNumber:'1', price:'61.000 VND', image: require('./Transportation.jpg'), note: 'Pay by cash'},
    {id:'5', deliveryStatus:'Delivery Success', orderId:'37979398', description:'clothes clothes clothes clothes', itemsNumber:'1', price:'61.000 VND', image: require('./Transportation.jpg'), note: 'Pay by cash'},
    {id:'6', deliveryStatus:'Delivery Success', orderId:'37979398', description:'clothes clothes clothes clothes', itemsNumber:'1', price:'61.000 VND', image: require('./Transportation.jpg'), note: 'Pay by cash'},
    {id:'7', deliveryStatus:'Delivery Success', orderId:'37979398', description:'clothes clothes clothes clothes', itemsNumber:'1', price:'61.000 VND', image: require('./Transportation.jpg'), note: 'Pay by cash'},
  ]);
  
  return (
    <FlatList
      numColumns={1}
      keyExtractor={(item) => item.id}
      data={people}
      renderItem={({item})=> (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Your Order Detail Screen')}>
          <Card style={styles.item}>
            <View style={{display:'flex', justifyContent:'space-between', flexDirection:'row'}}>
              <Text style={{color: '#000000', fontSize: 14}}>Order id: {item.orderId}</Text>
              <View style={{paddingRight:5}}>
                <View style={{justifyContent:'space-between', flexDirection:'row'}}>
                  <Text style={{color: '#666666', fontSize: 11}}>Created date: 23/12/2020</Text>
                </View>
              </View>
            </View>
            
            <View style={{paddingTop:10, paddingBottom:10, justifyContent:'flex-start', flexDirection:'row', paddingRight:10}}>
              <Image source={(item.image)} style={{width:80, height:80, borderRadius:10}}/>
              <View style={{paddingLeft:20, justifyContent:'center'}}>
                <Text style={{fontSize:16, fontWeight:'bold', paddingBottom:10}}>{item.description}</Text>
                <Text style={{fontSize:14, color: '#666666'}}>{item.note}</Text>
              </View>
            </View>
          </Card>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#FFFFFF',
    width: '100%',
    alignItems: 'center',
  },

  item: {
    width: '95%',
    padding: 5,
    marginTop: 15,
    marginTop: 15,
    borderWidth: 0.5,
    borderColor: '#777777',
    overflow: 'hidden',
  }


});

export default YourOrderScreen;