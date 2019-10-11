import React from 'react';

import './Spinner.scss'

const Spinner = () => {
  return (
    <div data-testid="spr-loading-indicator" className="lds-ring"><div></div><div></div><div></div><div></div></div>
  )
}

export default Spinner