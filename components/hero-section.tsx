import { Button } from "@/components/ui/button"
import { ArrowDown, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section id="summary" className="min-h-screen flex items-center pt-24">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-primary text-sm tracking-wider uppercase mb-6">Penetration Tester</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-balance leading-tight">
            Hello there, I'm Burhan.
          </h1>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            Some people collect stamps. I collect vulnerabilities.
          </p>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            I'm a penetration tester who breaks into systems (legally) and tells you how I did it before someone else
            does it maliciously. Think of me as the person who finds the unlocked window before the burglar does.
          </p>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            Fresh out of college with a <span className="text-foreground">PNPT certification</span> and{" "}
            <span className="text-foreground">15+ real vulnerabilities</span> found.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <Button asChild size="lg">
              <a href="#findings">
                <ArrowDown className="w-4 h-4 mr-2" />
                View Projects
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#engagement">
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </a>
            </Button>
          </div>
        </div>

        <div className="pt-12 border-t border-border max-w-2xl">
          <p className="text-sm text-muted-foreground mb-2">Currently seeking</p>
          <p className="text-foreground">Junior Penetration Tester or Red Team roles.</p>
        </div>
      </div>
    </section>
  )
}
