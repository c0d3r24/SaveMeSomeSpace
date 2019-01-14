import React, { Component } from 'react';
import { TouchableOpacity, Button, Text, TextInput, View, StyleSheet,KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo';
import {Brand, Input} from '../common';
import {colors} from '../../util/colors';
import { Actions } from 'react-native-router-flux';
import Icon from "react-native-vector-icons/FontAwesome";

class Home extends React.Component{
  state = {
    username: '',
    password: '',
  }
  
 render(){
     return (
     <LinearGradient
          colors={[ '#2b4a42', '#1c312c']}
          style={styles.container}>
          <Text style={{color: colors.inputBorderColor, fontSize: 30}}>
            HOME
          </Text>
        
      </LinearGradient> 
      );
 }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  buttonStyle : {
    width: "80%",
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.inputBorderColor,
    marginTop: 20,
    fontSize: 18,
    backgroundColor: colors.inputTextColor
},
textStyle: {
    alignSelf: 'center',
    color: '#396358',
    fontSize: 18,
    fontWeight: '600',
}
};
export default Home;
