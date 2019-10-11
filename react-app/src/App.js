import React from 'react';

import HeaderBar from './components/Header/HeaderBar/HeaderBar'
import GridItems from './components/Grids/GridItems/GridItems'

import { Provider } from 'react-redux'

import { BrowserRouter, Switch, Route } from "react-router-dom";

import store from './utilities/store/store'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <HeaderBar/>
        <Switch>
          <Route path="/empty">
            <span>Empty</span>
          </Route>
          <Route path="/">
            <GridItems />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}
export default App;
