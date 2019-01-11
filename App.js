import React from 'react';

import firebase from 'firebase';

import { Provider } from 'react-redux';

import {createStore, applyMiddleware} from 'redux';

import ReduxThunk from 'redux-thunk';

import { StyleSheet, Text, View } from 'react-native';

import reducers from './src/reducers';

import { config } from './src/util/firebaseConstants'

import RouterComponent from './src/router/RouterComponent';


export default class App extends React.Component {

  componentWillMount(){
   // config will come from different file
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store= { createStore(reducers, {},applyMiddleware(ReduxThunk))}>
        <RouterComponent />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#04523D"
  },
});


