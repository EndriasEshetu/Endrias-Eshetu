import { useMemo } from "react";
import { useTheme } from "./contexts/ThemeContext";
import { CertificatesSection } from "./components/CertificatesSection";
import { ContactSection } from "./components/ContactSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { Navbar } from "./components/Navbar";
import { Particles } from "./components/Particles";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { SkillsSection } from "./components/SkillsSection";
import { TechStacks } from "./components/TechStacks";
import { OWNER_CERTIFICATES } from "./data/certificates";
import "./App.css";

function App() {
  const { theme } = useTheme();
  const certificates = OWNER_CERTIFICATES;
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const particlePreset = useMemo(() => {
    if (theme === "light") {
      return {
        colors: ["#7c2d12", "#92400e", "#a16207", "#b45309", "#57534e"],
        count: 480,
        spread: 15,
        speed: 0.08,
        baseSize: 122,
        alphaScale: 1.48,
        shimmerMix: 0.12,
        rgbLift: 0.04,
      };
    }
    return {
      colors: ["#f4c94a", "#e8c547", "#c9a227", "#a67c1a"],
      count: 320,
      spread: 18,
      speed: 0.1,
      baseSize: 104,
      alphaScale: 1,
      shimmerMix: 0.3,
      rgbLift: 0.2,
    };
  }, [theme]);

  return (
    <div className="app-shell">
      <div className="app-background" aria-hidden="true">
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

          <TechStacks />
          <CertificatesSection certificates={certificates} />
          <ContactSection />
        </main>

        <SiteFooter currentYear={currentYear} />
      </div>
    </div>
  );
}

export default App;
