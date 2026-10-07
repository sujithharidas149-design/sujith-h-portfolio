import React from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Capabilities } from './components/Capabilities.tsx';
import { Experience } from './components/Experience.tsx';
import { PerformanceStat } from './components/PerformanceStat.tsx';
import { SelectedWork } from './components/SelectedWork.tsx';
import { Toolkit } from './components/Toolkit.tsx';
import { Education } from './components/Education.tsx';
import { PersonalStatement } from './components/PersonalStatement.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { CustomCursor } from './components/CustomCursor.tsx';
import { ScrollProgressBar } from './components/ScrollProgressBar.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#090708] text-[#F5F0EA] relative selection:bg-[#9B2946] selection:text-white">
      {/* Subtle fixed-position scroll progress bar */}
      <ScrollProgressBar />

      {/* Desktop Luxury Magnetic Custom Cursor */}
      <CustomCursor />

      {/* Floating Glass Navigation */}
      <Navbar />

      {/* 01 — HERO */}
      <main>
        <Hero />

        {/* 02 — ABOUT */}
        <About />

        {/* 03 — CAPABILITIES */}
        <Capabilities />

        {/* 04 — EXPERIENCE */}
        <Experience />

        {/* 05 — PERFORMANCE */}
        <PerformanceStat />

        {/* 06 — SELECTED WORK */}
        <SelectedWork />

        {/* 07 — TOOLKIT */}
        <Toolkit />

        {/* 08 — EDUCATION */}
        <Education />

        {/* 09 — PERSONAL STATEMENT */}
        <PersonalStatement />

        {/* 10 — CONTACT */}
        <Contact />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
