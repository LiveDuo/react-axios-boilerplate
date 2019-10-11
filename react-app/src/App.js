import React from 'react';

import HeaderBar from './components/Header/HeaderBar/HeaderBar'
import GridItems from './components/Grids/GridItems/GridItems'

import { Provider } from 'react-redux'

import store from './utilities/store/store'

const App = () => {
  return (
    <Provider store={store}>
      <HeaderBar/>
      <GridItems />
    </Provider>
  )
}
export default App;
