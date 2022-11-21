import React from 'react';
import { View, Text, StyleSheet,Image, Button} from 'react-native';


const Task= ({ navigation, route })=> {
  return (
        <View style={styles.item}>
          
          <Image style={styles.item_image} source={require('../assets/tasks.png')}/>
          <View style={styles.item_texts} >
            <Text style={styles.item_title}>Task TItle</Text>
            <Text style={styles.item_des}><Text>This is {route.params.name}'s profile</Text></Text>
          </View>
          <View style={styles.item_ops}>
          <Button
            style={styles.ops}
            title="Edit"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"/>
          <Button
            style={styles.ops}
            title="Delete"
            color="#f90000"
            accessibilityLabel="Learn more about this purple button"/>
          </View>
        </View>
  )
}
const styles = StyleSheet.create({
    item_image:{
      width: 30,
      height: 30,
      borderRadius: 5
      
    },
    item:{
      backgroundColor: "#0A1045",
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 5,
      alignItems: 'center',
      borderRadius: 10,
      marginBottom: 10
    },
    item_texts:{
      marginHorizontal: 10,
    },
    item_title: {
      textAlign: 'center',
      fontSize: 20,
      color: "#fff",
    },
    item_des:{
      fontSize: 18,
      color: "#F9E900",
    },
    item_ops:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    ops:{
      marginLeft: 3,
    },
  });
  


export default Task;