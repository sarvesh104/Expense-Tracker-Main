import React, { Component } from 'react'
import Logo from '../common/Logo'

export default class Header extends Component {
  render() {
    return (
      <div>
        {/* <Logo/> */}
        <h1 style={{"textAlign": "center"}}>Expense Tracker App</h1>
      </div>
    )
  }
}
