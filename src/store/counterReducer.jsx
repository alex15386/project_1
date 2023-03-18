
const defaultState = {
  counter: 0,
}

const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const RESET = "RESET"

export const counterReducer = (state = defaultState, action) => {
  switch(action.type) {
    case INCREMENT:
      return {...state, counter: state.counter + 1}
    case DECREMENT:
      return {...state, counter: state.counter - 1}
    case RESET:
      return {...state, counter: state.counter = 0}
    default:
      return state
  }
}


export const counterIncrementAction = () => ({type: INCREMENT})
export const counterDecrementAction = () => ({type:DECREMENT})
export const resetCounterAction = () => ({type:RESET})