import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet,KeyboardAvoidingView } from 'react-native';

class Login extends React.Component{
  state = {
    username: '',
    password: '',
  }
  
 render(){
     return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
     <View style={styles.container}>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        <Button
          title={'Login'}
          style={styles.input}
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
    borderColor: 'black',
    marginBottom: 10,
  },
};
export default Login;
