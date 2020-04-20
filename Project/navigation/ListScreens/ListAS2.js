import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, Button, Image, IconButton, readIcon, bookmarkIcon, title, description, url, urlToImage, View, FlatList, Navigator, AsyncStorage } from 'react-native';
import Header from '../../components/Header';
import InputBar from '../../components/InputBar';
import TodoItem from '../../components/TodoItem';
import 'react-native-gesture-handler';
import GradientButton from 'react-native-gradient-buttons';
import { GestureHandlerRefContext } from '@react-navigation/stack';


export default class ListAS2 extends React.Component {
  constructor () {
    super();

    

    this.state = {
      todoInput: '',
      todos: [
        { id: 0, title: '', done: false }
      ]
    }


    this.state = {
      todoInput: '',
      textje: "Testing box for asyncStorage",   //this.displayData,
      todos: []
    }

  }



  addNewTodo () {
    let todos = this.state.todos;

    todos.unshift({
      id: todos.length + 1,
      title: this.state.todoInput,
      done: false
    });

    this.setState({
      todos: todos,
      todoInput: ' '
    });

    // & this.saveList();
  } 

  toggleDone (item) {
    let todos = this.state.todos;

    todos = todos.map((todo) => {
      if (todo.id == item.id) {
        todo.done = !todo.done;
      }

      return todo;
    })

    this.setState({todos});
  }

  removeTodo (item) {
    let todos = this.state.todos;

    todos = todos.filter((todo) => todo.id !== item.id);

    this.setState({todos});
  }

  saveList() {
    let theList = this.state.todos;
    AsyncStorage.setItem('todos', theList);
  }



  displayData = async(text) => {
    alert("This text-change shows that we are able to save a value from the previous screen in local storage (the title of the list) by using AsyncStore, now we must find a way to apply this to the list items.")
    try {
      let word = await AsyncStorage.getItem(text);
      this.setState({textje: word});
    }
    catch(error) {
      alert(error);
    }
  }




  render() {
    const statusbar = (Platform.OS == 'ios') ? <View style={styles.statusbar}></View> : <View></View>;

    // we can put const functions here <------

      return (

          <View style={styles.container}>
        
          <InputBar
            addNewTodo={() => this.addNewTodo()}
            textChange={todoInput => this.setState({ todoInput })}
            todoInput={this.state.todoInput}
          />

          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginVertical: 600}}>
            <GradientButton
              text=  {this.state.textje}
              style={{ marginVertical: 8 }}
              textSyle={{ fontSize: 20 }}      
              gradientBegin= "#F3E9FF"
              gradientEnd= "#F3E9FF"
              gradientDirection="diagonal"
              height={120}
              width={230}
              radius={15}
              impact
              impactStyle='Light'
              onPressAction={() => {this.displayData('word')}}
            />

          </View>

          <FlatList
            data= {this.state.todos} // & {this.displayData('todos')}
            extraData={this.state}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => {
              return (
                <TodoItem todoItem={item} toggleDone={() => this.toggleDone(item)} removeTodo={() => this.removeTodo(item)} />
              )
            }}
          />
          </View>
      );
    } 
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  statusbar: {
    backgroundColor: '#838EFE',
    height: 40
  }
});

