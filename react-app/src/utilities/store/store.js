import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const initialState = { items: null, counter: null }

const RootReducer = (state = initialState, action) => {
  if (action.type === 'SET_ITEMS') {
    return { ...state, items: action.items }
  } else if (action.type === 'SET_COUNTER') {
    return { ...state, counter: action.counter }
  }
  return state
}
const store = createStore(RootReducer, applyMiddleware(thunk))

export default store