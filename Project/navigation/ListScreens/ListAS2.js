import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, Button, View, FlatList, Navigator, AsyncStorage } from 'react-native';
import Header from '../../components/Header';
import InputBar from '../../components/InputBar';
import TodoItem from '../../components/TodoItem';
import 'react-native-gesture-handler';
import GradientButton from 'react-native-gradient-buttons';

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
      textje: "TEXT",
      todos: [
      ]
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

  _storeData = async () => {
      AsyncStorage.setItem('@Name:key', 'I like to save it.').then(() =>     //<-- async shit
        console.log('Saved selection to disk')
        .catch((error) => console.log('AsyncStorage error: ' + error.message)).done())        
  };

  _retrieveData = async () => {
    AsyncStorage.setItem('Name').then((value) =>     //<-- async shit
        { if (value!==null) {
            "bruh its fucked."
        }})
        .catch((error) => console.log('AsyncStorage error: ' + error.message)).done()
  };


  render() {
    const statusbar = (Platform.OS == 'ios') ? <View style={styles.statusbar}></View> : <View></View>;
      return (

          <View style={styles.container}>
        
          <InputBar
            addNewTodo={() => this.addNewTodo()}
            textChange={todoInput => this.setState({ todoInput })}
            todoInput={this.state.todoInput}
          />


          <FlatList
            data={this.state.todos}
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

          /*
          <View style={{marginVertical: 24, alignItems: 'center'}}>

          <GradientButton
            text= {this.state.textje}
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
            onPressAction = {() => { alert("fuck my life")}} //{ this._storeData}}    //<-- async shit
            />

          <GradientButton
            text= {this.state.textje}
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
            onPressAction = {() => {this.setState({textje: "new text bitch"})}}   //{this.setState({textje: this._retrieveData()})}}  //<-- async shit
            />

          </View> */