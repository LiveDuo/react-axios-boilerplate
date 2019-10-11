import enzyme from 'enzyme'

import React from 'react'
import HeaderBar from './HeaderBar'

import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

import thunk from 'redux-thunk'
const mockStore = configureStore([thunk])

describe('renders <HeaderBar />', () => {
  it('check logo icon', () => {
    let store = mockStore({basketProducts: []})
    let wrapper = enzyme.mount(<Provider store={store}><HeaderBar /></Provider>)

    expect(wrapper.find('[data-testid="img-logo-icon"]').prop("src")).toBe("logo_384.png")
  })
})
