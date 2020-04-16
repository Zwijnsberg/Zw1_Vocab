import React, { Component } from 'react';
import { Image, Array, Button, Alert, TextInput, StyleSheet, AlertIOS, FlatList, List, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import GradientButton from 'react-native-gradient-buttons';


//import { useNavigation } from '@react-navigation/native';


//now we need to see how we call the right functions to add a listItem to the list
// and we need to figure out how to place the generated listItem into the return function in here

//export default function HomeScreen({navigation}) {
export default class HomeScreen extends React.Component {
  constructor (props) {
    super(props);

        /*
        this.state = {
          listInput: '',
          lists: [
            { id: 0, title: '', gb: "#FFFFFF", ge: "#FFFFFF"},
          ]
        }

        this.state = {
          buttonColor: "#fff",
          listInput: '',
          lists: [
            { id: 0, title: 'music', gb: "#FFFFFF", ge: "#FFFFFF"},   //... for the meanwhile this isn't used, but it will be usefull if we want to automate the creation of buttons
            { id: 1, title: 'bruh', gb: "#FFFFFF", ge: "#FFFFFF"},
            { id: 2, title: "chicken", gb: "#FFFFFF", ge: "#FFFFFF"}, 
            { id: 3, title: 'chow', gb: "#FFFFFF", ge: "#FFFFFF"},
          ]
        }

        this.state = {
          colorz: [
            { id: 0, buttColBeg: "#D25809" , buttColorEnd: "#C309D2", active: true},   //... for the meanwhile this isn't used, but it will be usefull if we want to automate the creation of buttons
            { id: 1, buttColBeg: "#D25809" , buttColorEnd: "#C309D2", active: false},
            { id: 2, buttColBeg: "#D25809" , buttColorEnd: "#C309D2", active: false}, 
            { id: 3, buttColBeg: "#D25809" , buttColorEnd: "#C309D2", active: false},
            { id: 4, buttColBeg: "#D25809" , buttColorEnd: "#C309D2", active: false},
            { id: 5, buttColBeg: "#D25809" , buttColorEnd: "#C309D2", active: false},
            { id: 6, buttColBeg: "#D25809" , buttColorEnd: "#C309D2", active: false},
            { id: 7, buttColBeg: "#D25809" , buttColorEnd: "#C309D2", active: false},
            { id: 8, buttColBeg: "#D25809" , buttColorEnd: "#C309D2", active: false},
            { id: 9, buttColBeg: "#D25809" , buttColorEnd: "#C309D2", active: false},
          ] */

      this.state = {
      buttColor: "#1C04EC" , buttColorE: "#00E18F" ,  butt1Color: "#DAD7D7", butt1ColorE: "#DAD7D7", butt2Color: "#fff", butt2ColorE: "#fff", butt3Color: "#fff", butt3ColorE: "#fff",
      butt4Color: "#09D2CF",  butt5Color: "#D2B409", butt6Color: "#1809D2", butt7Color: "#09D252", butt8Color: "#D25809", butt9Color: "#C009D2", title0: "General", title1: "+", title2: "+", title3: "+",
      }
  }


  _handleTextChange = event => {
    this.setState({title1: event.nativeEvent.text})
  }



  onButtonPress = () => {
      this.setState({ butt1Color: "#00A25B"  });
      this.setState({ butt1ColorE: "#DCFF4D" });
      this.onGray();
      //this.setState.xx({xx: false})
      this.setState.yy = 2;
  }

  onGray = () => {
    this.setState({ butt2Color: "#DAD7D7" });
    this.setState({ butt2ColorE: "#DAD7D7" });
  }


  
  onColor = () => { 
    
      this.setState({ butt2Color: "#E30060"});
      this.setState({ butt2ColorE: "#FFFC1B"});
      this.onGray2();
  } 

  onGray2 = () => {
    this.setState({ butt3Color: "#DAD7D7" });
    this.setState({ butt3ColorE: "#DAD7D7" });
  }

  onColor2 = () => { 
    
    this.setState({ butt3Color: "#FFEEBD"});
    this.setState({ butt3ColorE: "#9300FF"});
} 

  listTitle0 = (text) => { 
    var x = text;
    return x;
  }

  listTitle1 = () => { 
    var x = this.state.title1;
    return x;
  }

  listTitle2 = () => { 
    var x = this.state.title2;
    return x;
  }

  listTitle3 = () => { 
    var x = this.state.title3;
    return x;
  }

  button1Press = (text) => {
    this.setState({title1: text});
    this.onButtonPress();
  }

  button2Press = (text) => {
    this.setState({title2: text});
    this.onColor();
  }

  button3Press = (text) => {
    this.setState({title3: text});
    this.onColor2();
  }


  render(){

  const { navigation } = this.props;
  
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginVertical: 24}}> 

      <GradientButton
        text= {this.listTitle0("General")}
        style={{ marginVertical: 8 }}
        textSyle={{ fontSize: 20 }}      
        gradientBegin= {this.state.buttColor}
        gradientEnd= {this.state.buttColorE}
        gradientDirection="diagonal"
        height={150}
        width={190}
        radius={15}
        impact
        impactStyle='Light'
        onPressAction={() => navigation.navigate('List1')}
      />

      <GradientButton
            text= {this.listTitle1()}
            textSyle={{ fontSize: 120, color: "#FFFFFF"}}
            textColor="#FFFFFF"    
            style={{ marginVertical: 0 }}  
            gradientBegin= {this.state.butt1Color}
            gradientEnd= {this.state.butt1ColorE}                            //{this.state.butt1Color}
            gradientDirection="diagonal"
            height={150}
            width={190}
            radius={15}
            impact
            impactStyle='Heavy'
            onPressAction = {() => { Alert.prompt(
                                                  null,
                                                  null,
                                                  [
                                                    {
                                                      text: "Cancel",
                                                      onPress: () => console.log("Cancel Pressed"),
                                                      style: "cancel"
                                                    },
                                                    { text: "OK", onPress: (text) => this.button1Press(text) },
                                                  ],
                                                );}}

            />
  </View>

  <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginVertical: 0}}>

    <GradientButton
      style={{ marginVertical: 0 }}
      text= {this.listTitle2()}
      textSyle={{ fontSize: 20 }}      
      gradientBegin= {this.state.butt2Color}
      gradientEnd= {this.state.butt2ColorE}            
      gradientDirection="diagonal"
      height={150}
      width={190}
      radius={15}
      impact
      impactStyle='Light'
      onPressAction = {() => { Alert.prompt(
                                            null,
                                            null,
                                            [
                                              {
                                                text: "Cancel",
                                                onPress: () => console.log("Cancel Pressed"),
                                                style: "cancel"
                                              },
                                              { text: "OK", onPress: (text) => this.button2Press(text) },
                                            ],
                                          );}}
      />

    <GradientButton
      style={{ marginVertical: 8 }}
      text= {this.listTitle3()}
      textSyle={{ fontSize: 20 }}      
      gradientBegin= {this.state.butt3Color} 
      gradientEnd= {this.state.butt3ColorE} 
      gradientDirection="diagonal"
      height={150}
      width={190}
      radius={15}
      impact
      impactStyle='Light'
      onPressAction = {() => { Alert.prompt(
                                            null,
                                            null,
                                            [
                                              {
                                                text: "Cancel",
                                                onPress: () => console.log("Cancel Pressed"),
                                                style: "cancel"
                                              },
                                              { text: "OK", onPress: (text) => this.button3Press(text) },
                                            ],
                                          );}}
                                          //onPressAction={() => navigation.navigate('List4')}
                                          />

  </View>

  <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginVertical: 30}}>
  <GradientButton
      text="+"
      textSyle={{ fontSize: 120, color: "#fff"}}
      textColor="#fff"    
      style={{ marginVertical: 0 }}  
      gradientBegin= "#FFFFFF"  
      gradientEnd= "#FFFFFF"  
      gradientDirection="diagonal"
      height={150}
      width={190}
      radius={15}
      //impact
      impactStyle='Heavy'
      //onPressAction={() => navigation.navigate('List5')}
    />

    <GradientButton
      text="+"
      textSyle={{ fontSize: 120, color: '"#FFFFFF"'}}
      textColor="#FFFFFF"    
      style={{ marginVertical: 0 }}  
      gradientBegin= "#FFFFFF"  
      gradientEnd= "#FFFFFF"  
      gradientDirection="diagonal"
      height={150}
      width={190}
      radius={15}
      //impact
      impactStyle='Heavy'
      //onPressAction={() => navigation.navigate('List6')}
    />
  </View>

  <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginVertical: 8}}>
  <GradientButton
      text="+"
      textSyle={{ fontSize: 120, color: "#fff"}}
      textColor="#fff"    
      style={{ marginVertical: 0 }}  
      gradientBegin= "#FFFFFF"  
      gradientEnd= "#FFFFFF"  
      gradientDirection="diagonal"
      height={150}
      width={190}
      radius={15}
      //impact
      impactStyle='Heavy'
      //onPressAction={() => navigation.navigate('List7')}
      //onPressAction={() => alert('Back off bitch')}
    />

    <GradientButton
      text="+"
      textSyle={{ fontSize: 120, color: '"#FFFFFF"'}}
      textColor="#FFFFFF"    
      style={{ marginVertical: 0 }}  
      gradientBegin= "#FFFFFF"  
      gradientEnd= "#FFFFFF"  
      gradientDirection="diagonal"
      height={150}
      width={190}
      radius={15}
      //impact
      impactStyle='Heavy'
      //onPressAction={() => navigation.navigate('List8')}
      //onPressAction={() => alert('Back off bitch')}
    />
  </View>

  <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginVertical: 30}}>
  <GradientButton
      text="+"
      textSyle={{ fontSize: 120, color: "#fff"}}
      textColor="#fff"    
      style={{ marginVertical: 0 }}  
      gradientBegin= "#FFFFFF"  
      gradientEnd= "#FFFFFF"  
      gradientDirection="diagonal"
      height={150}
      width={190}
      radius={15}
      //impact
      impactStyle='Heavy'
      //onPressAction={() => navigation.navigate('List9')}
      //onPressAction={() => alert('Back off bitch')}
    />

    <GradientButton
      text="+"
      textSyle={{ fontSize: 120, color: '"#FFFFFF"'}}
      textColor="#FFFFFF"    
      style={{ marginVertical: 0 }}  
      gradientBegin= "#FFFFFF"  
      gradientEnd= "#FFFFFF"  
      gradientDirection="diagonal"
      height={150}
      width={190}
      radius={15}
      //impact
      impactStyle='Heavy'
      //onPressAction={() => navigation.navigate('List10')}
      //onPressAction={() => alert('Back off bitch')}
    />
  </View>
  
  </ScrollView>
  );
  }
}

/*

    <FlatList
            data={this.state.lists}
            extraData={this.state}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => {
              return (
                <ListItem ListItem={item}/>  
              )
            }}
          />
    
    <FlatList
            data={this.state.lists}
            extraData={this.state}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => {
              return (
                <ListItem ListItem={item}/>  
              )
            }}
          />




the following can be used to present a created list into the view through a flatlist:
    
      <List>
          <FlatList
            data={lists}
            renderItem={this.renderRow}
            keyExtractor={item => item.title}
          />
      </List>


function addNewList () {
    let lists = this.state.lists;

    lists.unshift({
      id: lists.length + 1,
      title: "cow", //this may have to be single quote
    });

    this.setState({
      lists: lists,
      title: "cow",
    });
  }


function toggleDone (item) {
    let lists = this.state.lists;

    lists = lists.map((list) => {
      if (list.id == list.id) {
        list.done = !list.done;
      }
      return list;
    })

    this.setState({lists});
  }

function removeList (item) {
    let lists = this.state.lists;

    lists = lists.filter((list) => list.id !== item.id);

    this.setState({lists});
  }


    <ListItem listItem={item} toggleDone={() => toggleDone(item)} removeTodo={() => removeTodo(item)}/>
  export default function HomeScreen({navigation}) {
    export const object = {
      name: 'joe',
      age: 27,
      country: 'France'
  }

// put the functions here, make sure they are put here correctly
// implement them 
// create a seperate component for the button item which will be created


this.state = {
      listInput: '',
      lists: [
        { id: 0, title: ' '}
      ]
    }

function addNewList () {
    let lists = this.state.lists;

    todos.unshift({
      id: todos.length + 1,
      title: this.state.listInput,
    });

    this.setState({
      lists: lists,
      listInput: ''
    });
  }


function toggleDone (item) {
    let lists = this.state.lists;

    lists = lists.map((list) => {
      if (list.id == list.id) {
        list.done = !list.done;
      }

      return list;
    })

    this.setState({lists});
  }

function removeList (item) {
    let lists = this.state.lists;

    lists = lists.filter((todo) => todo.id !== item.id);

    this.setState({lists});
  }

  */



HomeScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
