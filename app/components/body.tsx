"use client";
import { Linkedin, Twitter, X, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Body = () => {
    return (
        <section className="h-full w-full flex flex-col md:flex-row items-center justify-between px-8 py-16 gap-10 bg-white text-black overflow-y-auto">

            {/* Text Section */}
            <div className="flex-1 space-y-6 animate-fadeIn">
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                    Hi, I’m{" "}
                    <span className="text-[#019d90]">
                        Pranav Kshirsagar
                    </span>
                </h1>

                <p className="text-lg text-gray-300">
                    Website Developer Based In Pune
                </p>

                <p className="text-gray-400 max-w-lg">
                    Frontend-focused React + Next.js developer delivering 30+ international
                    client projects with performance-driven UI, scalable architectures,
                    and seamless API integrations.
                </p>

                <div className="flex gap-4 pt-2">
                    <button
                        onClick={() =>
                            window.open("https://wa.me/917249624410", "_blank")
                        }
                        className="px-5 py-3 bg-[#019d90] text-white rounded-lg font-medium hover:bg-opacity-80 hover:shadow-[0_0_20px_#019d90] hover:scale-105 transition-all"
                    >
                        Get In Touch
                    </button>

                    <a
                        href="/PRANAV KSHIRSAGAR ( Web Developer ).pdf"
                        download
                        className="px-5 py-3 border-2 border-[#019d90] text-[#019d90] rounded-lg font-medium hover:bg-[#019d90] hover:text-black transition-colors"
                    >
                        Download CV
                    </a>
                </div>
                <div className="flex flex-row justify-start items-center gap-4 pt-4">
                    <p><b>Find me on</b></p>
                    <div className="flex flex-row">
                        {/* LinkedIn */}
                        <Link
                            href="https://www.linkedin.com/in/pranav-kshirsagar-python-web-developer/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-[#019d90] hover:bg-[#019d90]/10 rounded-md transition-colors"
                        >
                            <Linkedin className="w-6 h-6" />
                        </Link>

                        {/* Twitter/X */}
                        <Link
                            href="https://x.com/peaky_mind"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-[#019d90] hover:bg-[#019d90]/10 rounded-md transition-colors"
                        >
                            <Twitter className="w-6 h-6" />
                        </Link>

                    </div>
                </div>
            </div>

            {/* Image */}
            <div className="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px] animate-fadeInRight group">
                <div className="absolute inset-0 rounded-full bg-[#019d90] blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>

                <div className="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px]">
                    <Image
                        src="/pranav.png"
                        alt="Pranav"
                        fill
                        className="object-cover rounded-full border-[4px] border-black group-hover:scale-105 transition-transform"
                    />
                </div>

            </div>



        </section>
    );
};

export default Body;
