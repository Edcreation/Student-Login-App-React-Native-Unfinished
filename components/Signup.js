import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet,TextInput, TouchableOpacity,Alert} from 'react-native';
import { auth } from '../firebase';
/**
 * left alert error on sign in button. ... -> did you have a good time?😉
 * 
 */

const Signup= ({ navigation })=> {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
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
         .createUserWithEmailAndPassword(email, password)
         .then(userCredintials => {
           const user = userCredintials.user;
           console.log(" logged in with ", user.email);
         })
         .then(() =>
         navigation.navigate('Login'))
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

  return (
        <View style={styles.login}>
          
          <View style={styles.login_box}>
            <Text style={styles.log_title}>Sign Up</Text>
            <ScrollView style={styles.user_inputs}>
                <View style={styles.user_id}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.user_id_input}
                        placeholder="Enter email here."
                        value={email}
                        onChangeText={text => setEmail(text)}
                        />
                </View>
                <View style={styles.user_pass}>
                <Text style={styles.label}>Password</Text>
                <TextInput
                        secureTextEntry={true}
                        style={styles.user_id_input}
                        placeholder="6 Characters at least."
                        value={password}
                        onChangeText={text => setPassword(text)}
                        />
                </View>
                <View style={styles.btns}>
                  <TouchableOpacity
                  onPress={handleSignUp}
                  style={styles.btn}>
                    <Text style={styles.btn_text}> Sign Up </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.replace('Login')}
                    style={styles.btn2}>
                    <Text style={styles.btn_text2}> Login </Text>
                  </TouchableOpacity>
                </View>
            </ScrollView>
          </View>
        </View>
  )
}
const styles = StyleSheet.create({
    cancle: {
      color: '#fff'
    },
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
  


export default Signup;