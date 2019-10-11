import enzyme from 'enzyme'

import React from 'react'
import ItemCard from './ItemCard'

import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

import thunk from 'redux-thunk'
const mockStore = configureStore([thunk])

import { mockData } from '../../../utilities/store/mock'

const mockItem = mockData.data.allPersons[0]

describe('renders <Item />', () => {
  it('check item name', () => {
    let store = mockStore({})
    let wrapper = enzyme.mount(<Provider store={store}><ItemCard item={mockItem}/></Provider>)
    
    expect(wrapper.find('[data-testid="txt-item-name"]').text()).toBe(mockItem.name)
  })
  it('check item gender', () => {
    let store = mockStore({})
    let wrapper = enzyme.mount(<Provider store={store}><ItemCard item={mockItem}/></Provider>)
    
    expect(wrapper.find('[data-testid="txt-item-name"]').text()).toBe(mockItem.gender)
  })
})
