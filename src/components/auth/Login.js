import React, { Component } from 'react';
import { TouchableOpacity, Button, Text, TextInput, View, StyleSheet,KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo';
import {Brand} from './../common';
import {colors} from './../../util/colors';
import { Actions } from 'react-native-router-flux';
import Icon from "react-native-vector-icons/FontAwesome";

class Login extends React.Component{
  state = {
    username: '',
    password: '',
  }
  
 render(){
     return (
     <LinearGradient
          colors={[ '#2b4a42', '#1c312c']}
          style={styles.container}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>  
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          placeholderTextColor={colors.placeholderColor}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
          placeholderTextColor={colors.placeholderColor}
        />
        <TouchableOpacity
          title={'Login'}
          onPress= {() => console.log('on press')}
          style= {[styles.buttonStyle, ,{marginTop:30}]}
        >
        <View style={{right:5,top: '50%', position: 'absolute'}}>
            <Icon  name="unlock" size={20} color="#396358" /> 
        </View>
          <Text  style={styles.textStyle}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          title={'Login'}
          onPress= {() => Actions.signup()}
          style= {[styles.buttonStyle]}
        >
        
         <View style={{right:5,top: '50%', position: 'absolute'}}>
            <Icon  name="arrow-circle-right" size={20} color="#396358" /> 
        </View>
          <Text style={styles.textStyle}>
            Signup
          </Text>
        </TouchableOpacity>
        </KeyboardAvoidingView>
        <Brand />
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
  input: {
    width: "80%",
    height: 44,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: colors.inputBorderColor,
    marginBottom: 10,
    color: colors.inputTextColor,
    fontSize: 18,
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
export default Login;
