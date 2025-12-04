"use client";

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto bg-white px-6 py-20 text-black">

      {/* Title */}
      <div className="mb-14 text-center">
        <h1 className="text-4xl font-extrabold mb-3">Projects</h1>
        <p className="text-gray-600">
          Selected work showcasing performance, UI engineering, and real-world problem solving.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Project 1 */}
        <div className="group p-6 rounded-lg border border-gray-200 bg-white hover:shadow-2xl hover:-translate-y-2 transition-all">
          <h2 className="text-xl font-bold text-[#019d90] mb-3">
            Next.js Performance Dashboard
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Optimized UI with serverless integrations resulting in ~40% faster
            performance. Built with React + Next.js + AWS.
          </p>
          <div className="mt-5">
            <button className="px-4 py-2 border border-[#019d90] text-[#019d90] rounded-md text-sm hover:bg-[#019d90] hover:text-black transition-all">
              View Details
            </button>
          </div>
        </div>

        {/* Project 2 */}
        <div className="group p-6 rounded-lg border border-gray-200 bg-white hover:shadow-2xl hover:-translate-y-2 transition-all">
          <h2 className="text-xl font-bold text-[#019d90] mb-3">
            Audibo – Speech Emotion Detector
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Frontend UI for ML system detecting emotional tones in speech
            with ~85% accuracy. Fast UX for real-time classification.
          </p>
          <div className="mt-5">
            <button className="px-4 py-2 border border-[#019d90] text-[#019d90] rounded-md text-sm hover:bg-[#019d90] hover:text-black transition-all">
              View Details
            </button>
          </div>
        </div>

        {/* Project 3 */}
        <div className="group p-6 rounded-lg border border-gray-200 bg-white hover:shadow-2xl hover:-translate-y-2 transition-all">
          <h2 className="text-xl font-bold text-[#019d90] mb-3">
            What The Fun – NSFW Classifier UI
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Web interface for NLP-powered inappropriate content detection.
            Enhanced safety checks with sharp UX.
          </p>
          <div className="mt-5">
            <button className="px-4 py-2 border border-[#019d90] text-[#019d90] rounded-md text-sm hover:bg-[#019d90] hover:text-black transition-all">
              View Details
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
