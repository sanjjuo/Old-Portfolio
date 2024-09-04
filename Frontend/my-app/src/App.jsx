import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Pages from '../Pages/Pages';
import { BsArrowUpSquare } from "react-icons/bs";
import { useState, useEffect } from 'react';
import { motion } from "framer-motion"

function App() {
  const [arrowVisible, setArrowVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setArrowVisible(true);
    } else {
      setArrowVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='app'>
      <Router>
        <Pages />
        <ToastContainer theme='dark' position='top-center' />
        {arrowVisible && (
          <motion.div
            onClick={scrollToTop}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: -5 }}
            transition={{ duration: 0.5 }}
            className='scroll-to-top'
          >
            <BsArrowUpSquare className='icon' />
          </motion.div>
        )}
      </Router>
    </div>
  );
}

export default App;
