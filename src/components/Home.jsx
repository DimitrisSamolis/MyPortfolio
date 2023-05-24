import React from 'react';
import MyImage from '../assets/img_crp.jpg';
import { BsArrowRightCircle } from "react-icons/bs";
import gifBackground from '../assets/bg.gif'
import Wallpaper from '../assets/myportwall.jpg'

const Home = () => {
  return (
    <div name="Home" className=" h-screen w-full py-10 mb-20"
    // style={{
    //   backgroundImage: `url(${gifBackground})`, // Set the GIF file as the background image
    //   backgroundSize: 'cover',
    //   backgroundRepeat: 'no-repeat',
    //   backgroundPosition: 'center',
    // }}
    >
      <div className="max-w-screen-lg  mx-auto flex items-center justify-center h-full mt-6 p-4 md:flex-row ">
        <div className="rounded-2xl p-6 w-auto h-auto flex items-center justify-center bg-gradient-to-b from-blue-800 to-transparent">
            <div className="flex flex-col justify-center h-full px-6 ">
              <h2 className="text-4xl font-semi text-white"> Welcome to my Portfolio!</h2>
              <p className="text-white p-4 max-w-md">
                My name is Dimitris Samolis.<br /> I am a Front End Developer, studying at the University of Piraeus, and I am currently on my internship at Pobuca! <br />
                I love working on web Applications using technologies like JavaScript, Angular, Vue.js, HTML, and CSS.
              </p>
              <div>
                <button className='group text-white w-fit px-4 py-3 my-3 flex items-center rounded-md bg-gradient-to-r from-yellow-400 to to-orange-600 cursor-pointer'>
                  My Projects  
                  <span className='p-2 group-hover:rotate-90 duration-300'> <BsArrowRightCircle size={20}/> </span>
                </button>
              </div>
            </div>
          <div className="my-8">
            <img src={MyImage} alt="my profile" className="rounded-full max-w-md h-auto w-24" />
          </div>
        </div>
      </div>
    </div>  
  )
}

export default Home;
