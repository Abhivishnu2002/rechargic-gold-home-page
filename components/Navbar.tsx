"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 glass border-b border-slate-100/50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        
        {/* Left section: Logo + Links */}
        <div className="flex items-center gap-x-12">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">Rechargic Gold</span>
            <img src="/logo.png" alt="Rechargic Gold Logo" className="h-10 w-auto" />
          </Link>
          <div className="hidden lg:flex lg:gap-x-8">
            <Link href="#features" className="text-sm font-semibold leading-6 text-slate-700 hover:text-primary-500 transition-colors">Features</Link>
            <Link href="#rewards" className="text-sm font-semibold leading-6 text-slate-700 hover:text-primary-500 transition-colors">Rewards</Link>
            <Link href="#vault" className="text-sm font-semibold leading-6 text-slate-700 hover:text-primary-500 transition-colors">Vault</Link>
            <Link href="#download" className="text-sm font-semibold leading-6 text-slate-700 hover:text-primary-500 transition-colors">Download</Link>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex lg:hidden">
          <button 
            type="button" 
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Right section: CTA */}
        <div className="hidden lg:flex lg:justify-end">
          <Link href="#download" className="text-sm font-semibold leading-6 text-white bg-slate-900 hover:bg-slate-800 px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow-md">
            Get App <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-4 sm:max-w-sm sm:ring-1 sm:ring-slate-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Rechargic Gold</span>
                <img src="/logo.png" alt="Rechargic Gold Logo" className="h-8 w-auto" />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-slate-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-slate-100">
                <div className="space-y-2 py-6">
                  <Link href="#features" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50" onClick={() => setMobileMenuOpen(false)}>Features</Link>
                  <Link href="#rewards" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50" onClick={() => setMobileMenuOpen(false)}>Rewards</Link>
                  <Link href="#vault" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50" onClick={() => setMobileMenuOpen(false)}>Vault</Link>
                  <Link href="#download" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50" onClick={() => setMobileMenuOpen(false)}>Download</Link>
                </div>
                <div className="py-6">
                  <Link href="#download" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white bg-slate-900 hover:bg-slate-800 text-center" onClick={() => setMobileMenuOpen(false)}>
                    Get App
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
