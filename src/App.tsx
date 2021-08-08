import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Suggestions from './pages/Suggestions'
import FeedbackDetail from './pages/FeedbackDetail'
import GlobalStyle from './GlobalStyle'

const App = () => {
    return (
      <>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Suggestions} />
          <Route exact path="/feedback-detail" component={FeedbackDetail} />
        </Switch>
      </>
    )
  }
  
  export default App
  