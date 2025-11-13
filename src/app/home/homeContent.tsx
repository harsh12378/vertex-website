
import Image from "next/image";
import Navbar from "../components/sections/Navbar";
import Hero from "../components/sections/Hero";
import UpcomingEvents from '../components/sections/upcoming'
import About from "../components/sections/About";
import Members from '../components/sections/Members'
import  Contact from '../components/sections/Contact'
import Clubs from "../components/sections/Clubs";  

export default function Home() {
  return (
     <div>
      <Navbar />
      <Hero />
      <UpcomingEvents />
      <About />
      <Members />
      <Clubs />
      <Contact />
    </div>
  );
}
