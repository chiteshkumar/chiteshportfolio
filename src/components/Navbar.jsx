import '../style/navbar.css';

// Router
import { NavLink } from 'react-router-dom';

// Theme btn
import { Spin } from '@theme-toggles/react';
import '@theme-toggles/react/styles/spin.css';

// Framer motion
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  const handleToggle = () => setIsDark(!isDark);

  return (
    <>
      {/* Dark mode animation */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#0a0a0a',
          zIndex: -1,
        }}
        initial={false}
        animate={{
          clipPath: isDark ? 'circle(150% at 90% 10%)' : 'circle(0% at 90% 10%)',
        }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />

      <div className="navbar">
        <div className="nav-content">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>

          <div className="toggle">
            <Spin toggled={isDark} onClick={handleToggle} />
          </div>
        </div>
      </div>
    </>
  );
}