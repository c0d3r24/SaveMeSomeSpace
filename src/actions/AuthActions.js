
import {Actions} from "react-native-router-flux";
import { AsyncStorage } from 'react-native';
import firebase from 'firebase';

import {
    CLEAN_PHOTO_STORE,
    FETCH_USER, 
    LOGOUT_USER,
    PROCESS_FAILED,
    PROCESS_SUCCESS,
    PROCESS_USER,
    USER_UPDATE,
} from "./types";

import { validateEmail, validateRequiredField } from "../util/validation";

export const userDetail = ({prop, value}) => {
    return {
        type: USER_UPDATE,
        payload: { prop, value}
    }
};

export const signupUser = (firstName, lastName, email, password) => async dispatch => {
    dispatch({type: PROCESS_USER});
    if(validateRequiredField(firstName)) {
        processFail(dispatch,{message: 'First Name is required'});
        return;
    }
    if(validateRequiredField(lastName)) {
        processFail(dispatch,{message: 'Last Name is required'});
        return;
    }
    if(validateRequiredField(email)) {
        processFail(dispatch,{message: 'Email is required'});
        return;
    }
    if(validateEmail(email)) {
        processFail(dispatch,{message: `${email} is not a valid email`});
        return;
    }
    if(validateRequiredField(password)){
        processFail(dispatch,{message: 'Password is required'});
        return;
    }
    firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => {
                        processSuccess(dispatch, user);
                        firebase.database().ref(`/users/${user.user.uid}/`)
                            .push({email, firstName, lastName})
                            .then(() => {Actions.main()})
                            .catch( (err) => {console.log(err)} )
                    })
                    .catch((err) => {
                        processFail(dispatch);
                        console.log(err);
                    });
    
};

export const loginUser = (email, password) => async dispatch => {

    dispatch({type: PROCESS_USER});
    if(validateRequiredField(email)) {
        processFail(dispatch,{message: 'Email is required'});
        return;
    }
    if(validateEmail(email)) {
        processFail(dispatch,{message: `${email} is not a valid email`});
        return;
    }
    if(validateRequiredField(password)){
        processFail(dispatch,{message: 'Password is required'});
        return;
    }
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
            processSuccess(dispatch, user);
            Actions.main();
        })
        .catch(err => {
            console.log(err);
            processFail(dispatch, err);
        });
};

const processFail =(dispatch, data) => {
    dispatch({type: PROCESS_FAILED, payload:data});
};

export const processSuccess = (dispatch, data) => {
    dispatch({ type: PROCESS_SUCCESS, payload: data });
    Actions.main();
};