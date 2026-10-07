import React, {useState, useEffect} from "react";
import {
  Main,
  Education,
  Experience,
  Expertise,
  Project,
  Achievements,
  Certifications,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import { trackSectionView } from './analytics';
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    useEffect(() => {
        const sections = document.querySelectorAll('[id]');
        const seen = new Set<string>();
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !seen.has(entry.target.id)) {
                    seen.add(entry.target.id);
                    trackSectionView(entry.target.id);
                }
            });
        }, { threshold: 0.3 });
        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
            <Main/>
            <Expertise/>
            <Education/>
            <Experience/>
            <Project/>
            <Achievements/>
            <Certifications/>
        </FadeIn>
        <Footer />
    </div>
    );
}

export default App;
