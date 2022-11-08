import React from 'react'
import { Project } from './Project'

function formatDescription(description: string): string {
  return description.substring(0, 60) + '...'
}

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg h-96 flex flex-1 flex-col justify-between'>
      <img className='w-full' src={project.imageUrl} alt={project.name} />
      <section className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{project.name}</div>
        <p className='text-gray-700 text-base'>{formatDescription(project.description)}</p>
      </section>
      <div className='px-6 pt-4 pb-2'>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          Budget : {project.budget.toLocaleString()}
        </span>
      </div>
    </div>
  )
}

export default ProjectCard
