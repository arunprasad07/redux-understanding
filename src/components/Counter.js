import { Component } from 'react';
import classes from './Counter.module.css';
import { useSelector, useDispatch, connect } from 'react-redux'

const Counter = () => {

  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.show)
  const dispatch = useDispatch();

  const incrementHander = () => {
    dispatch({ type: 'increment' })
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement' })
  };

  const increaseHandler = () => {
    dispatch({ type: 'increase', value: 10 })
  }

  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' })
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHander}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main >
  );
};

export default Counter


