import React, { Component } from 'react';
import PersonalForm from './PersonalForm'
import ProfessionalForm from './ProfessionalForm'
import sendAllForm from './actions';

class Form extends Component {
  render() {
    const { sendForm, resetForm, changeHandler, currentState, onBlurHandler, sendToForm } = this.props;

    return (
      <form>
        <PersonalForm
          changeHandler={ changeHandler }
          onBlurHandler= { onBlurHandler }
          currentState= { currentState }
        />
        <ProfessionalForm changeHandler={ changeHandler } />
        <input
            type="button"
            onClick={ sendForm }
            value="Enviar"
        />
        <input
          type="reset"
          onClick={ resetForm }
          value="Limpar"
        />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendToForm: (item) => dispatch(sendAllForm(item)),
});

export default Form;