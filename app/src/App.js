import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Photos from './components/Photos';
import CV from './components/CV';
import Contact from './components/Contact';
import NavProvider from './context/navContext';

function App() {
  return (
    <div>
      <NavProvider>
        <Navbar/>
        <Home/>
        <About/>
        <Photos/>
        <CV/>
        <Contact/>
      </NavProvider>
    </div>
  );
}

export default App;
