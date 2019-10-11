import { axiosInstance } from '../api/axios'
import { webSocketInstance } from '../api/ws'


let setItems = () => {
  return async (dispatch) => {
    let result = await axiosInstance.get('/people/')
    let items = result.data.results
    dispatch({type: 'SET_ITEMS', items: items})
  }
}
export { setItems }

let items$
const subscribeToItems = () => {
  return async (dispatch) => {
    items$ = webSocketInstance('dumb-increment-protocol')
      .subscribe({ 
        next (message) {
          dispatch({ type: 'SET_COUNTER', counter: message })},
        error(error) {
          console.log(`WebSocket error: ${error.message}`)
        }
      })
  }
}

export { subscribeToItems }

const unsubscribeFromItems = () => {
  return async (dispatch) => {
    items$.unsubscribe()
  }
}
export { unsubscribeFromItems }