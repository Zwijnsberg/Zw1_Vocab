import { Ionicons } from '@expo/vector-icons';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import React, { Component, useState } from 'react';
import { Platform, StyleSheet, Text, TextInput, View, FlatList, Navigator } from 'react-native';
import Header from '../components/Header';
import InputBar from '../components/InputBar';
//import TodoItem from '../components/TodoItem';
import 'react-native-gesture-handler';



export default function ConnectScreen() {
  const statusbar = (Platform.OS == 'ios') ? <View style={styles.statusbar}></View> : <View></View>;
  const [value, onChangeText] = React.useState('Useless Placeholder');
  return (

        <View style={styles.container}>
        {statusbar}

        <InputBar />

        <FlatList
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <View>
              </View>
            )
          }}
        />
        </View>
  );
}


function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});