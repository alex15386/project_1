import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "../toolkitRedux/toolkitSlice";


const Counter = () => {

  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()
  console.log(count);

  return (
    <Wrapper>
      <div className="row">
        <div className="col-sm-12">
          {count}
        </div>
        <div className="col-sm-6">
          <button>+</button>
        </div>
        <div className="col-sm-6">
          <button
          onClick={() => dispatch(increment())}
          >-</button>
        </div>
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
