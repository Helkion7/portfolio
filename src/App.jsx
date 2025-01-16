import React from "react";
import ProfileHeader from "./components/ProfileHeader";

export default function App() {
  return (
    <div className="flex flex-col items-center  bg-zinc-900 p-6 text-white h-screen">
      <ProfileHeader />
      <h1 className="text-red-500">Hello</h1>
    </div>
  );
}
