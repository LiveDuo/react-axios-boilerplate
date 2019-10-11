import React, { useEffect } from 'react';

import { connect } from 'react-redux'

import { setItems } from '../../../utilities/store/actions'

import Spinner from '../../../components/Custom/Spinner/Spinner'
import Item from '../../../components/Item/ItemCard/ItemCard'
import withDimensions from '../../../components/HigherOrder/Utilities/withDimensions'

import './GridItems.scss'

const mapStateToProps = state => ({ 
  items: state.items
})
const mapDispatchToProps = dispatch => ({
  setItems: () => dispatch(setItems())
})

const withRedux = connect(mapStateToProps, mapDispatchToProps)

const Items = (props) => {
  const setItems = props.setItems

  useEffect(() => {
    setItems()
  }, [setItems])
  
  let columns = parseInt(props.innerWidth / 302)
  let maxWidth = (columns > 0 ? columns : 1) * 302 // 280px widths + 10px*2 margins + 2px space
  if (props.items) {
    return (
      <ul data-testid="lst-items-grid" className="grid-items" style={{maxWidth: maxWidth+'px'}}>
        {props.items.map(item => <Item key={item.name} item={item}/>)}
      </ul>
    )
  } else {
    return (<div className="loading-indicator"><Spinner/></div>)
  }
}

export default withDimensions(withRedux(Items))