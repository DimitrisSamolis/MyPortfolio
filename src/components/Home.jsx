import React, {useEffect} from 'react';
import MyImage from '../assets/img_crp.jpg';
import { BsArrowRightCircle } from "react-icons/bs";
import {Link} from 'react-scroll'; 
import SplitType from 'split-type';
import gsap from 'gsap';


//import gifBackground from '../assets/bg.gif'
//import Wallpaper from '../assets/myportwall.jpg'

const Home = () => {

  useEffect(() => {
    
    // eslint-disable-next-line no-unused-vars
    let text = new SplitType('#text');
    let characters = document.querySelectorAll('.char');
    for (let i = 0; i < characters.length; i++) {
      characters[i].classList.add('translate-y-full');
    }
    gsap.to('.char',{
      y:0,
      stagger:0.05,
      delay:0.02,
      duration:0.5
    });
  }, []);

  return (
    <div name="Home" className=" h-screen w-full py-10 mb-20"
    // style={{
    //   backgroundImage: `url(${gifBackground})`, // Set the GIF file as the background image
    //   backgroundSize: 'cover',
    //   backgroundRepeat: 'no-repeat',
    //   backgroundPosition: 'center',
    // }}
    >
      <div className="max-w-screen-lg  mx-auto flex items-center justify-center mt-20 p-4 md:flex-row ">
        <div className="rounded-2xl p-6 w-auto h-auto flex items-center justify-center bg-gradient-to-b from-blue-800 to-transparent">
            <div className="flex flex-col justify-center h-full px-6 ">
              <h2 id='text' className="text-4xl font-semi pb-8 text-white"> Welcome to my Portfolio!</h2>
              <p className="text-white p-4 max-w-md">
                Hello! I'm Dimitris, a passionate and dedicated front-end developer intern. Currently, I am studying at the University of Piraeus,
                where I am honing my skills and expanding my knowledge in the field of web development.
              </p>
              <div>
                <Link to='Portfolio' smooth duration={500} className='group  text-white w-fit px-4 py-3 my-3 flex items-center rounded-md bg-gradient-to-r from-yellow-400 to to-orange-600 transition-all hover:text-lg cursor-pointer'>
                  My Projects  
                  <span className='p-2 group-hover:rotate-90 duration-300 '> <BsArrowRightCircle size={20}/> </span>
                </Link>
              </div>
            </div>
          <div className="my-4 ">
            <img src={MyImage} alt="my profile" className="animate-pulse rounded-full max-w-md h-auto md:w-32 w-24 text-right justify-between" />
          </div>
        </div>
      </div>
    </div>  
  )
}

export default Home;
