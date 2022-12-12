
import './App.css';
import Home from './Home';
import Place from './Place';
import NFTs from './NFTs';
import Community from './Community';
import NavBar from './NavBar';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <Router>
             
              <NavBar />
              <Route exact path="/" component={Home} />
              <Route exact path="/place" component={Place} />
              <Route exact path="/community" component={Community} />
              <Route exact path="/nfts" component={NFTs} />
              <Redirect to="/" />
              <Footer />
            
         
      </Router>
      
            
      
    </div>
  );
}

export default App;
