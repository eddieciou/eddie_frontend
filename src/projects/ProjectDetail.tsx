import React from 'react';
import { Project } from './Project';

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className='row-auto'>
      <div className='columns-sm'>
        <div className='bg-gray-200 w-72 rounded overflow-hidden shadow-lg flex flex-1 flex-col justify-between'>
          <img className='w-full' src={project.imageUrl} alt={project.name} />
          <section className='px-6 py-4'>
            <div className='font-bold text-xl mb-2'>{project.name}</div>
            <p className='text-gray-700 text-base'>{project.description}</p>
            <p>Budget : {project.budget}</p>
            <p>Signed: {project.contractSignedOn.toLocaleDateString()}</p>
            <p>
              <mark> {project.isActive ? 'active' : 'inactive'}</mark>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
