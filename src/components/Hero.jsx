import { useEffect, useState } from "react";
import react from 'react';
import '../../src/index.css';
import PText from "./PText";
import Button from "./Button";



function Hero() {
    return (
        <>
            {/* id="hero-section" */}
            <section className="relative flex flex-col items-center justify-center py-12 px-4">
                <div className="container max-w-4xl mx-auto text-center z-10">

                    <h1 className="text-3xl font-bold">
                        <span className="opacity-0 animate-fade-in">Hi, I'm </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">Zoe </span>
                        <span className=" text-gradient opacity-0 animate-fade-in-delay-2">McGee</span>
                    </h1>
                    {/* Might put image */}
                    {/* <div className="my-6">
                        <img
                            className="profile-pic w-32 h-32  mx-auto my-2 object-cover"
                            src="./src/assets/IMG_7380.jpeg"
                            alt="A picture of Some One"
                        />
                    </div> */}
                    <div className='opacity-0 animate-fade-in-delay-3'>
                        <PText >
                            I am junior web developer that makes website.
                        </PText>
                        <Button btnLink='/projects' btnText='See My Previous Work!' outline={false} />
                    </div>
                </div>
            </section>

        </>
    );
}

export default Hero