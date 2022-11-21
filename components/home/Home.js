import React from 'react';
import { View, ScrollView, Text, StyleSheet,Image, Button,Pressable,TouchableOpacity} from 'react-native';
import  { auth } from '../../firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Contents from './home-contents/Contents'
import Application from './home-contents/Application';
import Registration from './home-contents/Registration';
import Financial from './home-contents/Financial';
import Accommodation from './home-contents/Accommodation';
const Stack = createNativeStackNavigator();



const Home= ({ navigation, route })=> {
    
  return (
    <Stack.Navigator
      screenOptions = {{
      headerStyle: {
        backgroundColor: '#373F51',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
            fontWeight: '600',
            alignSelf: 'center',
            textAlign: 'center'
          },
    }}>
        <Stack.Screen 
          name="Contents"
          component={Contents}
          options={{ 
            headerShown: true,
          }}
          
           />
        <Stack.Screen 
          name="Application" 
          component={Application}
          options={{ headerShown: true }} />
        <Stack.Screen 
          name="Registration" 
          component={Registration}
          options={{ headerShown: true }} />
        <Stack.Screen 
          name="Loans" 
          component={Financial}
          options={{ headerShown: true }} />
        <Stack.Screen 
          name="Accommodation" 
          component={Accommodation}
          options={{ headerShown: true }} />

    </Stack.Navigator>
  )
}
const styles = StyleSheet.create({
    
    home_box:{
        backgroundColor: '#D8DBE2',
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 0,
    },
    home:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },

    btn_content_text:{
        color: '#000',
        fontSize: 20,
        fontWeight: '500',
        marginBottom: 10,
    },
    
    home_content:{
        backgroundColor: '#fff',
        width: '90%',
        height: 240,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginVertical: 20,

    },
  });
  


export default Home;