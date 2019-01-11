import React from 'react';

import { Scene, Router, Actions, Tabs } from 'react-native-router-flux';

import Login from './../components/auth/Login';
import Signup from './../components/auth/Signup';

class RouterComponent extends React.Component{
    render () {
        return (
            <Router>
                <Scene hideNavBar key='auth'>
                  <Scene
                    key="login"
                    component={Login}
                    title="login"
                    hideNavBar
                  />
                  <Scene
                    key="signup"
                    component={Signup}
                    title="Links"
                    tabBarLabel="Links"
                    hideNavBar
                  />
              </Scene>
            </Router>    
        )
    }
}
const styles = {
    container: {
      flex: 1,
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
    },
    tabBarStyle: {
      backgroundColor: '#eee',
    },
    tabBarSelectedItemStyle: {
      backgroundColor: '#ddd',
    },
  };
  
export default RouterComponent;