import Link from "next/link";
import { Globe, Mail, MessageCircle, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <span className="sr-only">Rechargic Gold</span>
              <img src="/logo.png" alt="Rechargic Gold Logo" className="h-10 w-auto brightness-0 invert" />
            </Link>
            <p className="text-sm text-slate-400 mb-6">
              Recharge Today. Own Gold Tomorrow. Build your digital gold portfolio with every payment you make.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Globe className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Share2 className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><MessageCircle className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="hover:text-primary-400 transition-colors">Mobile Recharge</Link></li>
              <li><Link href="#" className="hover:text-primary-400 transition-colors">Electricity Bill</Link></li>
              <li><Link href="#" className="hover:text-primary-400 transition-colors">DTH Connection</Link></li>
              <li><Link href="#" className="hover:text-primary-400 transition-colors">Digital Gold Vault</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary-400 transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-primary-400 transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-primary-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-primary-400 transition-colors">Refund Policy</Link></li>
              <li><Link href="#" className="hover:text-primary-400 transition-colors">Gold KYC Terms</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Rechargic Gold Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
