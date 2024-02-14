import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Login from './Views/Login/Login';
import Register from './Views/Register/Register';
import Sell from './Views/Sell/Sell';
import Contact from './Views/Contact/Contact';
import Home from './Views/Home/Home';
import { Routes,Route, useLocation } from 'react-router-dom';  

function App() {
  return (
    <div className="App">
    <NavBar />
    <Routes>
    <Route path='/'element={ <Home />}/>
      <Route path='/login'element={ <Login />}/>
      <Route path='/register'element={ <Register />}/>
      <Route path='/sell'element={ <Sell />}/>
      <Route path='/contact'element={ <Contact />}/>
    </Routes>
    {/* <Footer /> */}
  </div>
  );
}

export default App;
