import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import GamesScreen from '../screens/GamesScreen';
import ConnectScreen from '../screens/ConnectScreen';
import SettingsScreen from '../screens/SettingsScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Lists',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name= "ios-apps"  />,
        }}
      />
      <BottomTab.Screen
        name="Games"
        component={GamesScreen}
        options={{
          title: 'Games',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name= "ios-analytics" />,
        }}
      />
      <BottomTab.Screen
        name="Connect"
        component={ConnectScreen}
        options={{
          title: 'Connect',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name= "md-code-working" />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name= "ios-settings" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'VOCABULATOR';
    case 'Games':
      return 'Games';
    case 'Connect':
      return 'Connect';
    case 'Settings':
      return 'Settings';
  }
}


const styles = StyleSheet.create({
  headText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
});
