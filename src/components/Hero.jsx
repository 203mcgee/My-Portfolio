import { useEffect, useState } from "react";
import react from 'react'



function Hero() {
    return (
        <>
            <section id="hero-section" className="relative min-h-screen flex flex-col items-center justify-content px-4">
                <div className="container max-w-4xl mx-auto text-center z-10">
                    <div>
                        <h1>
                            <span>Nice to meet you!</span>
                            <span></span>
                        </h1>
                        {/* <img src="./src/assets/IMG_7380.jpeg" alt="A picture of Zoe McGee"></img> */}
                    </div>

                </div>
            </section>
        </>
    );
}

export default Hero