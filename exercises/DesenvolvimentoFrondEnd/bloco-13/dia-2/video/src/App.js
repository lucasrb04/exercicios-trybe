import React from 'react'
import { BrowserRouter , Route } from 'react-router-dom'

import About from './About'
import HowTo from './HowTo'
import Profile from './Profile'
import Home from './Home'

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/howto" component={HowTo} />
      <Route path="/profile/:ship" render={(props) => <Profile {...props} name='barba'/>}></Route>
    </BrowserRouter>
  );
}

export default App;