import { useMemo } from "react";
import { useTheme } from "./contexts/ThemeContext";
import { CertificatesSection } from "./components/CertificatesSection";
import { ContactSection } from "./components/ContactSection";
import { MyJourney } from "./components/MyJourney";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillSection } from "./components/SkillSection";
import { TechStack } from "./components/TechStack";
import { Navbar } from "./components/Navbar";
import { Particles } from "./components/Particles";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { OWNER_CERTIFICATES } from "./data/certificates";
import "./App.css";
import { AboutSection } from "./components/About";

function App() {
  const { theme } = useTheme();
  const certificates = OWNER_CERTIFICATES;
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const particlePreset = useMemo(() => {
    if (theme === "dark") {
      return {
        colors: ["#f4c94a", "#e8c547", "#c9a227", "#a67c1a"],
        count: 320,
        spread: 18,
        speed: 0.1,
        baseSize: 104,
        alphaScale: 1,
        shimmerMix: 0.3,
        rgbLift: 0.2,
        disableRotation: false,
      };
    }

    return null;
  }, [theme]);

  return (
    <div className="app-shell">
      <div className="app-background" aria-hidden="true">
        {particlePreset ? (
          <Particles
            particleCount={particlePreset.count}
            particleSpread={particlePreset.spread}
            speed={particlePreset.speed}
            particleColors={particlePreset.colors}
            alphaParticles
            particleAlphaScale={particlePreset.alphaScale}
            particleShimmerMix={particlePreset.shimmerMix}
            particleRgbLift={particlePreset.rgbLift}
            particleBaseSize={particlePreset.baseSize}
            sizeRandomness={1.1}
            cameraDistance={18}
            disableRotation={particlePreset.disableRotation}
            pixelRatio={Math.min(window.devicePixelRatio || 1, 2)}
            className="app-particles"
          />
        ) : null}
      </div>

      <div className="app-content">
        <Navbar />
        <SiteHeader />
        <AboutSection />

        <main id="main">
          <MyJourney />
          <SkillSection />
          <TechStack />
          <ProjectsSection />
          <CertificatesSection certificates={certificates} />
          <ContactSection />
        </main>

        <SiteFooter currentYear={currentYear} />
      </div>
    </div>
  );
}

export default App;
