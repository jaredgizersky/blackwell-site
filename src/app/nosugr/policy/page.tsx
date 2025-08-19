import Link from 'next/link';

export default function NoSugrPrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-4xl mx-auto">
            <Link href="/nosugr" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-4">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to NoSugr
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
            <p className="text-gray-600 mt-2">Last updated: August 19, 2025</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="prose prose-gray max-w-none">
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">Personal Information</h3>
              <ul className="mb-6 space-y-2">
                <li><strong>Account Information</strong>: Email address and name when you register</li>
                <li><strong>Health & Wellness Data</strong>: Daily sugar-free status, mood tracking, craving levels, and personal notes</li>
                <li><strong>Food Tracking Data</strong>: Food entries, sugar content information, and food photos you choose to upload</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">Automatically Collected Information</h3>
              <ul className="mb-8 space-y-2">
                <li><strong>Usage Data</strong>: App usage patterns and feature interactions</li>
                <li><strong>Device Information</strong>: Device type, operating system, and app version</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
              <ul className="mb-8 space-y-2">
                <li><strong>Core Functionality</strong>: Track your sugar-free journey, calculate streaks, and provide personalized insights</li>
                <li><strong>Data Storage</strong>: Securely store your progress and allow data synchronization across devices</li>
                <li><strong>App Improvement</strong>: Analyze usage patterns to improve app features and user experience</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing</h2>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-8">
                <p className="text-emerald-800 font-medium">
                  <strong>We do not sell, trade, or share your personal information with third parties.</strong> Your health and wellness data remains private and is used solely for providing the NoSugr service.
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
              <ul className="mb-8 space-y-2">
                <li>All data is transmitted using industry-standard encryption (HTTPS/TLS)</li>
                <li>Passwords are securely hashed and never stored in plain text</li>
                <li>Photos are stored securely on our servers with restricted access</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
              <ul className="mb-8 space-y-2">
                <li><strong>Access</strong>: View all personal data we have about you</li>
                <li><strong>Correction</strong>: Update or correct your information at any time</li>
                <li><strong>Deletion</strong>: Request deletion of your account and all associated data</li>
                <li><strong>Export</strong>: Download your data in a portable format</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Retention</h2>
              <ul className="mb-8 space-y-2">
                <li>Account data is retained while your account is active</li>
                <li>Upon account deletion, all personal data is permanently removed within 30 days</li>
                <li>Anonymous usage statistics may be retained for service improvement</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
              <p className="mb-8">
                NoSugr is not intended for children under 13. We do not knowingly collect personal information from children under 13.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Privacy Policy</h2>
              <p className="mb-8">
                We will notify users of any material changes to this privacy policy through the app or via email.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="mb-2">For privacy-related questions or requests:</p>
                <ul className="space-y-1">
                  <li><strong>Email</strong>: privacy@nosugr.app</li>
                  <li><strong>Subject</strong>: Privacy Inquiry - NoSugr App</li>
                </ul>
                <p className="mt-4 text-sm text-gray-600">
                  This policy applies to the NoSugr mobile application and related services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}