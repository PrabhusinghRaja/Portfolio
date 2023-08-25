import './App.css';
import Header from './Comps/Header';
import Home from './Comps/Home';
import About from './Comps/About';
import Portfolio from './Comps/Portfolio';
import Contact from './Comps/Contact';
import Footer from './Comps/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
