import React from 'react';
import { Project } from './Project';

function formatDescription(description: string): string {
  return description.substring(0, 30) + '...';
}

interface ProjectCardProps {
  project: Project;
  onEdit: (project: Project) => void;
}

function ProjectCard({ project, onEdit }: ProjectCardProps) {
  const handleEditClick = (projectBeingEdited: Project) => {
    onEdit(projectBeingEdited);
  };

  return (
    <div className='bg-gray-200 w-72 rounded overflow-hidden shadow-lg h-96 flex flex-1 flex-col justify-between'>
      <img className='w-full' src={project.imageUrl} alt={project.name} />
      <section className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{project.name}</div>
        <p className='text-gray-700 text-base'>{formatDescription(project.description)}</p>
      </section>
      <div className='px-6 pt-4 pb-2'>
        <span className='inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          Budget : {project.budget.toLocaleString()}
        </span>
        <a
          onClick={() => {
            handleEditClick(project);
          }}
          href='#'
          className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 float-right'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
            />
          </svg>
          Edit
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
