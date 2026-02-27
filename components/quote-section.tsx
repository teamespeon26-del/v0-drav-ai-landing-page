export function QuoteSection() {
  return (
    <footer className="relative border-t border-border/50 bg-muted/40 px-4 py-16">
      <div className="mx-auto max-w-3xl text-center">
        {/* Decorative quote mark */}
        <div className="mb-4 text-5xl font-serif leading-none text-primary/20" aria-hidden="true">
          {"\u201C"}
        </div>

        <blockquote className="text-balance text-2xl font-medium italic leading-relaxed tracking-wide text-foreground sm:text-3xl">
          Smart enough to assist. Wise enough to escalate.
        </blockquote>

        {/* Decorative line */}
        <div className="mx-auto mt-8 h-0.5 w-16 rounded-full bg-primary/30" aria-hidden="true" />

        <p className="mt-6 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          DravAI
        </p>
      </div>
    </footer>
  )
}
