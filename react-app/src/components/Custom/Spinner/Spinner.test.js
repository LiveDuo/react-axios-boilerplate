import enzyme from 'enzyme'

import React from 'react'
import Spinner from './Spinner'

describe('renders <Spinner />', () => {
  it('contains add button', () => {
    let wrapper = enzyme.mount(<Spinner/>)
    
    expect(wrapper.find('[data-testid="spr-loading-indicator"]').exists()).toBe(true)
  })
})
