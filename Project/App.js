import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './navigation/BottomTabNavigator';
import ListAS1 from './navigation/ListScreens/ListAS1';
import ListAS2 from './navigation/ListScreens/ListAS2';
import ListAS3 from './navigation/ListScreens/ListAS3';
import ListAS4 from './navigation/ListScreens/ListAS4';
import ListAS5 from './navigation/ListScreens/ListAS5';
import ListAS6 from './navigation/ListScreens/ListAS6';
import ListAS7 from './navigation/ListScreens/ListAS7';
import ListAS8 from './navigation/ListScreens/ListAS8';
import ListAS9 from './navigation/ListScreens/ListAS9';
import ListAS10 from './navigation/ListScreens/ListAS10';
import ListScreen from './navigation/ListScreen';
import useLinking from './navigation/useLinking';

const Stack = createStackNavigator();

export default function App(props) {

  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that need prior to rendering the app

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
          <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} />
            <Stack.Screen name="ListScreen" component={ListScreen} />
            <Stack.Screen name="List1" component={ListAS1} />
            <Stack.Screen name="List2" component={ListAS2} />
            <Stack.Screen name="List3" component={ListAS3} />
            <Stack.Screen name="List4" component={ListAS4} />
            <Stack.Screen name="List5" component={ListAS5} />
            <Stack.Screen name="List6" component={ListAS6} />
            <Stack.Screen name="List7" component={ListAS7} />
            <Stack.Screen name="List8" component={ListAS8} />
            <Stack.Screen name="List9" component={ListAS9} />
            <Stack.Screen name="List10" component={ListAS10}/>
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
