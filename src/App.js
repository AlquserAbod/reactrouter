import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Products from './pages/products';
import { BrowserRouter as Router, Link, Route, Switch, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className='Header'>
        <ul className="links">
          <li>
            <Link to="/"> Home Page </Link>
            <Link to="/about"> About us </Link>
            <Link to="/contact"> Contact us </Link>
            <Link to="/products"> Products </Link>
          </li>
        </ul>

          <Routes>
            <Route  path="/" element={<Home />}/> 
            <Route  path="/about" element={<About />}/> 
            <Route  path="/contact" element={<Contact />}/> 
            <Route  path="/products" element={<Products />}/> 
          </Routes>
      </div>

    </Router>
  );
}

export default App;
