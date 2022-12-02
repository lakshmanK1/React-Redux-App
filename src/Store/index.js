import { createStore } from 'redux';
import {configureStore, createSlice} from '@reduxjs/toolkit'

const initialState = {counter:0, showCounter:true};

const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducer:{
        increment(state) {
            state.counter++;
        },

        decrement(state) {
            state.counter--;
        },

        increase(state, action) {
            state.counter = state.counter + action.value; 
        },

        toggle(state) {
            state.showCounter = !state.showCounter;
        }

    }
}); 


const Store = configureStore({
    reducer:counterSlice.reducer
});



export default Store;