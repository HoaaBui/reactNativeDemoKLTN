import {Modal, Dimensions, TouchableWithoutFeedback, TouchableOpacity,
    StyleSheet, View, Text, TextInput} from 'react-native';
import React from 'react';
import { Button } from 'react-native';

const deviceHeight = Dimensions.get("window").height
export class BottomPopup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            title: this.props.title,
            itemListData: this.props.itemList,
        }
    }

    show = () => {
        this.setState({show: true});
    }

    close = () => {
        this.setState({show: false});
        // this.props.updateTitle('title content from child');
    }

    render() {
        let noteView = (
            <View style={{height:300}}>
                <Text style={{fontSize:20}}>Note</Text>
                <TextInput
                multiline={true}
                numberOfLines={10}
                style={styles.textAreaInput}
                placeholder=' Please input your note.'
                />

                <TouchableOpacity style={styles.noteButton} onPress={this.close}>
                    <Text style={styles.panelButtonTitle}>Confirm</Text>
                </TouchableOpacity>
            </View>
        );

        return (
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={this.state.show}
                onRequestClose={this.close}
            >
                <View
                    style={{
                        flex:1,
                        backgroundColor:'#000000AA',
                        justifyContent: 'flex-end',
                    }}
                >
                    <View
                        style={{
                            backgroundColor:'#FFFFFF',
                            width:'100%',
                            borderTopRightRadius:10,
                            borderTopLeftRadius:10,
                            paddingHorizontal:10,
                            maxHeight: deviceHeight *0.6,
                            minHeight: deviceHeight *0.4,
                        }}
                    >
                        <View>
                            <Text
                                style={{
                                    color:'#182E44',
                                    fontSize: 20,
                                    fontWeight:'700',
                                    color:'#1BA9FF',
                                    margin: 15,
                                    marginLeft:0,
                                }}
                            >
                                {this.state.title}
                            </Text>
                        </View>

                        <View>
                            {
                                this.state.title=== 'Services' && this.state.itemListData && this.state.itemListData.map((item,i) => 
                                    <Text style={ (i === this.state.itemListData.length-1)
                                     ? styles.deliveryTimeItemLastChild : styles.deliveryTimeItem} 
                                     key={item.id} onPress={this.close}>
                                        {item.title}
                                    </Text>)
                            }

                            {
                                this.state.title=== 'Delivery Time' && this.state.itemListData && this.state.itemListData.map((item,i) => 
                                <Text style={ (i === this.state.itemListData.length-1) ? styles.deliveryTimeItemLastChild : styles.deliveryTimeItem} key={item.id} onPress={this.close}>
                                    {item.description}
                                </Text>)                                
                            }

                            {this.state.title === 'Note' && noteView}
                        </View>   
                    </View>
                </View>
            </Modal>
        )
    }
}

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
  