import React from "react";
import ProfileHeader from "./components/ProfileHeader";
import ExperienceEducation from "./components/ExperienceEducation";

export default function App() {
  return (
    <div className="flex flex-col items-center  bg-zinc-900 p-6 text-white h-screen">
      <div className="flex justify-start">
        <ProfileHeader />
      </div>
      <ExperienceEducation />
    </div>
  );
}
