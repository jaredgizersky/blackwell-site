"use client"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />

      <div className="relative z-10 text-center space-y-8 px-6 max-w-4xl">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-foreground">BLACKWELL</h1>
          <h2 className="text-4xl md:text-6xl font-light tracking-wider text-muted-foreground">VENTURES</h2>
        </div>

        <div className="space-y-6">
          <div className="h-px w-24 bg-primary mx-auto" />
          <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide">COMING SOON</p>
        </div>

        <div className="flex justify-center space-x-2 pt-12">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse delay-75" />
          <div className="w-2 h-2 bg-primary/30 rounded-full animate-pulse delay-150" />
        </div>
      </div>
    </main>
  )
}
