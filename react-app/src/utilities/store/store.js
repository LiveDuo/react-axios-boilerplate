import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const initialState = { items: null }

const RootReducer = (state = initialState, action) => {
  if (action.type === 'SET_ITEMS') {
    return { ...state, items: action.items }
  }
  return state
}
const store = createStore(RootReducer, applyMiddleware(thunk))

export default store