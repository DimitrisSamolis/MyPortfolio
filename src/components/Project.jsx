import React from 'react'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'

const Projects = () => {

  const projects = [
    {
      id:1,
      src: img1,
      href: 'https://github.com/Dimitris155/MyPortfolio'
    },
    {
      id:2,
      src: img2,
      href: 'https://github.com/Dimitris155/Rental-Website'

    },
    {
      id:3,
      src: img3,
      href: 'https://github.com/Dimitris155/VideoGames-Angular'
    },
    {
      id:4,
      src: img4,
      href: 'https://github.com/Dimitris155/Information-System-for-University-Campus'
    },
    {
      id:5,
      src: img5,
      href: 'https://github.com/Dimitris155/Website-Vue'
    },
    {
      id:6,
      src: img6,
      href: 'https://github.com/Dimitris155/Client-Server'
    }

  ]

  return (
    <div name="Project" className="w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full my-20 ">
        <div className="rounded-2xl p-6 bg-gradient-to-b from-blue-800 to-transparent">
          <div className="w-auto h-auto flex items-center justify-center">
            <p className="text-4xl font-bold inline border-b-4 border-orange-400">Projects</p>
          </div>
          <p className="py-6 w-auto h-auto flex items-center justify-center">Check out some of my projects here</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 px-12 sm-px-0 ">
            {projects.map(({ id, src, href }) => (
            <div key={id} className="shadow-md shadow-orange-600 hover:scale-105 duration-500 rounded-2xl bg-gradient-to-t from-gray-400 to-transparent">
              <img src={src} alt="" className="rounded-t-2xl duration-200 hover:translate-y-2" />
              <div className="flex items-center justify-center  ">
                <button className=" px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-orange-600 hover:font-bold ">
                  <a href={href} target="_blank" rel="noopener noreferrer">Code</a>
                </button>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
  </div>
);
}


export default Projects