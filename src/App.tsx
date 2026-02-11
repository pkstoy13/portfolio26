//import { useState } from "react";
import "./App.css";
import { AboutSection } from "./components/AboutSection";
import { EducationSection } from "./components/EducationSection";
import { NavBar } from "./components/NavBar";
import { ProjectSection } from "./components/ProjectSection";
import { SkillSection } from "./components/SkillSection";
import { WelcomeSection } from "./components/WelcomeSection";
import { WorkExperienceSection } from "./components/WorkExperienceSection";

function App() {
  return (
    <div className='bg'>
      <WelcomeSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <EducationSection />
      <WorkExperienceSection />
      <NavBar />
    </div>
  );
}

export default App;
