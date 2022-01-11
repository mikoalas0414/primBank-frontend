import { Header } from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Footer } from './components/Footer'
import './styles/GlobalStyle.scss'
import { Dashboard } from './pages/Dashboard'
import { Swap } from './pages/Swap'
import { Vesting } from './pages/Vesting'

export function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/swap" exact component={Swap} />
            <Route path="/vesting" exact component={Vesting} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </>
  )
}
