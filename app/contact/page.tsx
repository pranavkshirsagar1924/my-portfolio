"use client";

export default function ContactPage() {
  return (
    <section className="max-w-5xl bg-white mx-auto px-6 py-20 text-black">

      {/* Title */}
      <div className="mb-14 text-center">
        <h1 className="text-4xl font-extrabold mb-3">Contact Me</h1>
        <p className="text-gray-600">
          Let’s build something exceptional together — reach out with your idea.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-14">

        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-2xl font-bold text-[#019d90]">
            Want to start a project or hire me?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            I help businesses and founders build fast, scalable web apps.
            Share your project details and I’ll respond within 12 hours.
          </p>

          <ul className="space-y-2 text-gray-800">
            <li>
              <strong>Email:</strong> pranavkshirsagar321@gmail.com
            </li>
            <li>
              <strong>Mobile:</strong> +91-7249624410
            </li>
            <li>
              <strong>Location:</strong> Pune, India
            </li>
          </ul>
        </div>

        {/* Contact Card */}
        <div className="flex-1 p-8 border border-gray-200 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-4">Get In Touch</h3>

          <div className="space-y-4">
            {/* WhatsApp Button */}
            <button
              onClick={() =>
                window.open("https://wa.me/917249624410", "_blank")
              }
              className="w-full px-5 py-3 bg-[#019d90] text-white font-medium rounded-lg hover:scale-105 hover:shadow-[0_0_15px_#019d90] transition-all"
            >
              WhatsApp Me
            </button>

            {/* Email Button */}
            <a
              href="mailto:pranavkshirsagar321@gmail.com"
              className="block text-center w-full px-5 py-3 border-2 border-[#019d90] text-[#019d90] font-medium rounded-lg hover:bg-[#019d90] hover:text-black transition-all"
            >
              Email Me
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
