import React, {useEffect} from 'react';
import MyImage from '../assets/home/img_crp.jpg';
import { BsArrowRightCircle } from "react-icons/bs";
import { MdOutlineSwipeVertical } from "react-icons/md"
import {Link} from 'react-scroll'; 
import SplitType from 'split-type';
import gsap from 'gsap';

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
    <div name="Home" className=" w-full py-20 md:mb-0">
      <div className="max-w-screen-lg  mx-auto flex items-center justify-center mt-20 sm:mt-24 p-4 md:flex-row ">
        <div className={`rounded-2xl p-6 w-auto h-auto flex items-center justify-center bg-gradient-to-b from-blue-800 to-transparent `}>
            <div className="flex flex-col justify-center h-full px-2 sm:px-6 font-semi">
              <h2 id='text' className="text-4xl pb-8"> Welcome to my Portfolio!</h2>
              <p className={`py-4 px-2 my-2 max-w-md hover:bg-opacity-70 hover:scale-95 duration-200 bg-opacity-30 bg-slate-300 rounded-3xl`} >
                Hello! I'm Dimitris, a passionate and dedicated junior front-end developer. Currently, I am studying at the University of Piraeus,
                where I am honing my skills and expanding my knowledge in the field of web development.
              </p>
              <div>
                <Link to='Projects' smooth duration={500} className='group w-fit p-2 my-3 flex items-center rounded-xl bg-gradient-to-r from-yellow-400 to to-orange-600 transition-all hover:text-lg cursor-pointer'>
                  My Projects  
                  <span className='p-2 group-hover:rotate-90 duration-300 '> <BsArrowRightCircle size={20}/> </span>
                </Link>
              </div>
            </div>
          <div className="my-4 ">
            <img src={MyImage} alt="my profile" className="hover:scale-110 duration-200  hover:shadow-2xl hover:shadow-black  rounded-3xl max-w-md h-auto md:w-32 w-24 text-right justify-between" />
          </div>
        </div>
      </div>
      <span className="p-2 flex justify-center items-center animate-bounce">
        <MdOutlineSwipeVertical color={"white"} size={30} /> 
      </span>
    </div>  
  )
}

export default Home;
