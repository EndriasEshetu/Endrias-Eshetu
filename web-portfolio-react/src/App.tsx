import { useMemo, useState } from "react";
import { AboutSection } from "./components/AboutSection";
import { AchievementsSection } from "./components/AchievementsSection";
import { CertificatesSection } from "./components/CertificatesSection";
import { ContactSection } from "./components/ContactSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { Navbar } from "./components/Navbar";
import { ProjectsSection } from "./components/ProjectsSection";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { SkillsSection } from "./components/SkillsSection";
import type { Certificate, NewCertificate } from "./types/certificate";
import "./App.css";

const STORAGE_KEY = "portfolio-certificates-v1";

function loadCertificates(): Certificate[] {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return [];
  }

  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.filter(
      (item): item is Certificate =>
        typeof item === "object" &&
        item !== null &&
        typeof (item as Certificate).id === "string" &&
        typeof (item as Certificate).title === "string" &&
        typeof (item as Certificate).issuer === "string" &&
        typeof (item as Certificate).date === "string" &&
        typeof (item as Certificate).link === "string",
    );
  } catch {
    return [];
  }
}

function createId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }

  return `cert-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function App() {
  const [certificates, setCertificates] = useState<Certificate[]>(() =>
    loadCertificates(),
  );
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const addCertificate = (certificate: NewCertificate) => {
    setCertificates((prev) => {
      const next = [{ id: createId(), ...certificate }, ...prev];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  };

  const clearCertificates = () => {
    const confirmClear = window.confirm(
      "Clear all certificates stored on this device?",
    );
    if (!confirmClear) {
      return;
    }

    setCertificates([]);
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
  };

  return (
    <>
      <Navbar />
      <SiteHeader />

      <main id="main">
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <AchievementsSection />
        <ProjectsSection />
        <CertificatesSection
          certificates={certificates}
          onAdd={addCertificate}
          onClear={clearCertificates}
        />
        <ContactSection />
      </main>

      <SiteFooter currentYear={currentYear} />
    </>
  );
}

export default App;
