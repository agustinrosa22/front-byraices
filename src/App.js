
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Login from './Views/Login/Login';
import Register from './Views/Register/Register';
import Sell from './Views/Sell/Sell';
import Contact from './Views/Contact/Contact';
import Home from './Views/Home/Home';
import Sale from './Views/Sale/Sale';
import Rent from './Views/Rent/Rent';
import { Routes,Route} from 'react-router-dom';  
import PropertyDetailsPage from './Views/Detail/Detail';
import DetailSeller from './Views/DetailSeller/DetailSeller';
import About from './Views/About/About';

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
      <Route path='/sale'element={ <Sale />}/>
      <Route path='/desarrollo'element={ <Sale />}/>
      <Route path='/rent'element={ <Rent />}/>
      <Route path='/detail/:id'element={ <PropertyDetailsPage />}/>
      <Route path='/seller/:id'element={ <DetailSeller />}/>
      <Route path='/about'element={ <About />}/>
    </Routes>
    <Footer />
  </div>
  );
}

export default App;
