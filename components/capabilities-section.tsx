import { Badge } from "@/components/ui/badge"

const specialties = [
  {
    title: "Active Directory Attacks",
    label: "Specialty",
    description:
      "If your organization runs Windows, there's a 90% chance I can find a way to escalate privileges. Kerberoasting, AS-REP Roasting, Pass-the-Hash, Golden Tickets — that's breakfast.",
  },
  {
    title: "Learning at Lightning Speed",
    label: "Superpower",
    description:
      "Web development? 3 days. n8n automation? 2 days. New exploitation technique? Give me a weekend. I get functional fast enough to build real projects.",
  },
  {
    title: "Breaking AND Building",
    label: "Philosophy",
    description:
      "Most pentesters break things. I break things, understand WHY they broke, then build solutions. DefenseSphere is proof.",
  },
  {
    title: "Making Boring Stuff Interesting",
    label: "Skill",
    description:
      "I write technical writeups that even non-technical people find engaging. What's the point of finding cool vulnerabilities if you can't explain them?",
  },
]

const arsenal = {
  "Penetration Testing": [
    "Nmap",
    "Metasploit",
    "Burp Suite",
    "Hydra",
    "John The Ripper",
    "Nikto",
    "Nessus",
    "Gobuster",
    "SQLmap",
    "Dirbuster",
  ],
  Exploitation: [
    "Linux/Windows Privesc",
    "Kerberoasting",
    "Pass-the-Hash",
    "AS-REP Roasting",
    "Golden Tickets",
    "Web App Exploitation",
    "Lateral Movement",
  ],
  Programming: ["Python", "Bash", "PowerShell", "GoLang", "JavaScript"],
  Frameworks: ["OWASP Top 10", "OWASP LLM Top 10", "NIST CSF", "MITRE ATT&CK"],
  Networking: ["TCP/UDP", "SMB/CIFS", "DNS", "SSH", "RDP", "Wireshark"],
  "Operating Systems": ["Kali Linux", "ParrotOS", "Windows Server", "Active Directory"],
}

const certifications = [
  { name: "PNPT", org: "TCM Security", status: "verified" },
  { name: "CompTIA PenTest+", org: "Exam Jan 2026", status: "pending" },
  { name: "Jr Penetration Tester", org: "TryHackMe", status: "verified" },
  { name: "Generative AI Professional", org: "Oracle", status: "verified" },
]

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-32">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-sm tracking-wider uppercase text-muted-foreground mb-4">Capabilities</p>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-16">Skills</h3>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mb-20">
          {specialties.map((item, index) => (
            <div key={index}>
              <h4 className="font-medium text-foreground mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <h4 className="text-lg font-semibold text-foreground mb-8">Tools & Technologies</h4>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {Object.entries(arsenal).map(([category, items]) => (
            <div key={category}>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">{category}</p>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <Badge key={item} variant="outline" className="text-xs font-normal">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h4 className="text-lg font-semibold text-foreground mb-8">Certifications</h4>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div key={index}>
              <p className="font-medium text-foreground">{cert.name}</p>
              <p className="text-sm text-muted-foreground">{cert.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
