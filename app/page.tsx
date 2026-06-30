export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-8 py-6 border-b">
        <h1 className="text-2xl font-bold">SmartFlow</h1>

        <div className="space-x-8">
          <a href="#" className="hover:text-blue-600">
            Features
          </a>

          <a href="#" className="hover:text-blue-600">
            Pricing
          </a>

          <a href="#" className="hover:text-blue-600">
            About
          </a>
        </div>

        <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800">
          Get Started
        </button>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6">
        <h2 className="text-6xl font-bold text-gray-900">
          AI Employee for Small Businesses
        </h2>

        <p className="mt-8 max-w-2xl text-xl text-gray-600">
          Never miss a customer again.
          <br />
          Reply faster.
          <br />
          Follow up automatically.
          <br />
          Grow your business with AI.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800">
            Get Started
          </button>

          <button className="border px-8 py-4 rounded-xl hover:bg-gray-100">
            Book Demo
          </button>
        </div>
      </section> {/* Features */}
<section className="py-24 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center">
      Why SmartFlow?
    </h2>

    <p className="text-center text-gray-500 mt-4">
      Everything your business needs to automate customer communication.
    </p>

    <div className="grid md:grid-cols-3 gap-8 mt-16">

      <div className="bg-white p-8 rounded-2xl shadow">
        <h3 className="text-2xl font-semibold">
          🤖 AI Chat
        </h3>

        <p className="mt-4 text-gray-600">
          Respond instantly to every customer 24/7.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow">
        <h3 className="text-2xl font-semibold">
          📅 Auto Booking
        </h3>

        <p className="mt-4 text-gray-600">
          Schedule appointments automatically.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow">
        <h3 className="text-2xl font-semibold">
          📈 Analytics
        </h3>

        <p className="mt-4 text-gray-600">
          Track conversations and customer growth.
        </p>
      </div>

    </div>
  </div>
</section> {/* How It Works */}
<section className="py-24">

  <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center">
      How It Works
    </h2>

    <div className="grid md:grid-cols-3 gap-10 mt-16">

      <div className="text-center">
        <div className="text-5xl">1️⃣</div>

        <h3 className="mt-6 text-2xl font-semibold">
          Connect
        </h3>

        <p className="mt-4 text-gray-600">
          Connect WhatsApp, Messenger or your website.
        </p>
      </div>

      <div className="text-center">
        <div className="text-5xl">2️⃣</div>

        <h3 className="mt-6 text-2xl font-semibold">
          Train AI
        </h3>

        <p className="mt-4 text-gray-600">
          Upload FAQs and business information.
        </p>
      </div>

      <div className="text-center">
        <div className="text-5xl">3️⃣</div>

        <h3 className="mt-6 text-2xl font-semibold">
          Grow
        </h3>

        <p className="mt-4 text-gray-600">
          Let SmartFlow reply to customers automatically.
        </p>
      </div>

    </div>

  </div>

</section> {/* Testimonials */}

<section className="py-24 px-8 bg-gray-50">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-5xl font-bold text-center">
      Loved by Businesses
    </h2>

    <p className="text-center text-gray-500 mt-4">
      Hundreds of companies already automate with SmartFlow.
    </p>

    <div className="grid md:grid-cols-3 gap-8 mt-16">

      <div className="bg-white rounded-2xl shadow p-8">
        <p className="text-gray-600">
          "SmartFlow doubled our response speed and helped us
          close more sales."
        </p>

        <div className="mt-6 font-bold">
          Sarah
        </div>

        <div className="text-gray-500">
          Beauty Salon
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow p-8">
        <p className="text-gray-600">
          "Customers now receive replies instantly even when we're
          sleeping."
        </p>

        <div className="mt-6 font-bold">
          Michael
        </div>

        <div className="text-gray-500">
          Restaurant Owner
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow p-8">
        <p className="text-gray-600">
          "Appointments are fully automated. Saved us hours every
          week."
        </p>

        <div className="mt-6 font-bold">
          Emily
        </div>

        <div className="text-gray-500">
          Dental Clinic
        </div>
      </div>

    </div>

  </div>
</section> {/* Pricing */}

<section className="py-24 px-8">

  <div className="max-w-6xl mx-auto">

    <h2 className="text-5xl font-bold text-center">
      Pricing
    </h2>

    <p className="text-center text-gray-500 mt-4">
      Simple pricing. No hidden fees.
    </p>

    <div className="grid md:grid-cols-3 gap-8 mt-16">

      {/* Starter */}

      <div className="border rounded-2xl p-8 text-center">

        <h3 className="text-2xl font-bold">
          Starter
        </h3>

        <div className="text-5xl font-bold mt-6">
          $29
        </div>

        <p className="text-gray-500">
          /month
        </p>

        <ul className="space-y-3 mt-8 text-gray-600">
          <li>✓ AI Chat</li>
          <li>✓ WhatsApp</li>
          <li>✓ Email Support</li>
        </ul>

        <button className="mt-8 w-full bg-black text-white py-3 rounded-xl">
          Choose Plan
        </button>

      </div>

      {/* Pro */}

      <div className="border-2 border-black rounded-2xl p-8 text-center shadow-lg">

        <div className="text-sm font-bold mb-2">
          MOST POPULAR
        </div>

        <h3 className="text-2xl font-bold">
          Pro
        </h3>

        <div className="text-5xl font-bold mt-6">
          $79
        </div>

        <p className="text-gray-500">
          /month
        </p>

        <ul className="space-y-3 mt-8 text-gray-600">
          <li>✓ Everything in Starter</li>
          <li>✓ Auto Booking</li>
          <li>✓ Analytics</li>
          <li>✓ AI Training</li>
        </ul>

        <button className="mt-8 w-full bg-black text-white py-3 rounded-xl">
          Choose Plan
        </button>

      </div>

      {/* Enterprise */}

      <div className="border rounded-2xl p-8 text-center">

        <h3 className="text-2xl font-bold">
          Enterprise
        </h3>

        <div className="text-5xl font-bold mt-6">
          Custom
        </div>

        <p className="text-gray-500">
          Contact Us
        </p>

        <ul className="space-y-3 mt-8 text-gray-600">
          <li>✓ Unlimited AI</li>
          <li>✓ Custom Integrations</li>
          <li>✓ Dedicated Support</li>
        </ul>

        <button className="mt-8 w-full border py-3 rounded-xl">
          Contact Sales
        </button>

      </div>

    </div>

  </div>

</section>{/* Footer */}

<footer className="bg-black text-white py-16 px-8">

  <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">

    <div>
      <h3 className="text-2xl font-bold">
        SmartFlow
      </h3>

      <p className="text-gray-400 mt-4">
        AI Employee for Small Businesses.
      </p>
    </div>

    <div>
      <h4 className="font-bold mb-4">
        Product
      </h4>

      <ul className="space-y-2 text-gray-400">
        <li>Features</li>
        <li>Pricing</li>
        <li>Demo</li>
      </ul>
    </div>

    <div>
      <h4 className="font-bold mb-4">
        Company
      </h4>

      <ul className="space-y-2 text-gray-400">
        <li>About</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </div>

    <div>
      <h4 className="font-bold mb-4">
        Legal
      </h4>

      <ul className="space-y-2 text-gray-400">
        <li>Privacy</li>
        <li>Terms</li>
        <li>Support</li>
      </ul>
    </div>

  </div>

  <div className="text-center text-gray-500 mt-12 border-t border-gray-700 pt-8">
    © 2026 SmartFlow. All rights reserved.
  </div>

</footer>

    </main>
  );
}