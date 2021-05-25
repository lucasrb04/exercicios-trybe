import React, { Component } from 'react'

class Profile extends Component {
  render() {
    const { ship } = this.props.match.params
    return (<h1>Meu perfil: { this.props.name }, dono do navio {ship}</h1>)
  }
}

export default Profile