import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route,Link} from 'react-router-dom';
import HomeScreen from './Screen/HomeScreen';
import ProductScreen from './Screen/ProductScreen';

class App extends Component {

    
    
  render(){
    const openMenu = () => {
        document.querySelector(".sidebar").classList.add("open");
    }
    const closeMenu = () => {
        document.querySelector(".sidebar").classList.remove("open");
    }
  return (
      <BrowserRouter>
      <div className="grid-container">
            <header className="header">
                <div className="brand">
                    <button onClick={openMenu}>
                        &#9776;
                    </button>
                    <Link to="/">watchshop</Link>
                </div>
                <div className="header-links">
                    <a href="index.html">Cart</a>
                    <a href="index.html">Sign in</a>
                </div>
            </header>
            <aside className="sidebar">
                <h3>Shopping categories</h3>
                <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                <ul>
                    <li><a href="index.html">Women's watch</a></li>
                    <li><a href="index.html">Men's watch</a></li>
                </ul>
            </aside>
            <main className="main">
                <div className="content">
                    <Route path="/product/:id" component={ProductScreen} />
                    <Route path="/" exact={true} component={HomeScreen} />
                    
                </div>
                
            </main>
            <footer className="footer">
                All right reserdved.
            </footer>
        </div>
        </BrowserRouter>
  );
}
}
export default App;
