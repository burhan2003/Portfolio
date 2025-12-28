export function ExperienceSection() {
  return (
    <section id="experience" className="py-32">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-sm tracking-wider uppercase text-muted-foreground mb-4">Experience</p>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-16">Work History</h3>

        <div className="mb-12">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <h4 className="text-xl font-semibold text-foreground">AI Agent Assistant</h4>
              <p className="text-primary">Mindrift Toloka</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Aug 2025 - Oct 2025</p>
              <p className="text-xs text-muted-foreground">Remote</p>
            </div>
          </div>

          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-muted-foreground/50 mt-1">—</span>
              <span>
                Spearheaded optimization of large language model (LLM) prompts, resulting in a{" "}
                <span className="text-foreground">25% increase in response relevance</span> based on internal evaluation
                metrics
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-muted-foreground/50 mt-1">—</span>
              <span>
                Collaborated with cross-functional teams to implement AI-driven workflow improvements, leading to
                measurable time and cost savings
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-muted-foreground/50 mt-1">—</span>
              <span>
                Implemented AI-driven data analysis methods, influencing product decisions and{" "}
                <span className="text-foreground">saving 10+ hours per month</span> in manual review
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-muted-foreground/50 mt-1">—</span>
              <span>
                Managed hands-on machine learning experimentation and AI model training, enhancing understanding of
                model behavior and optimization for future deployments
              </span>
            </li>
          </ul>
        </div>

        <div className="mb-12 pt-12 border-t border-border">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <h4 className="text-xl font-semibold text-foreground">AI Penetration Testing Intern</h4>
              <p className="text-primary">Groot</p>
            </div>
            <p className="text-sm text-muted-foreground">Jun 2023 - Aug 2023</p>
          </div>

          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-muted-foreground/50 mt-1">—</span>
              <span>
                Found and documented <span className="text-foreground">15+ critical vulnerabilities</span> (CVSS 6+)
                across sandbox environments
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-muted-foreground/50 mt-1">—</span>
              <span>
                Wrote comprehensive pentest reports with clear exploit PoCs, CVSS scoring, and remediation strategies
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-muted-foreground/50 mt-1">—</span>
              <span>
                Executed privilege escalation attacks on hardened Linux VMs using kernel exploits, SUID binaries, and
                misconfigured services
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-muted-foreground/50 mt-1">—</span>
              <span>
                Simulated post-exploitation scenarios with Metasploit (payload delivery, persistence, lateral movement)
              </span>
            </li>
          </ul>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-2">Current Activity</p>
          <p className="text-foreground">
            TryHackMe Top 6%, building ReconForge, writing technical articles, preparing for CompTIA PenTest+.
          </p>
        </div>
      </div>
    </section>
  )
}
