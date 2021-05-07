import React, { Component } from 'react'
import Select from "./Select.js"
import TextArea from "./TextArea.js"
// import './Form.css'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      palavraChave: 'coco',
    };
  }


  handleChange({ target }) {
    const { name, value } = target
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form>
          <TextArea value={this.state.estadoFavorito} handleChange={this.handleChange} />
          <br />
          <Select value={this.state.palavraChave} handleChange={this.handleChange}/>
        </form>
      </div>
    );
  }
}

export default Form;