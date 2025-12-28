export function BackgroundSection() {
  return (
    <section id="background" className="py-24 bg-card/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-medium tracking-wider uppercase text-muted-foreground">Background</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-balance">
          How I Got Here (Or: How I Learned to Stop Worrying and Love the Shell)
        </h3>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Picture this: 2021, first year of college. I'm sitting in my cybersecurity class learning about the CIA
            triad—Confidentiality, Integrity, Availability. And I'm thinking, "Okay cool, so that's cybersecurity.
            Just... CIA."
          </p>

          <p>
            <span className="text-foreground font-medium">2022, same thing.</span> More CIA triad. I'm starting to
            wonder, "Wait, is that EVERYTHING in cybersecurity?"
          </p>

          <p>
            Then I came across TryHackMe and HackTheBox. My brain practically exploded. "WOAHHH, there's an ENTIRE
            UNIVERSE beyond the CIA triad?!"
          </p>

          <p>
            <span className="text-foreground font-medium">2023 hits</span>, and I properly dive in. My first room:
            OSINT. No clue what I'm doing. The room loads, and I get... one picture. Just one. I stare at it. Refresh
            the page thinking it didn't load properly. Same picture.
          </p>

          <p>
            Then I find a Medium article explaining the solution. What happens next?{" "}
            <span className="text-primary font-medium">MIND. BLOWN.</span> This person extracted a user's password.
            From. A. Picture.
          </p>

          <p>That was it. I was hooked. Didn't stop from that day.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-3xl font-bold text-primary mb-2">Top 6%</p>
            <p className="text-sm text-muted-foreground">TryHackMe Global Ranking</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-3xl font-bold text-primary mb-2">50+</p>
            <p className="text-sm text-muted-foreground">Offensive Security Labs</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-3xl font-bold text-primary mb-2">15+</p>
            <p className="text-sm text-muted-foreground">Critical Vulns Found</p>
          </div>
        </div>

        <div className="mt-12 p-6 bg-card border border-border rounded-lg">
          <p className="text-foreground font-medium mb-4">My Philosophy</p>
          <p className="text-muted-foreground italic">
            "I learn systems end-to-end, then build tools that remove friction for everyone else, while I move on to the next{" "}
            <span className="text-primary">challenge</span>."
          </p>
        </div>
      </div>
    </section>
  )
}
