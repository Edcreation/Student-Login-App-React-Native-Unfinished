import React from 'react';
import { View, ScrollView,ActivityIndicator,useWindowDimensions, Text, StyleSheet,Image, Button,Pressable,TouchableOpacity} from 'react-native';
import { WebView } from 'react-native-webview';

const Application= ({ navigation: { goBack }, route })=> {
  const { width } = useWindowDimensions();
  return (
      <WebView 
      startInLoadingState={true} 
      javaScriptEnabled={true}
      domStorageEnabled={true}
      containerStyle={{ marginTop: 0, width: "100%", height: "100%" }}
      contentWidth={width}
      originWhitelist={['*']}
      source={{uri:'file:///android_asset/Application/index.html'}}
      scrollEnabled={false}
      scalesPageToFit={false}
      useWebKit={false}
      />
  )
}
const styles = StyleSheet.create({
    webview:{
      alignSelf: 'center',
      width: 380
    },
  });
  


export default Application;