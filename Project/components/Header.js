import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.header}>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'transparent',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#A7B4FF',
    fontSize: 40,
    fontWeight: '900',
    textTransform: 'uppercase'
  }
});

/*
can be placed within the view:
      <Image
      style={StyleSheet.absoluteFill}
      source={require('./../images/cloud1.jpg')}  
      /> 
      <Text style={styles.title}>{ props.title }</Text> 
*/

export default Header;