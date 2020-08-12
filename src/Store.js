import * as redux from 'redux';
// Or Give this -> import {createStore} from 'redux'

// Actions

export const  COUNTER_INCREMENT='counter/increment';
export const  COUNTER_DECREMENT='counter/decrement';

const initialState ={
    count:0
}

// Reducer

const reducer=(state = initialState, action) => {
    switch(action.type){
        case  COUNTER_INCREMENT: {
            return{state, count: state.count +1};
        }
        case  COUNTER_DECREMENT: {
            return{state, count: state.count -1};
        }
        default :{
            return state;
        }
    }
}

// Store

const store =redux.createStore(reducer);  // Or const store =createStore(reducer);
console.log(store)
export default store;
