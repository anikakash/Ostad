import React from 'react'
import Layout from '../Layout/Layout'

import projects from '../database/projects.json'
import SingleProjects from '../components/projects/SingleProjects'

const Projects = () => {
  return (
    <Layout>
        <div className='container mx-auto'>
            <h1 className='text-xl font-bold py-5 text-orange-500'>ALL PROJECT</h1>
            <p className='text-2xl w-[60%] pb-5'>Better Agency/SEO Solution At Your Fingertips</p>
        </div>
        <div className='grid grid-cols-12 container mx-auto gap-5'>
          {
            projects.map((project, i) => <SingleProjects key={i} project={project} />)
          }
        </div>
    </Layout>
  )
}

export default Projects
