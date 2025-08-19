"use client"

export default function NoSugrPage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Background gradients matching landing page aesthetic */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />

      <div className="relative z-10 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center space-y-8 mb-20">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 2v11h3v9l7-12h-4l4-8z" />
              </svg>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">Break Free From Sugar</h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light max-w-4xl mx-auto leading-relaxed">
                Track your sugar-free journey, build lasting streaks, and transform your health with NoSugr - the
                mindful way to overcome sugar addiction.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Daily Tracking */}
            <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center space-y-6 hover:bg-card/40 transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Daily Tracking</h3>
              <p className="text-muted-foreground leading-relaxed">
                Log your sugar-free days and monitor your progress with detailed mood and craving insights.
              </p>
            </div>

            {/* Streak Building */}
            <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center space-y-6 hover:bg-card/40 transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Streak Building</h3>
              <p className="text-muted-foreground leading-relaxed">
                Build momentum with streak tracking and celebrate milestones in your sugar-free journey.
              </p>
            </div>

            {/* Food Logging */}
            <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center space-y-6 hover:bg-card/40 transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Food Logging</h3>
              <p className="text-muted-foreground leading-relaxed">
                Track foods with sugar content analysis and photo logging for complete awareness.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/20 rounded-3xl p-12 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">Ready to Start Your Journey?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join thousands who have transformed their relationship with sugar.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-background text-foreground px-8 py-4 rounded-xl font-semibold hover:bg-background/80 transition-colors border border-border/50">
                Download for iOS
              </button>
              <button className="bg-primary/10 text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary/20 transition-colors border border-primary/20">
                Download for Android
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-20 pt-8 border-t border-border/20 text-center">
            <div className="flex justify-center items-center space-x-6 text-sm text-muted-foreground">
              <a href="/nosugr/policy" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <span>© 2025 NoSugr</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
