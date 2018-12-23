import React, {Component} from 'react';
import { Alert, Button, TextInput, View, StyleSheet, KeyboardAvoidingView} from 'react-native';

class Signup extends React.Component{
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repeatedPassword: '',

    }

    render(){
        return(
            <KeyboardAvoidingView behavior="padding" style={StyleSheet.container}>
                <View style={StyleSheet.container}>
                    <TextInput
                    value={this.state.firstName}
                    onChangeText={(firstName) => this.setState({firstName})}
                    placeholder={'First name'}
                    style={Styles.input}
                    />
                    <TextInput
                    value={this.state.lastName}
                    onChangeText={(lastName) => this.setState({lastName})}
                    placeholder={'Last name'}
                    style={Styles.input}
                    />
                    <TextInput
                    value={this.state.email}
                    onChangeText={(email) => this.setState({email})}
                    placeholder={'Email'}
                    style={Styles.input}
                    />
                    <TextInput
                    value={this.state.password}
                    onChangeText={(password) => this.setState({password})}
                    placeholder={'Password'}
                    style={Styles.input}
                    />
                    <TextInput
                    value={this.state.repeatedPassword}
                    onChangeText={(repeatedPassword) => this.setState({repeatedPassword})}
                    placeholder={'Repeat password'}
                    style={Styles.input}
                    />
                    <Button
                        title={'Sign up'}
                        style={Styles.input}
                    ></Button>
                    <Button
                        title={'Have an account?'}
                        style={Styles.input}
                    ></Button>
                    
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const Styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
export default Signup;