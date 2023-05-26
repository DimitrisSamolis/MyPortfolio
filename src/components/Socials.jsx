import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonFill } from 'react-icons/bs'

const Socials = () => {
    const links = [
        {
            id:1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30}/> 
                </>
            ),
            href: 'https://www.linkedin.com/in/dimitris-samolis-66a73b208/' ,
            style: 'rounded-tr-md'
        },
        {
            id:2,
            child: (
                <>
                    GitHub <FaGithub size={30}/> 
                </>
            ),
            href: 'https://github.com/Dimitris155' ,
        },
        {
            id:3,
            child: (
                <>
                    Mail <HiOutlineMail size={30}/> 
                </>
            ),
            href: 'mailto:dimitrissamolis2001@gmai.com'
        },
        {
            id:4,
            child: (
                <>
                    Resume <BsFillPersonFill size={30}/> 
                </>
            ),
            href: '/CV-DS.pdf' ,
            style: 'rounded-br-md',
            download: true
        },
    ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map(({id, child , href , style ,download}) => (
                <li key={id} className={`flex justify-between items-center w-36 h-14 px-2 bg-gradient-to-r from-yellow-400 to to-orange-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ${style}`}>
                    <a href={href} className={"flex justify-between pl-1 items-center w-full text-white"} download={download} target='_blank' rel='noreferrer'> 
                        {child}
                    </a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Socials