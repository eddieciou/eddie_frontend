import React from 'react'
import { Project } from './Project'
import ProjectCard from './ProjectCard'

interface ProjectListProps {
  projects: Project[]
}

function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className='flex'>
      {projects.map((project) => (
        <div key={project.id} className='mr-2'>
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  )
}

export default ProjectList
