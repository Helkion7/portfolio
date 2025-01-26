import React from "react";
import ProfileHeader from "./components/ProfileHeader";
import Skills from "./components/skills";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-0">
      <div className="flex flex-col justify-center items-center text-white w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl">
        <div className="flex justify-start w-full">
          <ProfileHeader />
        </div>
        <div className="w-full">
          <Experience />
        </div>
        <div className="w-full">
          <Skills />
        </div>
        <div className="w-full">
          <Projects />
        </div>
        <Footer />
      </div>
    </div>
  );
}
