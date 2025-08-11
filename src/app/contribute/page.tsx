import Image from 'next/image';
import Link from 'next/link';

export default function ContributePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Support Our Mission
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A small contribution can create BIG impact. Your contribution helps
            us empower communities through education, healthcare, and
            compassion-driven initiatives. Every contribution makes a
            difference.
          </p>
        </div>

        {/* QR Code Section */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
            <span className="text-purple-600 mr-2">📱</span>
            QR Code
          </h2>
          <p className="text-gray-600 mb-4">
            Scan the QR code below to make a quick UPI payment:
          </p>
          <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
            <Image src="/qrcode.png" alt="QR Code" width={300} height={300} />
          </div>
        </div>

        {/* Payment Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* UPI Payment */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="text-green-600 mr-2">💳</span>
              UPI Payment
            </h2>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Account Name
                </label>
                <p className="text-lg font-semibold text-gray-900">
                  GIVINITY FOUNDATION
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  UPI ID
                </label>
                <p className="text-lg font-semibold text-green-600">
                  givinityfoundation@idfcbank
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Merchant ID (MID)
                </label>
                <p className="text-lg font-semibold text-gray-900">
                  MID10240879014
                </p>
              </div>
            </div>
          </div>

          {/* Bank Transfer */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="text-blue-600 mr-2">🏦</span>
              Bank Transfer
            </h2>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Account Name
                </label>
                <p className="text-lg font-semibold text-gray-900">
                  GIVINITY FOUNDATION
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Account Number
                </label>
                <p className="text-lg font-semibold text-gray-900">
                  10240879014
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bank
                </label>
                <p className="text-lg font-semibold text-gray-900">
                  IDFC First Bank
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Branch
                </label>
                <p className="text-lg font-semibold text-gray-900">
                  Lajpat Nagar, New Delhi
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  IFSC Code
                </label>
                <p className="text-lg font-semibold text-gray-900">
                  IDFB0020216
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 mb-8">
          <h3 className="text-xl font-semibold text-blue-900 mb-3">
            💡 How Your Contribution Helps
          </h3>
          <ul className="space-y-2 text-blue-800">
            <li>• Providing quality education to underprivileged children</li>
            <li>• Supporting healthcare initiatives in rural communities</li>
            <li>• Funding skill development programs</li>
            <li>• Enabling community outreach and support</li>
          </ul>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
