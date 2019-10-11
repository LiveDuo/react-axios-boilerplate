import { axiosInstance } from '../api/axios'

let setItems2 = () => {
  return async (dispatch) => {

    // endpoint: /people/1/
    // param: ?format=json
    let result = await axiosInstance.get('/people/?format=json')
    console.log(result)
    let items = result.data.results
    dispatch({type: 'SET_ITEMS', items: items})
  }
}
export const setItems = setItems2
