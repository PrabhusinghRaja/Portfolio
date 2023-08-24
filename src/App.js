import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Comps/Header';
import Home from './Comps/Home';
import About from './Comps/About';


function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Home />
      <About />
        <Routes>
          <Route path='' element></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
