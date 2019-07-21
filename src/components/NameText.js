import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class NameText extends Component {
    render(){

    
  return (
      <Text style={styles.textStyles}>Karan Kochar</Text>
  );
  }
}

const styles = StyleSheet.create({
  textStyles:{
    color : 'white',
    fontSize : 20,
    backgroundColor : 'orange',
    paddingHorizontal : 12,
    paddingVertical : 10,
    borderRadius : 5,
    marginTop : 5
  }
});
