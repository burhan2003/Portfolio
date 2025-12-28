import { Badge } from "@/components/ui/badge"

export function EducationSection() {
  return (
    <section id="education" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-medium tracking-wider uppercase text-muted-foreground">Education</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="bg-card border border-border rounded-lg p-6 md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="text-xl font-bold text-foreground">B.Tech in Computer Science Engineering</h3>
              <p className="text-primary font-medium">Specialization: Cybersecurity</p>
            </div>
            <Badge variant="outline" className="text-muted-foreground border-border">
              Graduated 2025
            </Badge>
          </div>

          <p className="text-muted-foreground mb-4">Sandip University, Nashik</p>

          <div className="flex items-center gap-4">
            <div>
              <p className="text-2xl font-bold text-foreground">7.9</p>
              <p className="text-xs text-muted-foreground">CGPA / 10</p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground italic">
              The degree gave me the foundation. The late-night lab sessions and CTF competitions gave me the skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
