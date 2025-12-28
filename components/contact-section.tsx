import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react"

const links = [
  { icon: Mail, label: "Email", value: "burhanr15@outlook.com", href: "mailto:burhanr15@outlook.com" },
  { icon: Linkedin, label: "LinkedIn", value: "Connect with me", href: "https://www.linkedin.com/in/burhanr/" },
  { icon: Github, label: "GitHub", value: "Check out my code", href: "https://github.com/burhan2003" },
  { icon: ExternalLink, label: "TryHackMe", value: "See my progress", href: "https://tryhackme.com/p/2No0b4YoU" },
  { icon: ExternalLink, label: "Medium", value: "Read my writeups", href: "https://medium.com/@burha2003" },
]

export function ContactSection() {
  return (
    <section id="engagement" className="py-32">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-sm tracking-wider uppercase text-muted-foreground mb-4">Engagement</p>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Let's Talk</h3>

        <p className="text-muted-foreground mb-12 leading-relaxed">
          Whether you've got a job opportunity, want to collaborate on a project, or just want to chat about security.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 py-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <link.icon className="w-5 h-5" />
              <span className="text-sm">{link.value}</span>
            </a>
          ))}
        </div>

        <Button size="lg" asChild>
          <a href="mailto:burhanr15@outlook.com">
            <Mail className="w-4 h-4 mr-2" />
            Get in Touch
          </a>
        </Button>

        <div className="mt-24 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">© 2025 Burhan</p>
        </div>
      </div>
    </section>
  )
}
