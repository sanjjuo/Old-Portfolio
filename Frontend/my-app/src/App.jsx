import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router } from 'react-router-dom';
import Pages from '../Pages/Pages';

function App() {

  return (
    <div className='app'>
      <Router>
        <Pages/>
        <ToastContainer theme='dark' position='top-center' />
      </Router>
    </div>
  )
}

export default App
