"use client";

export default function ServicesPage() {
  return (
    <section className="max-w-6xl mx-auto bg-white px-6 py-20 text-black">

      {/* Title */}
      <div className="mb-14 text-center">
        <h1 className="text-4xl font-extrabold mb-3">Services</h1>
        <p className="text-gray-600">
          High-quality web solutions built for performance, scale, and business value.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Service 1 */}
        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-xl hover:scale-[1.03] transition-all">
          <h2 className="text-xl font-bold text-[#019d90] mb-3">
            Web App Development
          </h2>
          <p className="text-gray-700">
            Modern and scalable web applications with React & Next.js — focused on clean UI,
            fast performance, and business-driven features.
          </p>
        </div>

        {/* Service 2 */}
        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-xl hover:scale-[1.03] transition-all">
          <h2 className="text-xl font-bold text-[#019d90] mb-3">
            Serverless Architecture
          </h2>
          <p className="text-gray-700">
            AWS Lambda, API Gateway, S3 & CloudFront-driven backend systems — reliable,
            secure and cost-efficient.
          </p>
        </div>

        {/* Service 3 */}
        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-xl hover:scale-[1.03] transition-all">
          <h2 className="text-xl font-bold text-[#019d90] mb-3">
            Performance Optimization
          </h2>
          <p className="text-gray-700">
            Improve loading speeds, Core Web Vitals, and responsiveness — proven ~40%
            performance boost on shipped dashboards.
          </p>
        </div>

        {/* Service 4 */}
        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-xl hover:scale-[1.03] transition-all">
          <h2 className="text-xl font-bold text-[#019d90] mb-3">
            Dashboards & Analytics
          </h2>
          <p className="text-gray-700">
            Data-driven interfaces with clean UX and real-time updates — turning metrics
            into actionable insights.
          </p>
        </div>

        {/* Service 5 */}
        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-xl hover:scale-[1.03] transition-all">
          <h2 className="text-xl font-bold text-[#019d90] mb-3">
            Portfolio & Business Sites
          </h2>
          <p className="text-gray-700">
            Landing pages and portfolio websites designed to convert — strong visuals,
            fast SEO-friendly builds.
          </p>
        </div>

        {/* Service 6 */}
        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-xl hover:scale-[1.03] transition-all">
          <h2 className="text-xl font-bold text-[#019d90] mb-3">
            API Integration & Automation
          </h2>
          <p className="text-gray-700">
            Connect apps with external systems and automate workflows — reducing manual
            effort by up to ~70%.
          </p>
        </div>
      </div>

    </section>
  );
}
