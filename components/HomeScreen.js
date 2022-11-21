import React, { useState } from 'react';
import { View, Text, StyleSheet,TextInput, Pressable, Image,ImageBackground} from 'react-native';


const HomeScreen = ({ navigation })=> {
  return (
    <View style={styles.back}>
    <ImageBackground source={require('../assets/homescreen.jpg')} resizeMode="cover" style={styles.image}>
        <View style={styles.butn}>
            <Pressable 
            title="START"
            onPress={() =>
            navigation.navigate('Login')}
            style={styles.btn}
            >
            <Text style={styles.text}>START</Text>
            </Pressable>
        </View>
    </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    back:{
        flex: 1,

    },
    btn:{
        backgroundColor: "#fff",
        marginBottom: 90,
        width: 200,
        height: 50,
        alignSelf: "center",
        fontSize: 44,
        justifyContent: "center",
        borderRadius: 50,
        backgroundColor: "#E03616",
        color: "#fff",
        
    },
    text:{
        alignSelf: "center",
        fontSize: 34,
        fontWeight: "bold",
        color: "#fff"
    },
    image:{
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
        
    }
})

export default HomeScreen