
const defaultState = {
  counter: 0,
}

const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

export const counterReducer = (state = defaultState, action) => {
  switch(action.type) {
    case INCREMENT:
      return {...state, counter: state.counter + 1}
    case DECREMENT:
      return {...state, counter: state.counter - 1}
    default:
      return state
  }
}