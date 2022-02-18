import './index.css';
import './query.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Body from './components/Body';
import Article from './components/Article';
import Footer from './components/Footer'

function App() {
  return (
    <Router className="App">
    <Navbar/>
    <Header />
    <Body/>
    <Article/>
    <Footer/>
  </Router>
  );
}

export default App;
