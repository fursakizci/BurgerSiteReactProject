
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/menu' element={<Menu></Menu>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
