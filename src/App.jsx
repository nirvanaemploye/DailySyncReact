import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import DesktopImage from '../src/assets/background.png'
import Hero from './components/Hero/HEro'
import Schedule from './components/Schedule/Schedule';
import Problem from './components/Problem/Problem';
import Investment from './components/Investment/Investment';
import Unique from './components/Unique/Unique';
import OurTeam from './components/OurTeam/OurTeam';
import Bussiness from './components/Bussiness/Bussiness';
import Testing from './components/Testing/Testing';
import Market from './components/Market/Market';
import Graph from './components/Graph/Graph';
import Footer from './components/Footer/Footer';
import Input from './components/Input/Input';


const App = () => {
  // AOS Initialization
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div
      className="bg-cover font-Afacad"
      style={{ backgroundImage: `url(${DesktopImage})` }}
    >
      <Hero />
      <Schedule/>
      <Problem/>
      <Investment/>
      <Unique/>
      <OurTeam/>
      <Bussiness/>
      <Testing/>
      <Market/>
      <Graph/>
      <Input/>
      <Footer/>
    </div>
  );
}

export default App