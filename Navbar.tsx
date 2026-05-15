"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // Deteksi scroll untuk mengubah style navbar secara dinamis
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Tax", href: "/tax" },
    { name: "Services", href: "/services" },
    { name: "Officers", href: "/officers" },
    { name: "Reports", href: "/reports" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "border-b border-slate-200/60 bg-white/90 py-3 backdrop-blur-xl shadow-sm" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">

        {/* Logo Section */}
        <Link href="/" className="group flex flex-col">
          <h1 className="text-2xl font-black tracking-tighter text-slate-900 lg:text-3xl">
            Smart Core
            <span className="text-cyan-500 transition-colors group-hover:text-cyan-600">
              {" "}Pajak
            </span>
          </h1>
          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 transition-colors group-hover:text-cyan-500">
            Digital Tax Administration
          </p>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative rounded-xl px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                isActive(link.href)
                  ? "text-cyan-600"
                  : "text-slate-600 hover:text-cyan-600"
              }`}
            >
              {link.name}
              {/* Active Indicator Line */}
              {isActive(link.href) && (
                <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-cyan-500"></span>
              )}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <div className="hidden h-8 w-[1px] bg-slate-200 sm:block"></div> {/* Divider */}
          
          <Link
            href="/login"
            className="hidden text-sm font-black uppercase tracking-widest text-slate-600 transition hover:text-cyan-600 sm:block"
          >
            Sign In
          </Link>

          <Link
            href="/register"
            className="rounded-2xl bg-slate-950 px-7 py-3.5 text-xs font-black uppercase tracking-widest text-white shadow-xl shadow-slate-900/10 transition-all hover:bg-cyan-500 hover:text-slate-950 hover:-translate-y-0.5 active:scale-95"
          >
            Get Started
          </Link>

          {/* Mobile Menu Trigger */}
          <button className="group flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:border-cyan-500 lg:hidden">
            <span className="h-0.5 w-5 rounded-full bg-slate-600 transition-all group-hover:bg-cyan-500"></span>
            <span className="h-0.5 w-5 rounded-full bg-slate-600 transition-all group-hover:bg-cyan-500"></span>
            <span className="h-0.5 w-3 rounded-full bg-slate-600 transition-all group-hover:bg-cyan-500"></span>
          </button>
        </div>
      </div>
    </header>
  );
}