import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function WritingSection() {
  return (
    <section id="writing" className="py-24 bg-card/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-medium tracking-wider uppercase text-muted-foreground">Writing & Research</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">I Write Too</h3>

        <p className="text-muted-foreground mb-6 leading-relaxed">
          I document my journey through detailed writeups on Medium. Think of them as technical blog posts where I
          explain:
        </p>

        <ul className="space-y-3 text-muted-foreground mb-8">
          <li className="flex items-start gap-3">
            <span className="text-primary">•</span>
            <span>How I approached specific penetration testing challenges</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary">•</span>
            <span>Exploitation techniques and methodologies</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary">•</span>
            <span>Lessons learned from CTF competitions</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary">•</span>
            <span>Security research findings</span>
          </li>
        </ul>

        <div className="p-6 bg-card border border-border rounded-lg mb-8">
          <p className="text-foreground font-medium mb-2">Why read my articles?</p>
          <p className="text-muted-foreground">
            Because I explain things like I'm talking to a friend over coffee, not like I'm reading from a textbook.
            Technical doesn't have to mean boring.
          </p>
        </div>

        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
          <a href="https://medium.com/@burha2003" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2" />
            Check out my Medium profile
          </a>
        </Button>
      </div>
    </section>
  )
}
