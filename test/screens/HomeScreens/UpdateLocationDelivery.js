import React, {useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import UserContext from './UserContext';

const UpdateLocationDelivery = () => {
  const [valueforContext, setValueforContext] = useContext(UserContext);

    return (
        // <View>
        //   <Text>{valueforContext.name}</Text>
        //   <Button title='updateName' onPress={() => setValueforContext({name : 'adfasdfadsf'})}></Button>
        // </View>
      );
}

export default UpdateLocationDelivery;