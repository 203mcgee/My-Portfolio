import { useEffect, useState } from "react";
import react from 'react'
import '../../src/index.css'



function Hero() {
    return (
        <>
            <section id="hero-section" className="relative min-h-screen flex flex-col items-center justify-content px-4">
                <div className="container max-w-4xl mx-auto text-center z-10">
                    <div>
                        <h1>
                            <span>Nice to meet you!</span>
                            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                            <span className="text-primary opacity-0 animate-fade-in-delay-1">{" "} Zoe</span>
                            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-1">{" "} McGee</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                            I create
                        </p>
                        <img className="profile-pic absolute right-0 top-0" src="./src/assets/IMG_7380.jpeg" alt="A picture of Zoe McGee" ></img>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Hero