import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Card} from 'react-native-shadow-cards';

const MainNotifications = () => {
  const [people, setPeople] = useState([
    {id:'1', title:'Delivery orders success', date:'11/1/2020', description:'Your order was delivered successfully.', iconType:'info'},
    {id:'2', title:'Delivery orders success', date:'11/1/2020', description:'Your order was delivered successfully.', iconType:'info'},
    {id:'3', title:'Delivery orders success', date:'11/1/2020', description:'Your order was delivered successfully.', iconType:'info'},
    {id:'4', title:'Delivery orders success', date:'11/1/2020', description:'Your order was delivered successfully.', iconType:'info'},
    {id:'5', title:'Delivery orders success', date:'11/1/2020', description:'Your order was delivered successfully.', iconType:'info'},
    {id:'6', title:'Delivery orders success', date:'11/1/2020', description:'Your order was delivered successfully.', iconType:'info'},
    {id:'7', title:'Delivery orders success', date:'11/1/2020', description:'Your order was delivered successfully.', iconType:'info'},
    {id:'8', title:'Delivery orders success', date:'11/1/2020', description:'Your order was delivered successfully.', iconType:'info'},
  ]);
  
  return (
    <FlatList style={styles.taskList}
      numColumns={1}
      keyExtractor={(item) => item.id}
      data={people}
      renderItem={({item})=> (
        <View style={styles.taskItemContainer}>
            <Card style={styles.taskItem}>
              <View style={styles.taskItemHeader}>
                <View style={[styles.IconWrapAccountContent, {
                  backgroundColor: '#F5A623',
                }]}>
                  <IconFeather name="gift" color="#FFFFFF" size={20}/>
                </View>
                <View style={{paddingLeft: 10}}>
                  <Text style={{fontSize:18, fontWeight:'700', color:'#1BA9FF'}}>{item.title}</Text>
                  <Text style={{fontSize:11, color:"#777777"}}>{item.date}</Text>
                </View>
              </View>
              <Text style={{fontSize:16, color:"#777777"}}>{item.description}</Text>
            </Card>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  taskList:{
    flex:1,
    flexDirection:'column',
    backgroundColor: "#FFFFFF",
  },

  taskItemContainer:{
    // justifyContent:'space-between',
    // alignItems:'flex-start',
    // paddingTop:10,
    // borderBottomWidth: 1,
    // borderBottomColor: '#777777',
    paddingBottom:5,
    width: '100%',
    alignItems: 'center'
  },

  taskItem: {
    width: '95%',
    padding: 10,
    borderColor: '#777777',
    borderWidth: 0.5,
    margin: 5,
    marginTop: 15,
    borderRadius: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    shadowColor:'#777777',
    shadowOffset: {width:1, height:1},
  },

  taskItemHeader:{
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },

  IconWrapAccountContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    minWidth: 30,
    minHeight: 30,
    borderRadius: 60,
  },
});

export default MainNotifications;