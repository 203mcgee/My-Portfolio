import { useEffect, useState } from "react";
import React from 'react';
import '../../src/index.css';
import PText from "./PText";
import Button from "./Button";
import prof_photo from "../assets/images/prof_profile.jpeg";

function Hero() {
  return (
    <section className="relative py-12 px-4 max-w-4xl mx-auto">
      {/* 
        flex-col: Stacks image and text vertically on mobile 
        md:flex-row: Places image and text side-by-side on tablet/desktop 
      */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        
        {/* Left: Profile Picture */}
        <div className="shrink-0">
          <img
            className="w-40 h-40 md:w-52 md:h-52 object-cover border-4 border-white dark:border-gray-700 rounded-2xl shadow-lg"
            src={prof_photo} /* Uses your imported image variable */
            alt="Profile picture of Zoe McGee"
          />
        </div>

        {/* Right: Intro Text & CTA */}
        <div className="text-center md:text-left z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3">
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="text-blue-600 dark:text-blue-400 opacity-0 animate-fade-in-delay-1">Zoe </span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-2">McGee</span>
          </h1>

          <div className="opacity-0 animate-fade-in-delay-3 space-y-4">
            <PText>
              I am a junior web developer passionate about building clean, responsive, and user-friendly websites.
            </PText>
            
            <div className="inline-block items-center pt-2">
              <Button btnLink="/projects" btnText="Projects" outline={false} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;