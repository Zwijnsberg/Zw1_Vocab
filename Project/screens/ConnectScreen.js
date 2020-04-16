import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';


export default function ConnectScreen() {
  return (
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginVertical: 695}}>
        <Image 
        source={require('./../images/datBird.gif')}  
        style={{width: 100, height: 100 }}
         />
      </View>
  );
}


const styles = StyleSheet.create({
});