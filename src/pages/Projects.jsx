import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch'
import '../App.css'

export default function Projects() {
    let { id } = useParams()
    // const url = ''

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
        const goodProjects = id === 1088887137 || id === 1256179191 || id === 1104017768 || id === 1222684857 || id === 1185591651 || id === 1087375365 || id === 1093692273 || id === 1151561614 || id === 1236786653 ||
            id === 1277149657;
        // If an ID exists in the URL, filter for that specific project
        if (id) {

            return allRepos.map((repo) => repo.id === goodProjects);
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
                <h1 className='text-2xl text-center my-2.5 p-1.5 border-b-2'>{id ? `Project Details (#${id})` : 'My Projects'}</h1>

                {/* Only show "Back" link if we are viewing a specific project ID */}
                {id && (
                    <Link to="/projects" style={{ display: 'inline-block', marginBottom: '1rem' }}>
                        ← Back to All Projects
                    </Link>
                )}

                {/* Fluid Grid container required by rubric */}
                {/* gridTemplateColumns: 'repeat(4,minmax(250px,1fr))' */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-6xl mx-auto">
                    {projectsToRender.map((repo) => (
                        <div
                            key={repo.id || repo.name}
                            className="project-card border border-gray-200 dark:border-gray-700 rounded-xl p-5 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 shadow-sm flex flex-col justify-between transition-all hover:shadow-md"
                        >
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900 dark:text-white break-words">
                                    {repo.name}
                                </h3>
                                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {repo.description || 'No description provided.'}
                                </p>
                            </div>

                            <div className="flex items-center gap-4 mt-6 pt-4 border-t border-gray-100 dark:border-gray-700 text-sm font-medium">
                                {!id && (
                                    <Link
                                        to={`/projects/${repo.id}`}
                                        className="text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                        View Details
                                    </Link>
                                )}

                                <a
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                                >
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