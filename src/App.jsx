import React from "react";
import ProfileHeader from "./components/ProfileHeader";
import Skills from "./components/skills";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-900">
      <div className="flex flex-col justify-center items-center bg-zinc-900 text-white w-1/2">
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
