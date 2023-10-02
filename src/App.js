
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Portfolio from './Components/Portfolio';

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand-lg">
          <div className="nav_left">
              <div className="profilePics rounded-circle">
                  {/* profile pics */}
              </div>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          <div className="nav_right collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                  <Link to='/'>HOME</Link>
                  <Link to='/About'>ABOUT</Link>
                  <Link to='/Portfolio'>PORTFOLIO</Link>
                  <Link to='/Resume'>RESUME</Link>
                  <Link to='/Contact Me '>CONTACT ME</Link>                 
              </div>
          </div>
        </nav>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/About' Component={About}/>
          <Route path='/Portfolio' Component={Portfolio}/>
        </Routes>
      </Router> 
      <Router>
          <footer>
            <div className="footer_main">
              <div className="copyRight"><div className='copy'></div>2011 Ojoyeuge1. All rights reserved.</div>
              <div className="social_con">
                  <Link><div className='linked'></div></Link>
                  <Link><div className='git'></div></Link>
                  <Link><div className='eMAil'></div></Link>
                  <Link><div className='what'></div></Link>
              </div>                 
            </div>
          </footer>  
      </Router>   
    </div>
    
  );
}

export default App;
