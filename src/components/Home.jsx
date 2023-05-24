import React from 'react';
import MyImage from '../assets/img_crp.jpg';
import { BsArrowRightCircle } from "react-icons/bs";

const Home = () => {
  return (
    <div name="Home" className=" h-screen w-full bg-gradient-to-b from-blue-700 to-blue-900 text-white py-4 grayscale-600">
      <div className="max-w-screen-lg md:my-14 mx-auto flex items-center justify-center h-full md:px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl font-semi text-white"> I'm Dimitris Samolis !</h2>
          <p className="text-gray-300 p-4 max-w-md">
            I am a Front End Developer, studying at the University of Piraeus, and I am currently on my internship at Pobuca! 
            I love working on web applications using technologies like JavaScript, Angular, Vue.js, HTML, and CSS.
          </p>
          <div>
            <button className='group text-white w-fit px-4 py-3 my-3 flex items-center rounded-md bg-gradient-to-r from-yellow-400 to to-orange-600 cursor-pointer'>
              My Projects  
              <span className='p-2 group-hover:rotate-90 duration-300'> <BsArrowRightCircle size={20}/> </span>
            </button>
          </div>
        </div>
        <div className="my-16 ">
          <img src={MyImage} alt="my profile" className=" rounded-2xl mx-auto max-w-md h-auto" />
        </div>
      </div>
      <style>
        {`
          @media (max-width: 770px) {
            .max-w-screen-lg {
              flex-direction: column;
              align-items: center;
            }
            .h-full {
                height: 90%;
            }

            .text-4xl {
              font-size: 2rem;
            }

            .max-w-md {
              max-width: 40%;
              margin: 0 auto;
            }

            .flex.justify-center { 
              align-items:center;
            }
          }
          @media (max-width: 440px) {
            .max-w-screen-lg {
              flex-direction: column;
              align-items: center;
            }
           
            .sm:text-7xl {
                font-size: 1rem;
            }

            .h-full {
                height: 90%;
            }

            .text-4xl {
              font-size: 2rem;
            }

            .max-w-md {
              max-width: 30%;
              margin: 0 auto;
            }

            .flex.justify-center { 
              align-items:center;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Home;
