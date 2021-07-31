import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Suggestions from './pages/Suggestions'
import GlobalStyle from './GlobalStyle'

const App = () => {
    return (
      <>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Suggestions} />
        </Switch>
      </>
    )
  }
  
  export default App
  