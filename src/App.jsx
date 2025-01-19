import React from "react";
import ProfileHeader from "./components/ProfileHeader";
import Skills from "./components/skills";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="flex flex-col items-center  bg-zinc-900 text-white">
      <div className="flex justify-start">
        <ProfileHeader />
      </div>
      <div>
        <Experience />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Projects />
      </div>
      <Footer />
    </div>
  );
}
