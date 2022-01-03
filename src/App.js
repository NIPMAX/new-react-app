import './App.css'
import './styles/nav.css'
// import { BrowserRouter, Route } from 'react-router-dom'
import { BrowserRouter, Route, NavLink, Redirect } from 'react-router-dom';


// nav Items
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Article from './pages/Article';
import Login from './components/Login';
import Navigation from './components/Navigation';

import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
// import Login from './components/Login';
import Logout from './components/Logout';
import { useSelector } from 'react-redux'
import { selectUser } from './Features/UserSlice';



function App() {

  const user = useSelector(selectUser)
  console.log(user)

  return (
    <div className="App">
      <BrowserRouter>
    <Navigation />

    {/* <Route path="/contact" element={user ? <Contact /> : <Redirect to ="/login"/>} /> */}

  {/* <switch> */}
      <Route exact path="/" element={user ?  <Home /> : <Redirect to ="/login"/>}>
        <Home />
      </Route>
      
      <Route path="/about">
        <About />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/article/:id">
        <Article />
      </Route>

      {/* <Route path="*">
        <Redirect to="/" />
      </Route> */}

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/logout">
        <Logout />
      </Route>
      
  {/* </switch> */}

      </BrowserRouter>
    </div>
  );
}

export default App
