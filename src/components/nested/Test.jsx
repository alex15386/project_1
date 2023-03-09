import { useEffect } from "react";

const Test = () => {

  const eachCon = (array, n) => {
    let r = [];
    for(let i = 0; i <= array.length - n; i++) {
      let chunk = [];
      for(let j = i; j < i + n; j++) {
        chunk.push(array[j])
      }
      r.push(chunk)
    }
    return r
  }
  
  
  useEffect(() => {
    console.log(eachCon([1, 3, 2, 5, 1, 6, 7], 3));
  }, [])

  return (
    <div className="container">
      
    </div>
  );
}

export default Test;