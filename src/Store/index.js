import { createStore } from 'redux';


const counterReducer = (state={counter:0}, action) => {
    if(action.type === 'increment'){
        return{
            counter:state.counter + 2
        }
    }else if(action.type === 'decrement'){
        return{
            counter:state.counter - 2
        }
    }else{
        return state
    }
}

const Store = createStore(counterReducer);

// const counterSubscriber = () => {
//     const latestState = Store.getState();
//     console.log(latestState);
// }

// Store.subscribe(counterSubscriber);

// Store.dispatch({type:'increment'});

// Store.dispatch({type:'decrement'});

export default Store;