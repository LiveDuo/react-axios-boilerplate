import React, { useEffect } from 'react';

import './HeaderBar.scss'

import logoIcon from '../../../assets/logos/logo_384.png'

import { connect } from 'react-redux'

import { subscribeToItems, unsubscribeFromItems } from '../../../utilities/store/actions'

const mapStateToProps = state => ({ 
  counter: state.counter
})
const mapDispatchToProps = dispatch => ({
  subscribeToItems: () => dispatch(subscribeToItems()),
  unsubscribeFromItems: () => dispatch(unsubscribeFromItems())
})

const withRedux = connect(mapStateToProps, mapDispatchToProps)

const HeaderBar = (props) => {

  const subscribeToItems = props.subscribeToItems
  const unsubscribeFromItems = props.unsubscribeFromItems

  useEffect(() => {
    subscribeToItems()
  }, [subscribeToItems])

  useEffect(() => {
    return () => {
      unsubscribeFromItems()
    };
  }, [unsubscribeFromItems]);

  return (
    <header className="header-bar">
      <img data-testid="img-logo-icon" className="logo-icon" src={logoIcon} alt="logo" />
      <span style={{marginLeft: 'auto', marginRight: '30px'}}>{props.counter}</span>
    </header>
  )
}

export default withRedux(HeaderBar)