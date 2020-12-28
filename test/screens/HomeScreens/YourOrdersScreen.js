import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const YourOrderScreen = () => {
  const [people, setPeople] = useState([
    {id:'1', deliveryStatus:'Delivery Success', orderId:'267589037979398', description:'clothes clothes clothes clothes', itemsNumber:'1', price:'61.000 VND', image:'./Transportation.jpg'},
    {id:'2', deliveryStatus:'Delivery Success', orderId:'267589037979398', description:'clothes clothes clothes clothes', itemsNumber:'1', price:'61.000 VND', image:'./Transportation.jpg'},
    {id:'3', deliveryStatus:'Delivery Success', orderId:'267589037979398', description:'clothes clothes clothes clothes', itemsNumber:'1', price:'61.000 VND', image:'./Transportation.jpg'},
    {id:'4', deliveryStatus:'Delivery Success', orderId:'267589037979398', description:'clothes clothes clothes clothes', itemsNumber:'1', price:'61.000 VND', image:'./Transportation.jpg'},
    {id:'5', deliveryStatus:'Delivery Success', orderId:'267589037979398', description:'clothes clothes clothes clothes', itemsNumber:'1', price:'61.000 VND', image:'./Transportation.jpg'},
    {id:'6', deliveryStatus:'Delivery Success', orderId:'267589037979398', description:'clothes clothes clothes clothes', itemsNumber:'1', price:'61.000 VND', image:'./Transportation.jpg'},
    {id:'7', deliveryStatus:'Delivery Success', orderId:'267589037979398', description:'clothes clothes clothes clothes', itemsNumber:'1', price:'61.000 VND', image:'./Transportation.jpg'},
  ]);
  
  return (
    <FlatList
      numColumns={1}
      keyExtractor={(item) => item.id}
      data={people}
      renderItem={({item})=> (
        <View style={styles.container}>
          <View style={{borderBottomWidth: 0.5, borderBottomColor: '#666666', paddingTop:5, paddingBottom:5}}>
            <Text style={{color: '#666666', fontSize: 14}}>{item.deliveryStatus}</Text>
          </View>
          <View style={{paddingTop:10, paddingBottom:10, justifyContent:'flex-start', flexDirection:'row', paddingRight:10}}>
            <Image source={require('./Transportation.jpg')} style={{width:80, height:80, borderRadius:10}}/>
            <View style={{paddingLeft:20, justifyContent:'center'}}>
              <Text style={{fontSize:16, fontWeight:'bold', paddingBottom:10}}>{item.description}</Text>
              <Text style={{fontSize:14, color: '#666666'}}>{item.itemsNumber} item | {item.price}</Text>
            </View>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#FFFFFF',
    width: '100%',
    paddingLeft: 5,
    marginBottom: 8,
    paddingLeft:10,
  },


});

export default YourOrderScreen;