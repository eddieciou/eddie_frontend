import React, { useEffect, useState } from 'react';
import { projectAPI } from './projectAPI';
import ProjectDetail from './ProjectDetail';
import { Project } from './Project';
import { useParams } from 'react-router-dom';

function ProjectPage() {
  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState<Project | null>(null);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();
  const id = Number(params.id);

  useEffect(() => {
    setLoading(true);
    projectAPI
      .find(id)
      .then((data) => {
        setProject(data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      <>
        <h1>Project Detail</h1>

        {loading && <div className='flex justify-center items-center'>Loading...</div>}

        {error && (
          <div>
            <div>
              <section>
                <p>
                  <span></span>
                  {error}
                </p>
              </section>
            </div>
          </div>
        )}

        {project && <ProjectDetail project={project} />}
      </>
    </div>
  );
}

export default ProjectPage;
