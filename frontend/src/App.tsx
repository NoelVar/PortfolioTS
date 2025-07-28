import './css/app.css';
import AboutMe from './components/AboutMe/AboutMe';
import Hero from './components/Hero/Hero';
import Education from './components/Education/Education';
import Footer from './components/Footer/Footer';
import WorkProjects from './components/WorkProjects/WorkProjects';
import { ToastContainer } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 600,
      delay: 300
    });
  }, []);

  return (
    <div className="app">
      <Hero />
      <div data-aos="fade-up">
        <AboutMe />
      </div>
      <div data-aos="fade-up">
        <Education />
      </div>
      <WorkProjects />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
