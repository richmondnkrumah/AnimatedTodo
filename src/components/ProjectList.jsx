import React from 'react'
import ProjectCard from '../components/ProjectCard'

const ProjectList = ({projects,onDelete}) => {
  return (
    <div className='grid gap-5 grid-cols-[repeat(3,minmax(300px,320px))] '>
      {projects.map((project) => (
        <ProjectCard key={project.id}  project={project} onDelete={onDelete}  />
      ))}
    </div>
  )
}

export default ProjectList