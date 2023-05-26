import React from 'react'

const Contact = () => {
  return (
    <div name='Contact' className='w-full text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8 rounded-2xl p-6 bg-gradient-to-b from-blue-800 to-transparent'>
                <div className="w-auto h-auto flex items-center justify-center">
                    <p className='text-4xl font-bold border-b-4 border-orange-400 inline'> Contact </p>
                </div>
                <p className='py-6 w-auto h-auto flex items-center justify-center'> Submit the form below to get in touch</p>
                <div className='flex justify-center items-center'>
                    <form action='https://getform.io/f/003c2f84-ce2c-4853-9636-7dd4bb8ae134' method='POST' className='flex flex-col w-full md:w-1/2'>
                        <input type='text' name='name' placeholder='Enter your name...' required
                        className='p-2 bg-transparent  rounded-md border-2 text-white focus:outline-none'>
                        </input>
                        <input type='text' name='email' placeholder='Enter your email...' required
                        className='p-2 my-4 bg-transparent rounded-md border-2 text-white focus:outline-none'
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$">
                        </input>
                        <textarea name='message' rows='10' placeholder='Enter your message... ' required
                        className='p-4 bg-transparent rounded-md border-2 text-white focus:outline-none' ></textarea>
                        <button className='text-white rounded-md bg-gradient-to-r  from-yellow-400 to to-orange-600 px-6 py-3 my-8 mx-auto flex items-center hover:scale-110 duration-300'> Contact me!</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact