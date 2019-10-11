import React from 'react'

import ItemImage from '../ItemImage/ItemImage'

import './ItemCard.scss'

const ItemCard = (props) => {  
  return (
    <li className="item-container">
      <div className="item-sub-container">
        <ItemImage/>
        <div style={{padding: '20px'}}>
          <p data-testid="txt-item-name" className="item-name">{props.item.name}</p>
          <p data-testid="txt-item-name" className="item-producer">{props.item.gender}</p>
        </div>
      </div>
    </li>
  )
}

export default ItemCard