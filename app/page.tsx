export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-bold text-gray-900">
        SmartFlow
      </h1>

      <p className="mt-6 text-2xl text-gray-600">
        AI Employee for Small Businesses
      </p>

      <p className="mt-4 max-w-2xl text-gray-500">
        Never miss a customer again.
        Reply faster.
        Follow up automatically.
        Grow your business with AI.
      </p>

      <button className="mt-10 rounded-xl bg-black px-8 py-4 text-white hover:bg-gray-800">
        Get Started
      </button>
    </main>
  );
}