import React from 'react'
import ProjectCard from '../components/ProjectCard'

const ProjectList = ({projects,onDelete, onCurrentProject}) => {
  return (
    <div className='grid gap-5 grid-cols-[repeat(auto-fill,minmax(300px,310px))] '>
      {projects.map((project) => (
        <ProjectCard key={project.id}  project={project} onCurrentProject={onCurrentProject} onDelete={onDelete}  />
      ))}
    </div>
  )
}

export default ProjectList