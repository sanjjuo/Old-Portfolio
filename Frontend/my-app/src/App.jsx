import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <div className='app'>
      <Router>
        <Home />
        <ToastContainer theme='dark' position='top-center' />
      </Router>
    </div>
  )
}

export default App
