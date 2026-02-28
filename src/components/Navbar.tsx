"use client";

import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";

type NavbarUser = {
  id?: string;
  email?: string;
  avatar?: string;
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<NavbarUser | null>(() => {
    if (typeof window === "undefined") return null;

    const storedUser = localStorage.getItem("user");
    return storedUser ? (JSON.parse(storedUser) as NavbarUser) : null;
  });

  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const handleLogout = async () => {
  try { 
    await axios.post(
      `${backendUrl}/api/auth/logout`,
      {},
  { 
        withCredentials: true,
      }
    );
  } catch (err) {
    // even if backend fails, still clear local state
    console.error("Logout failed", err);
  } finally {
    localStorage.removeItem("user");
    setUser(null);
    router.push("/login");
  }
};

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/opportunities", label: "Opportunities" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="w-full border-b border-[#eaf3e7] bg-gray-100">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center h-full pl-4 gap-2">
          <Link href="/" className="h-full flex items-center">
            <Image
              src="/grow-logo.svg"
              alt="Grow logo"
              width={178}
              height={178}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              className="text-lg hover:text-primary font-semibold transition-colors"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Desktop auth / user section */}
          {!user ? (
            <>
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
            </>
          ) : (
            <div className="hidden md:flex items-center gap-4">
              {/* Avatar */}
              {user?.avatar ? (
                <Image
                  src={user.avatar}
                  alt="User avatar"
                  width={36}
                  height={36}
                  className="rounded-full object-cover"
                />
              ) : (
                <FaUserCircle className="text-2xl text-primary" />
              )}

              <Link
                href="/dashboard"
                className="text-sm font-semibold hover:text-primary"
              >
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="text-sm font-semibold text-red-500 hover:text-red-600"
              >
                Logout
              </button>
            </div>
          )}

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:text-primary transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <span className="text-primary w-10 h-10 font-semibold text-3xl flex items-center justify-center">
                X
              </span>
            ) : (
              <IoMdMenu className="w-10 h-10 text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={closeMenu}
          />

          {/* Menu Panel */}
          <div className="fixed w-full right-0 top-20 bg-gray-100 shadow-lg z-50 animate-slideIn">
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

              {/* Mobile auth / user section */}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-300">
                {!user ? (
                  <>
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
                  </>
                ) : (
                  <>
                    <Link
                      href="/dashboard"
                      onClick={closeMenu}
                      className="flex h-12 items-center justify-center rounded-xl bg-primary/10 text-base font-semibold text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      Go to dashboard
                    </Link>

                    <button
                      onClick={() => {
                        handleLogout();
                        closeMenu();
                      }}
                      className="flex h-12 items-center justify-center rounded-xl bg-red-100 text-base font-semibold text-red-600 hover:bg-red-200 transition-colors"
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}