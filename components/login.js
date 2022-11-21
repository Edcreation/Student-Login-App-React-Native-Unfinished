import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet,TextInput,TouchableOpacity, ScrollView,Alert} from 'react-native';
import Main from './home/Main';
import { auth } from '../firebase';


const Login= ({ navigation })=> {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const HandleLogIn = () => {
    if(email === "" || password === ""){
      Alert.alert(
        "SID",
        "Empty Field, Check Again",
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          { text: "OK",  }
        ]
      )
    }
    else{
      auth
      .signInWithEmailAndPassword(email.trim(),password)
      .then(userCredintials => {
        const user = userCredintials.user;
        console.log(" logged in with ", user.email);
      })
      .catch(error => Alert.alert(
        "SID",
        "Wrong Email or Password/Try Checking Connection Status",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      ))
    }
    }

  
  useEffect(()=> {
    const uns = auth.onAuthStateChanged(user => {
      if (user){
        navigation.replace('Main');
      }
    })
    return uns
  }, [])
  return (
        <View style={styles.login}>
          <View style={styles.login_box}>
          <Text style={styles.log_title}>Log In</Text>
          <ScrollView style={styles.user_inputs}>
                <View style={styles.user_id}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.user_id_input}
                        placeholder="Enter Registered email here."
                        onChangeText={text => setEmail(text)}
                        />
                </View>
                <View style={styles.user_pass}>
                <Text style={styles.label}>Password</Text>
                <TextInput
                        secureTextEntry={true}
                        style={styles.user_id_input}
                        placeholder="Enter password here."
                        onChangeText={text => setPassword(text)}
                        />
                </View>
                <View style={styles.btns}>
                  <TouchableOpacity
                    onPress={HandleLogIn}
                    style={styles.btn}>
                    <Text style={styles.btn_text}> Login </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                  onPress={() =>
                  navigation.navigate('Signup')}
                  style={styles.btn2}>
                    <Text style={styles.btn_text2}> Sign Up </Text>
                  </TouchableOpacity>
                </View>
            </ScrollView>
          </View>
        </View>
  )
}
const styles = StyleSheet.create({
  login:{
      display: 'flex',
      justifyContent: 'center',
      marginTop: 0,
      paddingTop: 40,
      backgroundColor: '#A22C29'
  },
  label:{
      fontSize: 18,
      color: "#000",
      marginTop: 20,
  },
  login_box:{
      alignItems: 'center',
      backgroundColor: "#fff",
      height: 300,
      justifyContent: "center",
      marginHorizontal: 10,
      marginVertical: 10,
      borderTopStartRadius: 25,
      borderTopEndRadius: 25,
      height: '100%',
      paddingBottom: 40,
  },
  log_title:{
      fontSize: 40,
      fontWeight: 'bold'
  },
  user_inputs:{
      display: "flex",
      flexDirection: "column",
      height: 200,
      width: "80%",
      fontSize: 20,
  },
  user_id:{
      color: "#000",
      width: "100%"
  },
  user_id_input:{
    backgroundColor: "#fff",
    height: 50,
    fontSize: 20,
    borderBottomWidth: 1,
    color: "#0828ca",
    textDecorationLine: "none",

  },
  btns:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  btn:{
    height: 40,
    width: 60,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: 'center',
    borderRadius: 10,
    
  },
  btn_text:{
    color: "#fff",
  },
  btn2:{
    height: 40,
    width: 60,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: 'center',
    borderRadius: 10,
  },
  btn_text2:{
    color: "#000",
  },


});
  


export default Login;