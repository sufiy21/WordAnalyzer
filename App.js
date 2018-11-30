//Muhamad Sufiyan Bin Mohamed Shafieek 1527991
//Muhammad Haziq Bin Zul Hasni 1529081

import React,{Component}  from 'react';
import {StyleSheet, Text, View, TextInput, Alert, Button} from 'react-native';

export default class App extends Component {// Class done  by Haziq

  constructor (){
      super();
      this.state ={
          word: '',
          char: [],
          consonant: 0,
          cvowels: 0,
          counter: 0
      };
  }

  analyze= ()=> {   //Analyze Function done by Sufiyan 
      
      
      this.setState({consonant: 0}),
      this.setState({cvowels: 0}),
      this.setState({counter: 0}),

      this.setState({char:this.state.word.split("")}, 
      
      ()=> {
          this.setState({counter: this.state.char.length}) 

          for (var i=0; i<this.state.char.length; i++){
              const value = this.state.char[i];
              const vowels = ['a','e','i','o','u','A','E','I','O','U']; 

              if (vowels.includes(value)){ 
                  this.setState({cvowels: this.state.cvowels +=1})
              }
              else { 
                  this.setState({consonant: this.state.consonant +=1})
              }
              
          }

      });
  }

render () {//Render done by Haziq
  return (
      <View style= {styles.container}>
          <Text>                                                      A Word Analyzer</Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text>Word</Text>
          <TextInput style = {{backgroundColor: '#D9D9D9', textAlign: "center", padding: 10, marginBottom: 10}} onChangeText={(word) => this.setState({word})} placeholder ="Type a word"/>
          <Button onPress={() => this.analyze()} title = "A N A L Y Z E"></Button>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text>Word: {this.state.word}</Text>
          <Text >No of Consonants: {this.state.consonant}</Text>

          <Text >No of Vowels: {this.state.cvowels}</Text>

          <Text >No of Characters: {this.state.counter}</Text>
      </View>
  );
  }

}


const styles = StyleSheet.create({// Styling done by Haziq
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    textAlign: 'auto',
    justifyContent: 'center',
  },
});
