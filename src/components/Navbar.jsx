import '../style/navbar.css';

import { Spin } from "@theme-toggles/react";
import "@theme-toggles/react/styles/spin.css";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar({ page, setPage }) {
  const [isDark, setIsDark] = useState(false);

  const handleToggle = () => setIsDark(!isDark);

  const go = (e, target) => {
    e.preventDefault();
    setPage(target);
  };

  return (
    <>
      {/* Dark mode animation */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "#0a0a0a",
          zIndex: -1,
        }}
        initial={false}
        animate={{
          clipPath: isDark ? "circle(150% at 90% 10%)" : "circle(0% at 90% 10%)",
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      <div className="navbar">
        <div className="nav-content">
          <a href="#home" className={page === 'home' ? 'active' : ''} onClick={(e) => go(e, 'home')}>Home</a>
          <a href="#about" className={page === 'about' ? 'active' : ''} onClick={(e) => go(e, 'about')}>About</a>
          <a href="#contact" className={page === 'about' ? 'active' : ''} onClick={(e) => go(e, 'contact')}>contact</a>
          <div className="toggle">
            <Spin toggled={isDark} onClick={handleToggle} />
            
          </div>
        </div>
      </div>
    </>
  );
}