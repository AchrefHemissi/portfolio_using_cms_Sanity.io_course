import React , {useEffect , useState } from 'react'
import sanityClient from "../client.js"
import Project from "../components/Project"

const ProjectPage = () => {
  const [projectData , setProjectData] = useState(null);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "project"]{
      title,
      date,
      place,
      description,
      projectType,
      link,
      tags}`).then((data)=> setProjectData(data))
      .catch(console.error)
    },[]);
  return (
    <main className='bg-green-100 min-h-screen p-12'>
        <section className='container mx-auto'>
            <h1 className='text-5xl flex justify-center cursive'>My Projects</h1>
            <h2 className='text-lg text-gray-600 flex justify-center mb-12'>Welcome to my projects page!</h2>
            <section className='grid grid-cols-2 gap-8'>
              {projectData && projectData.map((project,index) => (
                <Project key = {index} title={project.title} date={project.date} place = {project.place} projectType={project.projectType} description={project.description} link={project.link} ></Project>
              ))
              }

            </section>
        </section>
    </main>
    
  )
}

export default ProjectPage