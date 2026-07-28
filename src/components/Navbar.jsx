// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import react from 'react'




function Navbar() {
    
    return (
        <>
            <header>
                <div>
                    <div>
                        <nav style={{ display: '',padding: '10px', borderBottom: '1px solid #ccc' }}>
                            <Link to="/" style={{ marginRight: '10px' }}>Home</Link> |{" "}
                            <Link to="/projects" style={{ marginRight: '10px' }}>Projects</Link> |{" "}
                            <Link to="/experienceskills" style={{ marginRight: '10px' }}>Experience & Skills</Link> |{" "}
                            <Link to="/contact" style={{ marginRight: '10px' }}>Contact</Link> | {" "}
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar