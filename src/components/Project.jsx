import React from 'react'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.jpg'

const Projects = () => {

  const projects = [
    {
      id:1,
      src: img1,
      href: 'https://github.com/Dimitris155/MyPortfolio',
      langs: "> ReactJS, TailwindCss",
      title: "Portfolio"
    },
    {
      id:2,
      src: img2,
      href: 'https://github.com/Dimitris155/Rental-Website',
      langs: "> HTML, CSS, JavaScript, PHP",
      title: "CarRental App"
    },
    {
      id:3,
      src: img3,
      href: 'https://github.com/Dimitris155/VideoGames-Angular',
      langs: "> AngularJS, TypeScript",
      title: "VideoGames App"
    },
    {
      id:4,
      src: img4,
      href: 'https://github.com/Dimitris155/Information-System-for-University-Campus',
      langs: "> JAVA, UMLlet, SQL",
      title: "University Campus DataBase"
    },
    {
      id:5,
      src: img5,
      href: 'https://github.com/Dimitris155/Website-Vue',
      langs: "> VueJS",
      title: "Information System App"
    },
    {
      id:6,
      src: img6,
      href: 'https://github.com/Dimitris155/Client-Server',
      langs: "> Python, XML",
      title: "Communication Between Server-Client"
    }

  ]

  return (
    <div name="Projects" className="w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full my-20 ">
        <div className="rounded-2xl p-6 bg-gradient-to-b from-blue-800 to-transparent">
          <div className="w-auto h-auto flex items-center justify-center">
            <p className="text-4xl font-bold inline border-b-4 border-orange-400">Projects</p>
          </div>
          <p className="py-6 w-auto h-auto flex items-center justify-center">Check out some of my projects here</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 px-12 sm-px-0 ">
            {projects.map(({ id, langs, title, src, href }) => (
            <div key={id} className="shadow-lg shadow-orange-600 hover:scale-105 duration-500 rounded-2xl bg-gradient-to-t from-gray-400 to-transparent">
              <img src={src} alt="" className="rounded-t-2xl hover:animate-pulse" />
              <div className='p-2 h-24 text-xs sm:text-sm bg-gray-600 border border-gray-500 text-black'>
                <p className='font-normal'>{langs} </p>
                <p className='flex items-center justify-center font-bold pt-2'>{title}</p>
              </div>
              <div className="flex items-center justify-center">
                <button className="py-3 duration-200 hover:scale-105 hover:text-orange-600 hover:font-bold ">
                  <a href={href} target="_blank" rel="noopener noreferrer">Show code</a>
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