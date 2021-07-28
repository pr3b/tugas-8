import { createStore } from 'redux';

const initialState = {
    age: 17,
    name: 'preb'
}

function reducer(state = initialState, action){
    console.log('reducer works', state, action);
    // ketika ada sebuah action, maka kita harus membuat state yg baru
    if(action.type === 'CHANGE_NAME') {
        const newState = {
            ...state,
            name: action.payload
        }
        return newState;
    }
    
    return state
}

const store = createStore(reducer)
// console.log(store.getState(), "ini adalah data dari store");

export function changeName(name){
    return {
        type: 'CHANGE_NAME',
        payload: name
    }
}

export default store;