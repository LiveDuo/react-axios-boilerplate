import React  from 'react'

import './ItemImage.scss'

const ItemImage = () => {
  return (
    <div className="item-image-container">
      <img data-testid="img-item-media" src={"https://i.pinimg.com/originals/e4/49/82/e449828caef3789f1a407bd5886e12b1.jpg"} className="item-image"  alt="item"/>
    </div>
  )
}

export default ItemImage