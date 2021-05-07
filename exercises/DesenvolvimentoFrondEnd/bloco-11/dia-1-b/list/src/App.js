import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}
const array = [1, 2, 3, 4, 5]
function App() {
  return (
    array.map((value) => task(value))
  );
}

export default App;
