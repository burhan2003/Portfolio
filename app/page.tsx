import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { BackgroundSection } from "@/components/background-section"
import { ProjectsSection } from "@/components/projects-section"
import { CapabilitiesSection } from "@/components/capabilities-section"
import { ExperienceSection } from "@/components/experience-section"
import { WritingSection } from "@/components/writing-section"
import { EducationSection } from "@/components/education-section"
import { ContactSection } from "@/components/contact-section"
import { DotBackground } from "@/components/dot-background"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <DotBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <BackgroundSection />
        <ProjectsSection />
        <CapabilitiesSection />
        <ExperienceSection />
        <WritingSection />
        <EducationSection />
        <ContactSection />
      </div>
    </main>
  )
}
