import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter)
  console.log(counter);


  return (
    <div className="container">

    </div>
  );
}

export default Counter