// App.js
import React, { Component }from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.saveJoke = this.saveJoke.bind(this)
    this.renderJokeElement = this.renderJokeElement.bind(this)

    this.state = {
        jokeObj: undefined,
        loading: true,
        storedJokes: []
    };
  }
  
  async fetchJoke() {
    this.setState(
      {loading: true}, //primeiro parâmetro da setState()!
      async () => {
      const requestHeaders = { headers: { Accept: 'application/json' } }
      const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
      const requestObject = await requestReturn.json()
      this.setState({
        loading: false,
        jokeObj: requestObject
      })
    })
  }

  componentDidMount() {
    this.fetchJoke()
  }

  saveJoke() {
    this.setState(({ storedJokes, jokeObj }) => ({
      // com o spread, pega todos os valores do estado anterior e atualiza apen
      storedJokes: [...storedJokes, jokeObj]
    }))

    this.fetchJoke();
  }

// se não usasse o spread teríamos:
//  this.setState(({ storedJokes, jokeObj }) => ({
//    storedJokes: [storedJokes, jokeObj]
//  }))
// e o resultado seria:
// storedJokes = ['a', 'b']
// jokeObj = ['c']
// ====> [['a', 'b'], 'c']

  renderJokeElement() {
    return (
      <div>
        <p>{ this.state.jokeObj.joke }</p>
        <button type="button" onClick={ this.saveJoke }>
          Salvar piada!
        </button>
      </div>
    )
  }
 
  render() {
    const { storedJokes, loading } = this.state
    const loadingElement = <span>Loading...</span>
    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={ id }>{ joke }</p>))}
        </span>

        <span>
          <p>{ loading ? loadingElement : this.renderJokeElement() }</p>
        </span>
      </div>
    )
  }
}

export default App;