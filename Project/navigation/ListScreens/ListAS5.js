import React from 'react';
import { Platform, StyleSheet, Text, View, FlatList, Navigator } from 'react-native';
import Header from '../../components/Header';
import InputBar from '../../components/InputBar';
import TodoItem from '../../components/TodoItem';
import 'react-native-gesture-handler';

export default class ListAS1 extends React.Component {
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