import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './style/hero.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact'
import Fotter from './components/Fotter'
const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

function App() {
  const [page, setPage] = useState('home');

  return (
    <div>
      <Navbar page={page} setPage={setPage} />

      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          {page === 'home' && <Home />}
          {page === 'about' && <About />}
          {page === 'contact' && <Contact />}
        </motion.div>
      </AnimatePresence>
      <Fotter />
    </div>
  );
}

export default App;