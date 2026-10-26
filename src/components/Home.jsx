import '../style/home.css';
import { motion } from 'framer-motion';
import profileImg2 from '../file_0000000028d08208bd5bd85176c1021f.png';

export default function Home() {
  return (
    <div className="home" id="home">
      <motion.div
        className="text-section"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 id="name">Hi, I'm Chitesh Kaushik</h1>
        <h2>Full Stack Web Developer & Ethical Hacker</h2>
        <p>Specializing in building high-performance web applications, developing innovative digital solutions, and strengthening cybersecurity through secure coding and ethical penetration testing.</p>
      </motion.div>

      <motion.div
        className="img-section"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img src={profileImg2} alt="profile" />
      </motion.div>
    </div>
  );
}
