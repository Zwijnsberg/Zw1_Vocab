import { Ionicons } from '@expo/vector-icons';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import React, { Component, useState } from 'react';
import { Platform, StyleSheet, Text, TextInput, View, FlatList, Navigator } from 'react-native';
import Header from '../components/Header';
import InputBar from '../components/InputBar';
//import TodoItem from '../components/TodoItem';
import 'react-native-gesture-handler';
//import SettingsScreen from '../screens/HomeScreen.js';
import GradientButton from 'react-native-gradient-buttons';



export default class ListItem extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { navigation } = this.props;
    const listItem = this.props.listItem;

    return (
          <GradientButton
          style={{ marginVertical: 8 }}
          text= "ButtonFromList"
          textSyle={{ fontSize: 20 }}      
          gradientBegin="#874f00"
          gradientEned="#f5ba57"
          gradientDirection="diagonal"
          height={150}
          width={190}
          radius={15}
          blueMarine impact
          impactStyle='Light'
          onPressAction={() => {window.location.href = 'ListScreen'}}
          />
    )
  }
}

