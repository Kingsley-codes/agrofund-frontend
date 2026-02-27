"use client";

import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { GiCancel } from "react-icons/gi";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/opportunities", label: "Opportunities" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#eaf3e7] bg-background-light/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-full pl-4 gap-2">
          <Link href="/" className="h-full flex items-center">
            <Image
              src="/grow-logo.svg"
              alt="Grow logo"
              width={178}
              height={178}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              className="text-lg hover:text-primary transition-colors"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden md:flex h-10 items-center justify-center rounded-xl bg-primary/10 px-4 text-sm font-bold text-primary border border-primary hover:bg-primary hover:text-white transition-colors"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="hidden md:flex h-10 items-center justify-center rounded-xl bg-primary px-4 text-sm font-bold text-white hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20 transition-all"
          >
            Sign Up
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:text-primary transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <GiCancel className="w-10 h-10 text-primary hover:cursor-pointer" />
            ) : (
              <IoMdMenu className="w-10 h-10 text-primary hover:cursor-pointer" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50 z-40" onClick={closeMenu} />

          {/* Menu Panel */}
          <div className="absolute left-0 top-full w-full bg-background-light/95 shadow-lg z-50 animate-slideIn">
            <div className="flex flex-col p-4">
              {/* Mobile Nav Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  className="py-3 px-4 text-base font-medium hover:text-primary hover:bg-gray-200 rounded-lg transition-colors"
                  href={link.href}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Auth Buttons */}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-300 dark:border-gray-700">
                <Link
                  href="/login"
                  className="flex h-12 items-center justify-center rounded-xl border-primary border bg-primary/10 text-base font-bold text-primary hover:bg-primary hover:text-white transition-colors"
                  onClick={closeMenu}
                >
                  Log In
                </Link>
                <Link
                  href="/signup"
                  className="flex h-12 items-center justify-center rounded-xl bg-primary text-base font-bold text-white hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20 transition-all"
                  onClick={closeMenu}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
