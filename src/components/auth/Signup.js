import React, { Component } from 'react';
import { TouchableOpacity, Button, Text, TextInput, View, StyleSheet,KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo';
import {Brand} from './../common';
import {colors} from './../../util/colors';
import { Actions } from 'react-native-router-flux';

import Icon from "react-native-vector-icons/FontAwesome";

class Signup extends React.Component{
  state = {
    email: '',
    name: '',
    password: '',
  }
 render(){
     return (
     <LinearGradient
          colors={[ '#2b4a42', '#1c312c']}
          style={styles.container}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>  
        <TextInput
          value={this.state.name}
          onChangeText={(name) => this.setState({ name })}
          placeholder={'Name'}
          placeholderTextColor={colors.placeholderColor}
          style={styles.input}
        />
        <TextInput
          value={this.state.username}
          onChangeText={(email) => this.setState({ email })}
          placeholder={'Email'}
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
          onPress= {() => console.log('Signup')}
          style= {[styles.buttonStyle]}
        >
        <View style={{right:5,top: '50%', position: 'absolute'}}>
            <Icon  name="sign-in" size={20} color="#396358" /> 
        </View>
          <Text style={styles.textStyle}>
            Signup 
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          title={'Login'}
          onPress= {() => Actions.pop()}
          style= {[styles.buttonStyle, ,{marginTop:30}]}
        >
        <View style={{left:5,top: '50%', position: 'absolute'}}>
            <Icon  name="arrow-circle-left" size={20} color="#396358" /> 
        </View>
          <Text  style={styles.textStyle}>
          Login
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
export default Signup;
