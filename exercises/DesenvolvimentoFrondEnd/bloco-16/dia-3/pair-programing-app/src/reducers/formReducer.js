const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: '',
  addressType: '',
  resume: '',
  role: '',
  roleDescription: '',
  formError: {},
  submitted: false,
}
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'NAME':
      return {
        ...state,
      }

    default:
      return state;
  }
}
