import React from 'react'

const Project = ({title , link, date , place , projectType , description }) => {
  return (
    
                <article className='relative rounded-lg shadow-xl bg-white p-16'>
                    <h3 className='text-gray-800 text-3xl font-bold mb-2 hover:text-red-700'>
                        <a href={link} alt={title} target="_blank" rel="noopener noreferrer">{title}</a>{}
                    </h3>
                        <div className='text-gray-500 text-xs space-x-4'>
                            <span>
                                <strong className='font-bold'>Finished on</strong>:{" "}
                                {new Date({date}).toLocaleDateString()}
                            </span>
                            <span>
                                <strong className='font-bold'>Company</strong>:{" "}
                                {place}
                            </span>
                            <span>
                                <strong className='font-bold'>Type</strong>:{" "}
                                {projectType}
                            </span>
                            <p className='my-6 text-lg text-gray-700 leading-relaxed'>
                                {description}
                            </p>
                            <a href={link} rel="noopener noreferrer" target="_blank" className='text-red-500 font-bold hover:underline hover:text-red-400'>
                                View The Project{" "}

                            <span role="img" aria-label = "rigth pointer" >👉</span>

                            </a>
                        </div>
                   
                </article>
            
  )
}

export default Project