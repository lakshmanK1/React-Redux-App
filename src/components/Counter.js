import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux'

const Counter = () => {
  const counter = useSelector(state=>state.counter);
  const show = useSelector(state=>state.showCounter)
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch({type:'toggle'});
  };

  const increment = () => {
    dispatch({type:'increment'});
  }

  const decrement = () => {
    dispatch({type:'decrement'});
  }

  const increase = () => {
    dispatch({type:'increaseBy2', value:2});
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
    {show && <div className={classes.value}>{counter}</div>}
      <button onClick={increment}>IncrementBy5</button>
      <button onClick={increase}>increaseBy2</button>
      <button onClick={decrement}>DecrementBy5</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
