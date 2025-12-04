"use client";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white p-4 text-black overflow-x-auto">
      <nav className="bg-white">
        <ul className="flex gap-6 list-none">
          <li>
            <Link href="/" className="hover:text-[#019d90] transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-[#019d90] transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-[#019d90] transition-colors">
              Services
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-[#019d90] transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-[#019d90] transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
