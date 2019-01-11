import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet,KeyboardAvoidingView } from 'react-native';
import {colors} from './../../util/colors';
class Signup extends React.Component{
  state = {
    username: '',
    password: '',
    name:''
  }
  
 render(){
     return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
     <View style={styles.container}>
        <TextInput
          value={this.state.name}
          onChangeText={(name) => this.setState({ name })}
          placeholder={'Name'}
          placeholderTextColor={colors.placeholderColor}
          style={styles.input}
        />
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
        <Button
          title={'Login'}
          style={{color:'#ddd'}}
          onPress= {() => console.log('on press')}
        />
      </View>
      </KeyboardAvoidingView>
      );
 }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.inputBorderColor,
    marginBottom: 10,
    color: colors.inputTextColor
  },
};
export default Signup;
