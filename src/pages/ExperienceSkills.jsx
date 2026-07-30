import React, { Fragment } from 'react';
import 'tailwindcss'
import Timeline from '../components/Timeline';




export default function ExperienceSkills() {

    // Experience & Skills (/experience): An interactive, highly structured timeline and grid setup demonstrating technical checkpoints, frameworks, and growth tracking.
    // https://www.youtube.com/watch?v=UqGIqNkhTXY

    const knownSkills = [
        {
            skill: 'C++',
            learned: 2021,
            direction: 'right'

        },
        {
            skill: 'C',
            learned: 2022,
            direction: 'left'

        },
        {
            skill: 'Javascript',
            learned: 2025,
            direction: 'right'

        },
        {
            skill: 'HTML/CSS',
            learned: 2026,
            direction: 'left'

        },
    ]

    const knownFrameworks = [
        {
            framework: 'Node.Js',
            learned: 2025,
            direction: 'right'
        },
        {
            framework: 'React.Js',
            learned: 2026,
            direction: 'left'
        }
    ]

    const technicalCheckpoint = [
        {
            techCheck: 'MCA Backend Programming Certification',
            completion: 'January 15, 2026',
            direction: 'right'
        },
        {
            techCheck: 'NextStack HTML & CSS Certification',
            completion: 'May 12, 2026',
            direction: 'left'
        },
        {
            techCheck: 'NextStack Javascript Certification',
            completion: 'January 15, 2026',
            direction: 'right'
        },
    ]




    return (
        <>
            <div className="max-w-4xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-8">My Experience & Skills</h1>

                {/* Skills Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold border-b-2 text-center mb-4">Core Languages</h2>
                    <Timeline info={knownSkills} />
                </section>

                {/* Frameworks Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold border-b-2 text-center mb-4">Frameworks & Libraries</h2>
                    <Timeline info={knownFrameworks} />
                </section>

                {/* Certifications Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold border-b-2 text-center mb-6">Technical Checkpoints</h2>
                    <Timeline info={technicalCheckpoint} />
                </section>
            </div>
        </>
    );


}

