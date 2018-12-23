import React from 'react';
import firebase from 'firebase';
import { StyleSheet, Text, View } from 'react-native';
import { config } from './src/util/constants'
import Login from './src/components/Login';

export default class App extends React.Component {

  componentWillMount(){
   // config will come from different file
    firebase.initializeApp(config);
  }
  render() {
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#33FFCA"
  },
});

