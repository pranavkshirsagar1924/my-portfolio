"use client";

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 text-black">
      {/* Top Identity */}
      <div className="space-y-1 mb-10">
        <p className="text-xl font-medium text-[#019d90]">
          React + Next.js Web Developer
        </p>
      </div>

      {/* Summary */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-3 border-l-4 border-[#019d90] pl-3">SUMMARY</h2>
        <p className="text-gray-800 leading-relaxed">
          Frontend-focused React + Next.js developer with hands-on experience delivering
          30+ international client projects with consistent 5-star ratings. Skilled in
          performance-oriented UI development, scalable web architectures, and API
          integrations.
        </p>
      </div>

      {/* Experience */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-3 border-l-4 border-[#019d90] pl-3">EXPERIENCE</h2>

        <div className="space-y-1 mb-3">
          <h3 className="font-semibold">Web Developer — Fiverr</h3>
          <p className="text-sm text-gray-600">2022–2025</p>
        </div>

        <ul className="list-disc ml-5 text-gray-800 space-y-2">
          <li>Delivered 30+ custom web projects for clients in the US, UK, and Israel.</li>
          <li>Developed responsive UIs using React & Next.js, improving performance by ~40%.</li>
          <li>Built serverless features using AWS Lambda, API Gateway, S3, and CloudFront.</li>
          <li>Automated data workflows reducing manual workload by ~70%.</li>
          <li>Created dashboards and real-time analytics systems with modern frontend engineering.</li>
        </ul>
      </div>

      {/* Client Reviews */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-3 border-l-4 border-[#019d90] pl-3">CLIENT REVIEWS</h2>
        <div className="space-y-6">
          <div>
            <p className="font-semibold">@rinconfnunes — United Kingdom | Fiverr Score: 5.0</p>
            <p className="italic text-gray-700">
              “Pranav is a great freelancer to work with. He supported me with a Lambda solution
              and resolved problems promptly. I’ll surely work with him again.”
            </p>
          </div>
          <div>
            <p className="font-semibold">@bolinger — Israel | Fiverr Score: 5.0</p>
            <p className="italic text-gray-700">
              “Pranav did a very good job helping me with another project. Highly recommended.
              I always work with him again when needed.”
            </p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-3 border-l-4 border-[#019d90] pl-3">SKILLS</h2>
        <ul className="grid grid-cols-2 gap-y-2 text-gray-800">
          <li>React.js</li>
          <li>Next.js</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>AWS (Lambda, Gateway, S3, CloudFront)</li>
          <li>Vercel</li>
          <li>Git</li>
          <li>Ownership & Execution</li>
        </ul>
      </div>

      {/* Education */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-3 border-l-4 border-[#019d90] pl-3">EDUCATION</h2>
        <p className="flex flex-col text-gray-800">
          <span className="font-semibold">Bachelor of Computer Science (BCS)</span>
          <span>Deogiri College Of Science | 2022–2025</span>
        </p>
      </div>
    </section>
  );
}
