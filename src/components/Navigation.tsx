"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/process", label: "Process" },
    { href: "/projects", label: "Projects" },
    { href: "/demos", label: "Demos" },
    { href: "/resources", label: "Resources" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gradient-to-r dark:from-sapphire-950 dark:to-amethyst-950 shadow-md border-b border-gray-200 dark:border-sapphire-800 transition-colors backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-ephesis text-shadow bg-gradient-to-r from-blue-600 to-purple-600 dark:from-sapphire-400 dark:to-amethyst-400 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition"
          >
            JGServicesLLC
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition duration-300 ${
                  isActive(link.href)
                    ? "text-blue-600 dark:text-amethyst-400 border-b-2 border-blue-600 dark:border-amethyst-400"
                    : "text-gray-700 dark:text-sapphire-100 hover:text-purple-600 dark:hover:text-amethyst-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <LanguageSelector />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button, Language, and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSelector />
            <ThemeToggle />
            <button
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-2 px-4 rounded-lg transition ${
                  isActive(link.href)
                    ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 font-medium"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
