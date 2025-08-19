import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - NoSugr",
  description: "NoSugr Privacy Policy - How we protect your data and privacy while you track your sugar-free journey.",
};

export default function NoSugrPrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Background gradients matching landing page aesthetic */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />

      {/* Header */}
      <div className="relative z-10 px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/nosugr" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to NoSugr
          </Link>
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Privacy Policy</h1>
            <p className="text-muted-foreground text-lg">Last updated: August 19, 2025</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12">
            <div className="space-y-8">
              
              <h2 className="text-3xl font-bold text-foreground mb-6">Information We Collect</h2>
              
              <h3 className="text-2xl font-semibold text-foreground mb-4">Personal Information</h3>
              <ul className="mb-8 space-y-3 text-muted-foreground">
                <li className="flex items-start"><span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span><span><strong className="text-foreground">Account Information</strong>: Email address and name when you register</span></li>
                <li className="flex items-start"><span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span><span><strong className="text-foreground">Health & Wellness Data</strong>: Daily sugar-free status, mood tracking, craving levels, and personal notes</span></li>
                <li className="flex items-start"><span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span><span><strong className="text-foreground">Food Tracking Data</strong>: Food entries, sugar content information, and food photos you choose to upload</span></li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-4">Automatically Collected Information</h3>
              <ul className="mb-8 space-y-3 text-muted-foreground">
                <li className="flex items-start"><span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span><span><strong className="text-foreground">Usage Data</strong>: App usage patterns and feature interactions</span></li>
                <li className="flex items-start"><span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span><span><strong className="text-foreground">Device Information</strong>: Device type, operating system, and app version</span></li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mb-6">How We Use Your Information</h2>
              <ul className="mb-8 space-y-3 text-muted-foreground">
                <li className="flex items-start"><span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span><span><strong className="text-foreground">Core Functionality</strong>: Track your sugar-free journey, calculate streaks, and provide personalized insights</span></li>
                <li className="flex items-start"><span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span><span><strong className="text-foreground">Data Storage</strong>: Securely store your progress and allow data synchronization across devices</span></li>
                <li className="flex items-start"><span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span><span><strong className="text-foreground">App Improvement</strong>: Analyze usage patterns to improve app features and user experience</span></li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mb-6">Information Sharing</h2>
              <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 mb-8">
                <p className="text-foreground font-medium text-lg">
                  <strong>We do not sell, trade, or share your personal information with third parties.</strong> Your health and wellness data remains private and is used solely for providing the NoSugr service.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-6">Data Security</h2>
              <ul className="mb-8 space-y-3 text-muted-foreground">
                <li className="flex items-start"><span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span><span>All data is transmitted using industry-standard encryption (HTTPS/TLS)</span></li>
                <li className="flex items-start"><span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span><span>Passwords are securely hashed and never stored in plain text</span></li>
                <li className="flex items-start"><span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span><span>Photos are stored securely on our servers with restricted access</span></li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mb-6">Your Rights</h2>
              <ul className="mb-8 space-y-3 text-muted-foreground">
                <li className="flex items-start"><span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span><span><strong className="text-foreground">Access</strong>: View all personal data we have about you</span></li>
                <li className="flex items-start"><span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span><span><strong className="text-foreground">Correction</strong>: Update or correct your information at any time</span></li>
                <li className="flex items-start"><span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span><span><strong className="text-foreground">Deletion</strong>: Request deletion of your account and all associated data</span></li>
                <li className="flex items-start"><span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span><span><strong className="text-foreground">Export</strong>: Download your data in a portable format</span></li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mb-6">Data Retention</h2>
              <ul className="mb-8 space-y-3 text-muted-foreground">
                <li className="flex items-start"><span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span><span>Account data is retained while your account is active</span></li>
                <li className="flex items-start"><span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span><span>Upon account deletion, all personal data is permanently removed within 30 days</span></li>
                <li className="flex items-start"><span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span><span>Anonymous usage statistics may be retained for service improvement</span></li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mb-6">Children&apos;s Privacy</h2>
              <p className="mb-8 text-muted-foreground text-lg leading-relaxed">
                NoSugr is not intended for children under 13. We do not knowingly collect personal information from children under 13.
              </p>

              <h2 className="text-3xl font-bold text-foreground mb-6">Changes to Privacy Policy</h2>
              <p className="mb-8 text-muted-foreground text-lg leading-relaxed">
                We will notify users of any material changes to this privacy policy through the app or via email.
              </p>

              <h2 className="text-3xl font-bold text-foreground mb-6">Contact Us</h2>
              <div className="bg-card/50 border border-border/30 rounded-2xl p-8">
                <p className="mb-4 text-muted-foreground text-lg">For privacy-related questions or requests:</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span><span className="text-foreground"><strong>Email</strong>: privacy@nosugr.app</span></li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span><span className="text-foreground"><strong>Subject</strong>: Privacy Inquiry - NoSugr App</span></li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  This policy applies to the NoSugr mobile application and related services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}