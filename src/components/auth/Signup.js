import React from 'react';
import { TouchableOpacity, Text, View, KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo';

import {Brand, Input} from './../common';

import {colors} from './../../util/colors';
import { Actions } from 'react-native-router-flux';
import {userDetail, signupUser} from "./../actions";

import Icon from "react-native-vector-icons/FontAwesome";

const { iconColor ,gradientColors, inputBorderColor, inputTextColor } = colors;
class Signup extends React.Component{
  
  constructor (props){
    super(props);
    this._onButtonPress = this._onButtonPress.bind(this);
  }
  _onButtonPress() {
    const {email, password, firstName, lastName } = this.props;
    this.props.signupUser(firstName, lastName, email, password);
  }
 render(){
   
     return (
     <LinearGradient
          colors={gradientColors}
          style={styles.container}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>  
        <Input
          onChangeText={value => this.props.userDetail({prop:'lastName', value})}
          value={this.props.lastName}
          placeholder={'Name'}
          placeholderTextColor={colors.placeholderColor}
        />
        <Input
          onChangeText={value => this.props.userDetail({prop:'email', value})}
          value={this.props.email}
          placeholder={'Email'}
          placeholderTextColor={colors.placeholderColor}
        />
        <Input
          onChangeText={value => this.props.userDetail({prop:'password', value})}
          value={this.props.password}
          placeholder={'Password'}
          secureTextEntry={true}
          placeholderTextColor={colors.placeholderColor}
        />
        <TouchableOpacity
          title={'Login'}
          onPress= {this._onButtonPress}
          style= {[styles.buttonStyle]}
        >
        <View style={{right:5,top: '50%', position: 'absolute'}}>
            <Icon  name="sign-in" size={20} color={iconColor} /> 
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
            <Icon  name="arrow-circle-left" size={20} color={iconColor} /> 
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
  buttonStyle : {
    width: "80%",
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: inputBorderColor,
    marginTop: 20,
    fontSize: 18,
    backgroundColor: inputTextColor
},
textStyle: {
    alignSelf: 'center',
    color: iconColor,
    fontSize: 18,
    fontWeight: '600',
}
};
const mapStateToProps = ({auth}) => {
  return {
      email: auth.email,
      password: auth.password,
      firstName: auth.firstName,
      lastName: auth.lastName
  }
};
export default connect( mapStateToProps, {userDetail, signupUser} ) (Signup);
