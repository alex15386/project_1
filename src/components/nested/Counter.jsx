import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterDecrementAction, counterIncrementAction, resetCounterAction } from "../../store/counterReducer";

const Counter = () => {


  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter)
  


  return (
    <div className="container">
      <div className="card my-5 bg-info bg-gradient">
        <div className="card-body">
          <button className="btn btn-success"
          onClick={() => dispatch(counterIncrementAction())}
          >Increment</button>
          <p>count is {counter}</p>
          <button className="btn btn-danger mx-3"
          onClick={() => dispatch(counterDecrementAction())}
          disabled={counter === 0}
          >Decrement</button>
          <button className="btn btn-warning mx-3"
          onClick={() => dispatch(resetCounterAction())}
          >Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Counter