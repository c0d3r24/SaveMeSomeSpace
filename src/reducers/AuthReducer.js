import { USER_UPDATE, PROCESS_SUCCESS } from './../actions/types'
const INITIAL_STATE = {
    email: '',
    password: '',
    user: {}
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case USER_UPDATE:
            return {...state, [action.payload.prop]: action.payload.value }
        case PROCESS_SUCCESS:
            AsyncStorage.setItem('userToken', action.payload.user.uid);
            return {...state, ...INITIAL_STATE, user: action.payload };
        default:
            return state;
    }
    
}