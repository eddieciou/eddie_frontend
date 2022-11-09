import React, { SyntheticEvent, useState } from 'react';
import { Project } from './Project';

interface projectFormProps {
  project: Project;
  onCancel: () => void;
  onSave: (project: Project) => void;
}

function ProjectForm({ project: initialProject, onCancel, onSave }: projectFormProps) {
  const [project, setProject] = useState(initialProject);
  const [errors, setErrors] = useState({
    name: '',
    description: '',
    budget: '',
  });

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    if (!isValid()) return;
    onSave(project);
  };

  const handleChange = (event: any) => {
    const { type, name, value, checked } = event.target;
    // if input type is checkbox use checked
    // otherwise it's type is text, number etc. so use value
    let updatedValue = type === 'checkbox' ? checked : value;
    // if input type is number convert the updatedValue string to a +number
    if (type === 'number') {
      updatedValue = Number(updatedValue);
    }
    const change = {
      [name]: updatedValue,
    };

    let updatedProject: Project;
    // need to do functional update b/c
    // the new project state is based on the previous project state
    // so we can keep the project properties that aren't being edited +like project.id
    // the spread operator (...) is used to
    // spread the previous project properties and the new change
    setProject((p) => {
      updatedProject = new Project({ ...p, ...change });
      return updatedProject;
    });
    setErrors(() => validate(updatedProject));
  };

  const validate = (project: Project) => {
    const errors: any = { name: '', description: '', budget: '' };
    if (project.name.length === 0) {
      errors.name = 'Name is required';
    }
    if (project.name.length > 0 && project.name.length < 3) {
      errors.name = 'Name needs to be at least 3 characters.';
    }
    if (project.description.length === 0) {
      errors.description = 'Description is required.';
    }
    if (project.budget <= 0) {
      errors.budget = 'Budget must be more than $0.';
    }
    return errors;
  };

  const isValid = () => {
    return (
      errors.name.length === 0 && errors.description.length === 0 && errors.budget.length === 0
    );
  };

  return (
    <form className='p-4 shadow-lg bg-gray-100 rounded w-72 h-96 ' onSubmit={handleSubmit}>
      <label htmlFor='name'>Project Name</label>
      <input
        className='w-full rounded p-2'
        type='text'
        name='name'
        placeholder='enter name'
        value={project.name}
        onChange={handleChange}
      />
      {errors.name.length > 0 && (
        <div>
          <p>{errors.name}</p>
        </div>
      )}
      <label htmlFor='description'>Project Description</label>
      <textarea
        className='w-full rounded p-2'
        name='description'
        placeholder='enter description'
        value={project.description}
        onChange={handleChange}
      />
      {errors.description.length > 0 && (
        <div>
          <p>{errors.description}</p>
        </div>
      )}
      <label htmlFor='budget'>Project Budget</label>
      <input
        className='w-full rounded p-2'
        type='number'
        name='budget'
        placeholder='enter budget'
        value={project.budget}
        onChange={handleChange}
      />
      {errors.budget.length > 0 && (
        <div>
          <p>{errors.budget}</p>
        </div>
      )}
      <label htmlFor='isActive' className='block'>
        Active?
      </label>
      <input type='checkbox' name='isActive' checked={project.isActive} onChange={handleChange} />
      <div className='flex justify-between items-center mt-12'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
          Save
        </button>
        <button
          className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          type='button'
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default ProjectForm;
