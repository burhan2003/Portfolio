import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "ReconForge",
    subtitle: "The All-in-One Pentester's Swiss Army Knife",
    status: "Active Development",
    date: "Dec 2025 - Present",
    problem:
      "Switching between 15 different terminal windows running Nmap, Gobuster, Hydra, and copying outputs into reports like a digital scrapbooker.",
    approach: "Built a unified GUI wrapping every major command-line pentesting tool with automatic report generation.",
    impact:
      "Documentation is half the job in penetration testing. This tool handles the boring stuff so you can focus on finding vulnerabilities.",
    tech: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/burhan2003/reconforge",
    demo: "#",
  },
  {
    title: "DefenseSphere",
    subtitle: "Blockchain Meets Identity Management",
    status: "Completed",
    date: "Jul 2024 - Apr 2025",
    problem: "Traditional IAM systems have single points of failure.",
    approach:
      "Built a complete blockchain-powered authentication system with RBAC, VPN tunneling, file integrity monitoring, and token-based auth.",
    impact:
      "Reduced identity spoofing by 68% and unauthorized access incidents by 80% in simulated environments. Also pentested my own system and fixed the vulnerabilities.",
    tech: ["Python", "Flask", "Solidity", "Web3.py", "Burp Suite"],
    github: "https://github.com/burhan2003/defensesphere",
    demo: "#",
  },
  {
    title: "Ghost Keylogger",
    subtitle: "Educational Security Research",
    status: "Research Project",
    date: "2024",
    problem: "Understanding how malware authors make keyloggers that evade detection.",
    approach:
      "Built an educational keylogger to study AV evasion techniques, behavioral analysis, and endpoint security.",
    impact:
      "Deepened understanding of attack techniques to better defend against them. Tested exclusively in isolated VMs.",
    tech: ["Python", "pynput", "Windows API"],
    github: "https://github.com/burhan2003/ghost-keylogger",
    demo: null,
  },
]

export function ProjectsSection() {
  return (
    <section id="findings" className="py-32">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-sm tracking-wider uppercase text-muted-foreground mb-4">Findings</p>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-16">Projects</h3>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="border-b border-border pb-12 last:border-0">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-xl font-semibold text-foreground">{project.title}</h4>
                    <Badge variant="secondary" className="text-xs">
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{project.subtitle}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  {project.demo && (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-6">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Problem</p>
                  <p className="text-sm text-foreground leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Approach</p>
                  <p className="text-sm text-foreground leading-relaxed">{project.approach}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Impact</p>
                  <p className="text-sm text-foreground leading-relaxed">{project.impact}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge key={t} variant="outline" className="text-xs font-normal">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground mb-4">Other projects:</p>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>
              <span className="text-foreground">Active Directory Attack Labs</span> — Practice environment for
              Kerberoasting, Pass-the-Hash, Golden Ticket attacks
            </li>
            <li>
              <span className="text-foreground">CTF Writeups & Research</span> — 50+ TryHackMe labs completed (Top 9%
              globally)
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
