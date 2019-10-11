import enzyme from 'enzyme'

import React from 'react'
import Items from './GridItems'

import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

import thunk from 'redux-thunk'
const mockStore = configureStore([thunk])

import { mockData } from '../../../utilities/store/mock'

const mockItems = mockData.data.allPersons

describe('renders <Items />', () => {
  it('check grid children count if data are fetched', () => {
    let store = mockStore({items: mockItems})
    let wrapper = enzyme.mount(<Provider store={store}><Items /></Provider>)
    
    expect(wrapper.find('[data-testid="lst-items-grid"]').children().length).toBe(21)
  })
  it('check grid if data are not fetched', () => {
    let store = mockStore({products: null})
    let wrapper = enzyme.mount(<Provider store={store}><Items /></Provider>)
    
    expect(wrapper.find('[data-testid="spr-loading-indicator"]').exists()).toBe(true)
  })
})
