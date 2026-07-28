import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch'

export default function Projects() {
    let { id } = useParams()

    const { data: repos, isLoading, error } = useFetch('https://api.github.com/users/203mcgee/repos')

    if (isLoading) {
        return <h2>Loading projects... ⏳</h2>;
    }

    if (error) {
        return <h2 className="error-text">❌ Error: {error}</h2>;
    }

    // const projectsToShow = [
    //     'album-app',
    //     'capstone-project-II',
    //     'christmasPrograms-app',
    //     'clock-project',
    //     'manga-addict',
    //     'movies-app',
    //     'mymovies-app',
    //     'nextstack-module01-bio',
    //     'personal-soundboard'
    // ]

    // function getFinishedProjects(allRepos){
    //     return allRepos.filter((repo) => projectsToShow.includes(repo.name));
    // }

    function getDisplayedProjects(allRepos) {
        if (!allRepos) return [];
        
        // If an ID exists in the URL, filter for that specific project
        if (id) {
            return allRepos.filter((repo) => repo.id === Number(id));
        }

        // If no ID in URL, return all projects
        return allRepos;
    }

    // Call the function to get our array to render
    const projectsToRender = getDisplayedProjects(repos);
    // const finishedProjects = getFinishedProjects(repos);





    return (
        <>
            <section style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
            <h1>{id ? `Project Details (#${id})` : 'My Projects'}</h1>

            {/* Only show "Back" link if we are viewing a specific project ID */}
            {id && (
                <Link to="/projects" style={{ display: 'inline-block', marginBottom: '1rem' }}>
                    ← Back to All Projects
                </Link>
            )}

            {/* Fluid Grid container required by rubric */}
            {/* gridTemplateColumns: 'repeat(4,minmax(250px,1fr))' */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3,250px)',
                gap: '1.5rem',
                justifyContent: 'center'
            }}>
                {projectsToRender.map((repo) => (
                    <div key={repo.id || repo.name} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
                        <h3>{repo.name}</h3>
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
        </section>
        </>
    );
}