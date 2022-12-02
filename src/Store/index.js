
import {configureStore, createSlice} from '@reduxjs/toolkit'

const initialCounterState = {counter:0, showCounter:true};

const counterSlice = createSlice({
    name:'counter',
    initialState:initialCounterState,
    reducers:{
        increment(state) {
            state.counter++;
        },

        decrement(state) {
            state.counter--;
        },

        increase(state, action) {
            state.counter = state.counter + action.payload; 
        },

        toggle(state) {
            state.showCounter = !state.showCounter;
        }

    }
}); 

const initialAuthState = {isAuthenticated:false}

const authSlice = createSlice({
    name:'Auth',
    initialState:initialAuthState,
    reducers:{
        logIn(state){
            state.isAuthenticated = true;
        },

        logOut(state){
            state.isAuthenticated = false;
        }
    }
});


const Store = configureStore({
    reducer:{Counter:counterSlice.reducer, Auth:authSlice.reducer}
});


export const counterAction = counterSlice.actions;
export const authAction = authSlice.actions;
export default Store;