import React from 'react';
import firebase from 'firebase';
import { StyleSheet, Text, View } from 'react-native';
import Signup from './src/components/Signup';

 
 class App extends React.Component {
  ComponentWillMount(){
    const config = {
      apiKey: "AIzaSyB1YiEfMKJ_QRONLdANaHDh0UoZ_DuJP3U",
      authDomain: "firstproject-5e368.firebaseapp.com",
      databaseURL: "https://firstproject-5e368.firebaseio.com",
      projectId: "firstproject-5e368",
      storageBucket: "firstproject-5e368.appspot.com",
      messagingSenderId: "435468636684"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <Signup />
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
  },
});

export default App;