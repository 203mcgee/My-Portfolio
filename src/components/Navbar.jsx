// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import react from 'react'



function Navbar() {
    
    return (
        <>
            <header>
                <div>
                    <div>
                        <nav>
                            <Link to="/">Home</Link> |{" "}
                            <Link to="/projects">Projects</Link> |{" "}
                            <Link to="/experienceskills">Experience & Skills</Link> |{" "}
                            <Link to="/contact">Contact</Link> | {" "}
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar