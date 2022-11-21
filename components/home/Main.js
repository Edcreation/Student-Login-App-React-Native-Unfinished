import * as React from 'react';
import  { View, Text, StyleSheet, Image,Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import home from '../../assets/home.png';
import acc from '../../assets/user.png';
import not from '../../assets/bell.png'
import Home from './Home';
import arrow from '../../assets/previous.png'
import Notifications from './Notifications';
import Account from './Account';



//Screen Name
const notifications = 'Notifications';
const accounts = 'accounts';

const Tab = createBottomTabNavigator();

const Main = ({ navigation: { goBack }, route })=>{
    return(
    <Tab.Navigator
      initialRouteName={Home}
      screenOptions={({route}) => ({
        activeTintColor: '#A22C29',
        inactiveTintColor: 'grey',
        tabBarIcon: ({focused,color,size}) => {
          let rn = route.name;

          if (rn === "Home" ) {
            return <Image source={home} style={styles.icons}/>
          } else if (rn === "Account") {
            return <Image source={acc} style={styles.icons}/>
          } else if (rn === "Notifications") {
            return <Image source={not} style={styles.icons}/> 
          }
        },
        headerStyle: {
            backgroundColor: '#373F51',
          },
        tabBarStyle: { paddingVertical: 10,height: 60, 
            backgroundColor: '#fff', 
            justifyContent: 'center',
            alignItems: 'center'
          },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: '600',
            alignSelf: 'center',
            textAlign: 'center'
          },
        options: {

        }
      })}
      tabBarOptions={{
        activeTintColor: '#A22C29',
        inactiveTintColor: 'black',
        labelStyle: { fontSize: 16,fontWeight: '600',  },
        backgroundColor: 'red',
        fontSize: 15,
      }}
    >
      <Tab.Screen 
      name="Home" component={Home}
      options={{ headerShown: false }} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icons:{
    height: 25,
    width: 25,
    marginVertical: 10,
  },
  header:{
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#00C2D1',
  },
  sectionTitle:{
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    fontSize: 34,
    fontWeight: "bold",
    textAlign: 'center',
    marginLeft: 10,
    marginTop: 20,
    backgroundColor: "#02273b",
    color: "#fff",
    padding: 10,
    borderRadius: 15,
    width: 250,
    alignSelf: "center"
  },
  items:{
    display: "flex",
    
    width: '100%',
    backgroundColor: "#0E6BA8",
    height: '100%',
    marginTop: 10,
    paddingHorizontal: 10,
    paddingTop: 30,
  },
  add:{
    alignSelf: 'center',
    height: 50,
    width: 50,
    borderRadius: 30,
    backgroundColor: "#00C2D1",
    marginTop: 20,
    marginLeft: 20,
  },
  add_image:{
    height: 50,
    width: 50,
  }
});

  export default Main;