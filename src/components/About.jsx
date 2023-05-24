import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-blue-900 to-blue-800 text-gray-300'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
            <div className='p-8 mt-10'>
                <p className='text-4xl font-bold inline border-b-4 border-orange-400'> About </p>
            </div>
            <p className='text-xl mt-10'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, voluptatibus repellat excepturi nisi nostrum 
                exercitationem placeat adipisci obcaecati debitis, ea deleniti 
                non hic quod ad provident soluta omnis quos minima!
            </p>
            <br />
            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Vitae, eaque perferendis distinctio, in nemo perspiciatis modi 
                aspernatur impedit voluptatibus eum autem ab accusantium provident
                omnis eos laboriosam quis veritatis pariatur. Eius repellat incidunt tenetur 
                quae numquam temporibus, maiores a. Alias aspernatur tempora porro corrupti blanditiis hic
                quasi quibusdam voluptas assumenda.
            </p>
        </div>
    </div>
  )
}

export default About