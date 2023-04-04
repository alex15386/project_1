import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { incrementByAmount } from "../app/toolkitSlice";





const Counter = () => {

  

const count = useSelector(state => state.toolkit.count);
const dispatch  = useDispatch();


  return (
    <Wrapper>
      <div className="row">
        <div className="col-sm-12">{count}</div>
        <button className="col-sm-4">+</button>
        <button className="col-sm-4 btn btn-outline-warning"
          onClick={() => dispatch(incrementByAmount(Number(prompt())))}
        >input</button>
        <button className="col-sm-4">-</button>
      </div>
    </Wrapper>
  )
}

export default Counter


const Wrapper = ({children}) => {
  return (
    <div className="container my-5">
      <div className="card text-center my-5">
        <div className="card-body">
            {children}
        </div>
      </div>
    </div>
  );
}


