import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Events from '../components/EventsCarousal'
import Messages from '../components/Messages'
import Gallery from '../components/Gallery'
import Alumni from '../components/Alumni'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'
import './spectrumCont.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import bgVid from "../images/BackgroundVideo.mp4"
import bgimg from "../images/digi.png"
const BgURl="linear-gradient(45deg, #d80d0d, transparent)";
const BgURl1="https://elements-resized.envatousercontent.com/elements-preview-images/43b9ea60-c318-41db-ac20-b9a978401683?w=1370&cf_fit=scale-down&q=85&format=auto&s=eb9ba6a4719a5ae3986df5b20a0467991ff7a3c066f27efdeb630d4dfc4ee3ca"
const BgURl3="https://elements-resized.envatousercontent.com/elements-preview-images/3de0ff71-bded-4bd5-89f0-91729686fa66?w=1370&cf_fit=scale-down&q=85&format=auto&s=9832edd917bc6a33c11ac58ff3016aede023cfcd3ad73f5bdc2a6a68524c60c7";
const BgURl4="https://elements-resized.envatousercontent.com/elements-preview-images/463f5abc-bc45-4398-95e0-0eb48ed0f061?w=1370&cf_fit=scale-down&q=85&format=auto&s=612864f7f6dec2b15303ee32766bcc17f925834aa66f91753c4668a168b84a14"
const BgURl2="https://elements-resized.envatousercontent.com/elements-preview-images/60136229-40c8-421f-b827-bbf025625238?w=1370&cf_fit=scale-down&q=85&format=auto&s=a2e12d3808bba2884a4b112e3f5b264bebe1c037603b76ca3880929aeb8084d9";

const Home = () => {
  const [mobileView,setmobileView]=useState(true)
  // console.log(mobileView)
  return (
    <Parallax pages={2.8}  >
        <ParallaxLayer speed={0.5} offset={0} className='z-10'>
        <div className="gradient z-20"></div>
        <video id='background-video' src={bgVid} autoPlay loop muted={true} className='w-screen z-10 m-auto bg-contain '/>
        </ParallaxLayer>
        <ParallaxLayer speed={0.5} className='flex flex-col justify-center z-10'> 
         <Navbar home='active' events='inactive' developers='inactive' about='inactive' feed='inactive' members='inactive' className="bg-transparent " />
            <Hero />
            <div className='cardHome p-[1rem] bg-[#ffffff11]'>
              <Link to='/Spectrum' className='z-50'>Checkout our official Spectrum 10.0 page</Link>
            </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.99} speed={0.6}  factor={3} className=' pt-48' id='bgImg' style={{ backgroundImage:`  linear-gradient(#060027, #0600276d,#000000),url(${bgimg})`,backgroundSize:"cover",top:"10px",backgroundPosition:"center"}} >
          <ParallaxLayer offset={0.5} speed={0.6} 
          style={{inset:`${mobileView?'30vh 0':'0vh 0'}` }}
          >
              <Events />
          </ParallaxLayer>
        <ParallaxLayer offset={1.01} speed={0.65} >
          <ParallaxLayer offset={0.5} speed={0.6}>
            <Messages />
          </ParallaxLayer>
        </ParallaxLayer>
        {/* <ParallaxLayer offset={3.9}><Gallery /></ParallaxLayer> */}
        <ParallaxLayer offset={1.99} speed={1}><Alumni />
        
        <ParallaxLayer offset={0.79} speed={0} ><Footer /></ParallaxLayer>
        </ParallaxLayer>
        </ParallaxLayer>
      </Parallax>
  )
}

export default Home
