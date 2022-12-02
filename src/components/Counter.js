import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux'
import {counterAction} from '../Store/index'

const Counter = () => {
  const counter = useSelector(state=>state.Counter.counter);
  const show = useSelector(state=>state.Counter.showCounter)
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle());
  };

  const increment = () => {
    dispatch(counterAction.increment());
  }

  const decrement = () => {
    dispatch(counterAction.decrement());
  }

  const increase = () => {
    dispatch(counterAction.increase(3));
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
    {show && <div className={classes.value}>{counter}</div>}
      <button onClick={increment}>Increment</button>
      <button onClick={increase}>increaseBy3</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
