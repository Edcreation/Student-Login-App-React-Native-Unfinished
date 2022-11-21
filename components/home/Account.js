import * as React from 'react';
import { View, Text,TouchableOpacity,StyleSheet,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  { auth } from '../../firebase';
export default function Account({ navigation, route }) {
    const HandleSignout = () => {
        auth
        .signOut()
        .then(() => {
            navigation.replace("Login")
        })
        .catch(error => alert(error.message))
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={styles.account_box} >
            <ScrollView 
            style={styles.email_loc}
            contentContainerStyle={{
                alignItems: 'flex-start'
            }}
            >
                <Text style={styles.email}>Email: {auth.currentUser?.email}</Text>
                <Text style={styles.email}>ID:</Text>
                <Text style={styles.email}>Phone:</Text>
                <Text style={styles.email}>FIrst Name:</Text>
                <Text style={styles.email}>Last Name:</Text>
                <Text style={styles.email}>Age:</Text>
                <Text style={styles.email}>Gender:</Text>
                <Text style={styles.email}>Nationality:</Text>
                <Text style={styles.email}>Country of Residence:</Text>
                <Text style={styles.email}>State/District:</Text>
                <Text style={styles.email}>National ID:</Text>
                <Text style={styles.email}>Birth Date:</Text>
                <Text style={styles.email}>Date Joined:</Text>
            </ScrollView>
            <TouchableOpacity
                        onPress={HandleSignout}
                        style={styles.logout_btn}>
                    <Text style={styles.btn_text}> Log out </Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    account_box:{
        height: 500,
        width: '89%',
        padding: 10,
        backgroundColor: "#A22C29",
        borderRadius: 12,
        justifyContent: 'flex-end',
    },
    email_loc:{
        flexDirection: 'column',
        backgroundColor: '#fff',
        width: '100%',
        height: 400,
        padding: 5,
        marginTop: 20,
        borderRadius: 5,
    },
    email:{
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'right',
        marginBottom: 10
    },
    logout_btn:{
        backgroundColor: '#022F40',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10

    },
    btn_text:{
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})