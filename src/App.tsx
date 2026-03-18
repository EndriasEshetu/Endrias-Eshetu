import { useMemo } from "react";
import { useTheme } from "./contexts/ThemeContext";
import { AchievementsSection } from "./components/AchievementsSection";
import { CertificatesSection } from "./components/CertificatesSection";
import { ContactSection } from "./components/ContactSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { Navbar } from "./components/Navbar";
import { Particles } from "./components/Particles";
import { SelectedWork } from "./components/SelectedWork";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { SkillsSection } from "./components/SkillsSection";
import { OWNER_CERTIFICATES } from "./data/certificates";
import "./App.css";

function App() {
  const { theme } = useTheme();
  const certificates = OWNER_CERTIFICATES;
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const particleColors = useMemo(
    () =>
      theme === "light"
        ? ["#c4b5fd", "#a78bfa", "#e9d5ff"]
        : ["#ff00ff"],
    [theme],
  );

  return (
    <div className="app-shell">
      <div className="app-background" aria-hidden="true">
        <Particles
          particleCount={380}
          particleSpread={17}
          speed={0.1}
          particleColors={particleColors}
          alphaParticles
          particleBaseSize={108}
          sizeRandomness={1.1}
          cameraDistance={18}
          disableRotation={false}
          pixelRatio={Math.min(window.devicePixelRatio || 1, 2)}
          className="app-particles"
        />
      </div>

      <div className="app-content">
        <Navbar />
        <SiteHeader />

        <main id="main">
          <SkillsSection />
          <ProjectsSection />

          <AchievementsSection />
          <SelectedWork />
          <CertificatesSection certificates={certificates} />
          <ContactSection />
        </main>

        <SiteFooter currentYear={currentYear} />
      </div>
    </div>
  );
}

export default App;
