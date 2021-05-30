import { BrowserRouter as Router, Link, Redirect, Route, Switch, useLocation } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './components/login/login';
import Products from './components/products/products';
import Home from './components/home/home';
import About from './components/about/about';
import { useState } from 'react';
import ProtectedRoute from './hoc/protectedRoute/protectedRoute';

const App = () => {
  const navLinkStyle = { color: 'white' }
  const [login, setLogin] = useState(localStorage.getItem('accessToken'))

  const handleOnLogin = () => {
    setLogin(true)
  }
  const handleOnLogout = () => {
    setLogin(false)
  }

  return (
    <Router>
      <nav className="navbar">
        <div className="logo">
          <Link to="/" style={navLinkStyle}>
            <img src={logo} className='App-logo' alt="logo"></img>
          </Link>
        </div>
        <ul className="nav-link">
          <li>
            <Link to="/" style={navLinkStyle}>Home</Link>
          </li>
          <li>
            <Link to="/products" style={navLinkStyle}>Products</Link>
          </li>
          <li>
            <Link to="/about" style={navLinkStyle}>About</Link>
          </li>
        </ul>
        <Login onLogin={handleOnLogin} onLogout={handleOnLogout} login={login} />
      </nav>

      <Switch>
        <ProtectedRoute component={Products} path='/products' />
        <Route path="/about">
          <About />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path='*'>
          <h1>Error Page</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
