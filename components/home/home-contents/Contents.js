import React from 'react';
import { View, ScrollView, Text, StyleSheet,ImageBackground, Button,TouchableOpacity} from 'react-native';
import Application from './Application';
import appl from '../../../assets/appl.jpg';
import fina from '../../../assets/fina.jpg';
import acc from '../../../assets/accom.jpg';
import reg from '../../../assets/reg.jpg';
const Home= ({ navigation, route })=> {
  return (
        <View style={styles.home}>
            <ScrollView 
            style={styles.home_box}
            contentContainerStyle={{ 
                alignItems: 'center'
             }}
            >
            <TouchableOpacity
                onPress={() =>
                      navigation.navigate('Application')}
                style={[styles.image, styles.shadowProp]}
                >
                <ImageBackground source={appl} imageStyle={{ borderRadius: 18, }} style={styles.image}>
                <Text style={styles.btn_content_text}> Application </Text>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() =>
                      navigation.navigate('Loans')}
                style={styles.image}>
                <ImageBackground source={fina} imageStyle={{ borderRadius: 18, }} style={styles.image}>
                <Text style={styles.btn_content_text}> Loans </Text>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() =>
                      navigation.navigate('Registration')}
                style={styles.image}>
                <ImageBackground source={reg} imageStyle={{ borderRadius: 14, }} style={styles.image}>
                <Text style={styles.btn_content_text}> Registration </Text>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() =>
                      navigation.navigate('Accommodation')}
                style={styles.image}>
                <ImageBackground source={acc} imageStyle={{ borderRadius: 18, }} style={styles.image}>
                <Text style={styles.btn_content_text}> Accommodation </Text>
                </ImageBackground>
            </TouchableOpacity>
            </ScrollView>
        </View>
  )
}
const styles = StyleSheet.create({
    image:{
        width: 340,
        height: 240,
        justifyContent: 'flex-end',
        marginVertical: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    },
    home_box:{
        backgroundColor: '#f0f0f0',
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 30,
    },
    home:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%'
    },

    btn_content_text:{
        color: "white",
        fontSize: 38,
        lineHeight: 84,
        fontWeight: "600",
        textAlign: "center",
        backgroundColor: "#000000c0",
        borderBottomRightRadius: 14,
        borderBottomLeftRadius: 14,
    },
    
    home_content:{
        backgroundColor: '#fff',
        width: 340,
        height: 240,
        borderRadius: 11,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
  });
  


export default Home;