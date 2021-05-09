import React from 'react'

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    console.log("construtor");
  }

  componentDidMount() {
    console.log('conponentDidMount');
    this.setState({ counter: 10 }, () => {
      console.log('montou');
    })
    

  }

  shouldComponentUpdate(nextProps, nextState) {
    let result;
    console.log("shouldComponentUpdate", this.state, nextState, nextProps);
    // realizando exercicio de fixação do conteúdo, 
    // 3 - Com o mesmo código do exercício anterior, impeça que a renderização
    // seja feita, caso o valor na chave counter esteja entre 13 e 15
    this.state.counter > 12 && this.state.counter < 15 ? result = false : result = true
    return result;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", this.state, prevState, prevProps);
  }

  render() {
    console.log("render");
    return (
      <div>
        <p>Contador</p>
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}
        >
          Soma
        </button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}
export default Counter