import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Verifica que há um campo input de email na tela', () => {
  // Acessar os elementos da sua tela
  const { getByLabelText } = render(<App />);
  const inputEmail = getByLabelText('Email')

  // Fazer seu teste
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe('email')
});
// Très passos para os testes:
// 1- Acessar os elementos da sua tela
// 2- Interagir com eles (se houver necessidade)
// 3- Fazer seu teste

test('Verifica que há dois botões', () => {
  const meuApp = render(<App />);
  // getby falha se tiver vários
  // getAllBy pega um array de itens
  const btn = meuApp.getAllByRole('button')


  expect(btn.length).toBe(2);
});

test('Verificando se existe um botão de enviar', () => {
  const { getByTestId } = render(<App />);
  const btn = getByTestId('id-send');
  expect(btn).toBeInTheDocument();
  expect(btn.type).toBe('button');
  expect(btn).toHaveValue('Enviar');
});


// test('Verificando se existe um botão', () => {
//   const { getByRole } = render(<App />);
//   const btn = getByRole('button');
//   expect(btn).toBeInTheDocument();
// });
// Adicione esse teste.
test('Verificando se o botão e o campo email estão funcionando.', () => {
  const { getByTestId, getByLabelText } = render(<App />);

  const EMAIL_USER = 'email@email.com';

  const textEmail = getByTestId('id-email-user');
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor:');

  const btnSend = getByTestId('id-send');
  const inputEmail = getByLabelText('Email');
  fireEvent.change(inputEmail, { target: { value: EMAIL_USER } });
  fireEvent.click(btnSend);
  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
});