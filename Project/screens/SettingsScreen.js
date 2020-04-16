import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, Image, Platform, TouchableOpacity  } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';



export default function SettingsScreen() {
  return (  
      <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <DevelopmentModeNotice />
          <Text> Example of an image: </Text>
          <Image
            source={
              __DEV__
                ? require('../assets/images/nicelogo1.png')
                : require('../assets/images/nicelogo1.png')
            }
            style={styles.welcomeImage}
          />
        </View>
        <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedText}>
            Just some example text.
          </Text>
        </View>

        <View style={styles.helpContainer}>
          <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>A different way of having a clickable link</Text>
          </TouchableOpacity>
        </View>

        <OptionButton
        icon="md-school"
        label="Example button to url"
        onPress={() => WebBrowser.openBrowserAsync('https://www.investopedia.com/')}
        />      
      </ScrollView>
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

function handleLearnMorePress() {
     WebBrowser.openBrowserAsync('https://tenor.com/7Z0X.gif');
   }
   
   function handleHelpPress() {
     WebBrowser.openBrowserAsync(
       'https://www.investopedia.com/'
     );
   }
   


function DevelopmentModeNotice() {
     if (__DEV__) {
       const learnMoreButton = (
         <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
           Learn more
         </Text>
       );
   
       return (
         <Text style={styles.developmentModeText}>
           This text right here that you're reading is the perfect example of how functions are made and linked to inside the view of the page 
           {learnMoreButton}
         </Text>
       );
     } else {
       return (
         <Text style={styles.developmentModeText}>
           This is some other text.
         </Text>
       );
     }
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
  container: {
       flex: 1,
       backgroundColor: '#fff',
     },
     developmentModeText: {
       marginBottom: 20,
       color: 'rgba(0,0,0,0.4)',
       fontSize: 14,
       lineHeight: 19,
       textAlign: 'center',
     },
     contentContainer: {
       paddingTop: 30,
     },
     welcomeContainer: {
       alignItems: 'center',
       marginTop: 10,
       marginBottom: 20,
     },
     welcomeImage: {
       width: 100,
       height: 80,
       resizeMode: 'contain',
       marginTop: 3,
       marginLeft: -10,
     },
     getStartedContainer: {
       alignItems: 'center',
       marginHorizontal: 50,
     },
     homeScreenFilename: {
       marginVertical: 7,
     },
     codeHighlightText: {
       color: 'rgba(96,100,109, 0.8)',
     },
     codeHighlightContainer: {
       backgroundColor: 'rgba(0,0,0,0.05)',
       borderRadius: 3,
       paddingHorizontal: 4,
     },
     getStartedText: {
       fontSize: 17,
       color: 'rgba(96,100,109, 1)',
       lineHeight: 24,
       textAlign: 'center',
     },
     tabBarInfoContainer: {
       position: 'absolute',
       bottom: 0,
       left: 0,
       right: 0,
       ...Platform.select({
         ios: {
           shadowColor: 'black',
           shadowOffset: { width: 0, height: -3 },
           shadowOpacity: 0.1,
           shadowRadius: 3,
         },
         android: {
           elevation: 20,
         },
       }),
       alignItems: 'center',
       backgroundColor: '#fbfbfb',
       paddingVertical: 20,
     },
     tabBarInfoText: {
       fontSize: 17,
       color: 'rgba(96,100,109, 1)',
       textAlign: 'center',
     },
     navigationFilename: {
       marginTop: 5,
     },
     helpContainer: {
       marginTop: 15,
       alignItems: 'center',
     },
     helpLink: {
       paddingVertical: 15,
     },
     helpLinkText: {
       fontSize: 14,
       color: '#2e78b7',
     },
     developmentModeText: {
     marginBottom: 20,
     color: 'rgba(0,0,0,0.4)',
     fontSize: 14,
     lineHeight: 19,
     textAlign: 'center',
     },
     contentContainer: {
     paddingTop: 30,
     },
     welcomeContainer: {
     alignItems: 'center',
     marginTop: 10,
     marginBottom: 20,
     },
     welcomeImage: {
     width: 100,
     height: 80,
     resizeMode: 'contain',
     marginTop: 3,
     marginLeft: -10,
     },
     getStartedContainer: {
     alignItems: 'center',
     marginHorizontal: 50,
     },
     homeScreenFilename: {
     marginVertical: 7,
     },
     codeHighlightText: {
     color: 'rgba(96,100,109, 0.8)',
     },
     codeHighlightContainer: {
     backgroundColor: 'rgba(0,0,0,0.05)',
     borderRadius: 3,
     paddingHorizontal: 4,
     },
     getStartedText: {
     fontSize: 17,
     color: 'rgba(96,100,109, 1)',
     lineHeight: 24,
     textAlign: 'center',
     },
     tabBarInfoContainer: {
     position: 'absolute',
     bottom: 0,
     left: 0,
     right: 0,
     ...Platform.select({
          ios: {
          shadowColor: 'black',
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
          },
          android: {
          elevation: 20,
          },
     }),
     alignItems: 'center',
     backgroundColor: '#fbfbfb',
     paddingVertical: 20,
     },
     tabBarInfoText: {
     fontSize: 17,
     color: 'rgba(96,100,109, 1)',
     textAlign: 'center',
     },
     navigationFilename: {
     marginTop: 5,
     },
     helpContainer: {
     marginTop: 15,
     alignItems: 'center',
     },
     helpLink: {
     paddingVertical: 15,
     },
     helpLinkText: {
     fontSize: 14,
     color: '#2e78b7',
     },
});