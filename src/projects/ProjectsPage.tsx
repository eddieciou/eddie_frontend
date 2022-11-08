import React from 'react'

interface FullName {
  firstName: string
  lastName: string
}

function ProjectsPage({ firstName, lastName }: FullName) {
  return (
    <h1>
      Hello {firstName} {lastName}
    </h1>
  )
}

export default ProjectsPage
