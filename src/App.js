import {Route, Switch} from 'react-router-dom'

import Login from './components/Login'

import OTPScreen from './components/OTPScreen'

import SuccessScreen from './components/SuccessScreen'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/verify" component={OTPScreen} />
    <Route exact path="/success" component={SuccessScreen} />
  </Switch>
)

export default App
