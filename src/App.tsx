
import { resumeData } from './data/resumeData';
import { HeroSection } from './components/sections/HeroSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import './index.css';

function App() {
  return (
    <>
      <div className="mesh-bg">
        <div className="mesh-blob mesh-blob-1"></div>
        <div className="mesh-blob mesh-blob-2"></div>
        <div className="mesh-blob mesh-blob-3"></div>
      </div>
      
      <div className="container relative-z">
      <HeroSection data={resumeData.personalInfo} />
      <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', margin: '3rem 0' }} />
      <ExperienceSection experience={resumeData.experience} />
      <SkillsSection skills={resumeData.skills} />
      <ProjectsSection projects={resumeData.projects} />
      
      <footer style={{ textAlign: 'center', marginTop: '6rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
        <p>© {new Date().getFullYear()} {resumeData.personalInfo.name}. Built with React & TypeScript.</p>
      </footer>
    </div>
    </>
  );
}

export default App;
