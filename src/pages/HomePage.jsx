import React from "react";

export default function HomePage(){

    return(
        <>
            
            <section className="core-section  border-4 rounded-2xl my-2 p-4">
                <h2 className="text-2xl">My Core Stack</h2>
                <p>Operating System: Windows </p>
                <p>Database: MySQL</p>
                <p>Programming Languages: C++, C, Python, JavaScript</p>
                <p>Framework:Node.js,React.js</p>
            </section>
            <section className="developer-identity-section border-4 rounded-2xl my-2 p-4">
                <h2 className="text-2xl">Developer Identity</h2>
                <p>My developer identity is junior web developer or junior software developer.</p>
            </section>
            <section className="metrics-section border-4 rounded-2xl my-2 p-4">
                <h2 className="text-2xl">Metrics</h2>
                <p>I don't know what this mean</p>
            </section>
        </>
    );
}