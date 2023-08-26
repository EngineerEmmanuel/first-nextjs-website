// 
"use client"
import { useState } from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SmartData from "@/components/SmartData";
import HandShake from "@/components/HandShake";
import Growth from "@/components/Growth";
import Oracles from "@/components/Oracles";
import Infrastructure from "@/components/Infrastructure";
import Footer from "@/components/Footer";

const Home = () => {
  const [number,setNumber]=useState(0);
  const theNumberIsAbove5 = ()=>{
    // if(number>)
  }
  return ( 
    <section>
      <div className="hero-con grid grid-cols-2 item-center h-screen   p-3 pt-20 ">
        {/* text container */}
        <div>
          <h1 className="text-6xl pt-4 linear-color">
            Triggering Real World <br/> Financial Events <br/> on the Blockchain
          </h1>
          <p className="linear-color pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nisi esse <br/> est fuga voluptates necessitatibus aliquid obcaecati maxime eos odio?</p>
          {/* hero-btn-con */}
          <div className="flex  items-center mt-10">
            <button className="hero-btn-bg-color w-48 p-2 mr-4 rounded-xl text-white">DASHBOARD</button>
            <button className="border border-solid border-1 border-blue-500 w-48 p-2 text-white rounded-xl">LEARN MORE</button>
          </div>
          {/* social-icon con */}
          <div className="flex align-center pt-10 gap-x-3">
            <button className="border border-solid border-1 border-blue-500 text-blue-500 p-1">JOIN US</button>
            <div className="twitter-con border border-solid border-1 border-blue-500 text-blue-500 p-1">
              <TwitterIcon/>
            </div>
            <div className="fb-con border border-solid border-1 border-blue-500 text-blue-500 p-1">
              <FacebookIcon/>
            </div>
            <div className="github-con border border-solid border-1 border-blue-500 text-blue-500 p-1">
              <GitHubIcon/>
            </div>
            <div className="telegram-con border border-solid border-1 border-blue-500 text-blue-500 p-1">
              <TelegramIcon/>
            </div>

            <div className="linkedin-con border border-solid border-1 border-blue-500 text-blue-500 p-1">
              <LinkedInIcon/>
            </div>
            <div className="youtube-con border border-solid border-1 border-blue-500 text-blue-500 p-1">
              <YouTubeIcon/>
            </div>

          </div>
        </div>
        {/* Hero image container */}
        <div className="pt-3">
          <img className="w-full rounded-2xl" src="https://media.istockphoto.com/id/1392193093/photo/data-blocks-concept.jpg?s=612x612&w=0&k=20&c=cfKGp86g9VttLSqXxH7hWLCVoXRcjv8-zipDaU5x524=" alt="A blockchain" />
        </div>
      </div>
      <SmartData/>
      <HandShake/>
      <Growth/>
      <Oracles/>
      <Infrastructure/>
      <Footer/>
    </section>
   );
}
 
export default Home;


