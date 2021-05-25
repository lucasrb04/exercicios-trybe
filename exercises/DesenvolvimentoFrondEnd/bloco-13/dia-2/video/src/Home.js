import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Minha Homepage</h1>
        <Link to="/About">About</Link>
      </div>
    )
  }
}

export default Home