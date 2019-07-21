import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
// import NameText from './src/components/NameText';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      text: ""
    };
  }
  render(){

 
  return (
    <View style={styles.container}>
      <TextInput 
      placeholderTextColor = "black"
      placeholder="Enter value here"
      style = {styles.input}
      onChangeText = {(text) => {
        this.setState({text:text})
      }}
      />
     <Text style={{marginTop:60, fontSize:20}}>{this.state.text}</Text>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    
  },
  input:{
    borderWidth : 2,
    borderColor:'cyan',
    height:50,
    width:200,
    padding:5,
    marginTop: 50,
    borderRadius:5
  }
});
