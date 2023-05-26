import React from 'react'
import html from '../assets/html.png';
import css from '../assets/css.png'
import js from '../assets/js.png'
import reactimg from '../assets/reactimg.png'
import vue from '../assets/vue.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import angular from '../assets/angular.png'
import uml from '../assets/uml.png'


const Experience = () => {

    const techs = [
        { id:1,src: html, title:'HTML', style: 'shadow-orange-500' },
        { id:2,src: css,title:'CSS', style: 'shadow-blue-600' },
        { id:3,src: js, title:'JavaScript',style: 'shadow-yellow-500' },
        { id:4,src: reactimg, title:'React', style: 'shadow-sky-400' },
        { id:5,src: vue, title:'Vue', style: 'shadow-green-500' },
        { id:6,src: angular, title:'Angular', style: 'shadow-red-700' },
        { id:7,src: uml, title:'UML', style: 'shadow-purple-500' },
        { id:8,src: tailwind, title:'Tailwind', style: 'shadow-sky-300' },
        { id:9,src: github, title:'Github', style: 'shadow-gray-400' }
    ]

  return (
    <div name='Experience' className='w-full py-40 lg:px-40  '>
        <div className='maw-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white my-20'> 
            <div className="rounded-2xl p-6 bg-gradient-to-b from-blue-800 to-transparent" >
                <div className="w-auto h-auto flex items-center justify-center">
                    <p className='text-4xl font-bold border-b-4 border-orange-400 inline'> Experience </p>
                </div>
                <p className='py-6 w-auto h-auto flex items-center justify-center'> These are the technologies I have worked with</p> 
                <div className=' grid grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-8 sm:px-0'>
                    {techs.map(({id,src,title,style}) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-3xl bg-gradient-to-b from-gray-400 to-transparent ${style}`}>
                            <img src={src} alt="" className='w-20 mx-auto' />
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))}
                </div>   
            </div>
        </div>
    </div>
  )
}

export default Experience