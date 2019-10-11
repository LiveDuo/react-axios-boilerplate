import enzyme from 'enzyme'

import React from 'react'
import ItemImage from './ItemImage'

describe('renders <ItemImage />', () => {
  it('check image', () => {
    let wrapper = enzyme.mount(<ItemImage/>)
    
    expect(wrapper.find('[data-testid="img-item-media"]').prop("src")).toEqual(expect.stringContaining("http"))
  })
})
