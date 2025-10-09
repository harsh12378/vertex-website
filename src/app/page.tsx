import Image from "next/image";
import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import Upcoming from './components/sections/upcoming'
import About from "./components/sections/About";
import Members from './components/sections/Members'
import  Contact from './components/sections/Contact'
export default function Home() {
  return (
    <div>
   <Navbar/>
   <Hero/>
   <Upcoming/>
   <About/>
   <Members/>
   <Contact/>
    </div>
  );
}
