import React from 'react';

import { Scene, Router, Actions, Tabs } from 'react-native-router-flux';

import Icon from "react-native-vector-icons/FontAwesome";
import {colors} from './../util/colors';
import Login from './../components/auth/Login';
import Signup from './../components/auth/Signup';
import Home from '../components/main/HomeScene/Home';
import Settings from '../components/main/Settings';
import Stores from '../components/main/Stores';

class RouterComponent extends React.Component{
    render () {
    const home = () => {return <Icon name="camera-retro" size={24} color="#001813"/>};
    const setting = () => {return <Icon name="sticky-note" size={24} color="#001813"/>};
    const store = () => {return <Icon name="soundcloud" size={24} color="#001813"/>};
    
    return (
            <Router>
              <Scene hideNavBar key="root">
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
              <Scene hideNavBar key='main'>
                <Tabs
                    key="tabbar"
                    backToInitial
                    hideNavBar
                  swipeEnabled
                  tabBarStyle={styles.tabBarStyle}
                  activeBackgroundColor="#03624c"
                  activeTintColor={colors.inputTextColor}
                  inactiveTintColor="#001813"
                  >
                  <Scene
                    key="main_home"
                    component={Home}
                    title="Home"
                    tabBarLabel="Home"
                    icon={home}
                    hideNavBar
                  />
                  <Scene
                    key="main_links"
                    component={Stores}
                    title="Stores"
                    tabBarLabel="Stores"
                    icon={store}
                    hideNavBar
                  />
                  <Scene
                    key="main_settings"
                    component={Settings}
                    title="Settings"
                    tabBarLabel="Settings"
                    icon={setting}
                    hideNavBar
                  />
                </Tabs>
              </Scene>
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
      backgroundColor: colors.inputTextColor
    },
    tabBarSelectedItemStyle: {
      backgroundColor: '#ddd',
    },
  };
  


export default RouterComponent;