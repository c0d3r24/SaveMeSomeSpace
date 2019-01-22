import React from 'react';
import { TouchableOpacity, Text, View, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { LinearGradient } from 'expo';
import {Brand, Input} from './../common';
import {colors} from './../../util/colors';
import { Actions } from 'react-native-router-flux';
import Icon from "react-native-vector-icons/FontAwesome";
import {userDetail} from './../../actions';

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
        <Input
          value={this.props.email}
          onChangeText={(username) => this.props.userDetail({prop:'email', username})}
          placeholder={'Username'}
          placeholderTextColor={colors.placeholderColor}
          style={styles.input}
        />
        <Input
          value={this.props.password}
          onChangeText={(password) => this.props.userDetail({prop:'password', password})}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
          placeholderTextColor={colors.placeholderColor}
        />
        <TouchableOpacity
          title={'Login'}
          onPress= {() => Actions.main()}
          style= {[styles.buttonStyle, ,{marginTop:30}]}
        >
        <View style={{right:5,top: '50%', position: 'absolute'}}>
            <Icon  name="unlock" size={20} color={colors.iconColor} /> 
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
            <Icon  name="arrow-circle-right" size={20} color={colors.iconColor} /> 
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

const mapStateToProps = ({auth}) => {
  return {
    email: auth.email,
    password: auth.password
  }
}
export default connect(mapStateToProps,{userDetail})(Login);
