import React from 'react'

const ProjectCard = ({projects}) => {
  return (
    <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4,minmax(250px,1fr))',
                    gap: '1.5rem',
                    justifyContent: 'center'
                }}>
                    {projects.map((repo) => (
                        <div key={repo.id || repo.name} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
                            <h3 className='text-sm'>{repo.name}</h3>
                            <p>{repo.description || 'No description provided.'}</p>

                            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                {/* Link that updates URL to /projects/:id */}
                                {!id && <Link to={`/projects/${repo.id}`}>View Details</Link>}

                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                    GitHub Repo ↗
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
  )
}

export default ProjectCard