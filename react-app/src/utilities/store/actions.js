
import { itemsSearch } from '../store/queries'
import { apolloClient } from '../api/graphql'

let setItems2 = () => {
  return async (dispatch) => {
    let result = await apolloClient.query({ query: itemsSearch })
    let items = result.data.allPersons
    dispatch({type: 'SET_ITEMS', items: items})
  }
}
export const setItems = setItems2
