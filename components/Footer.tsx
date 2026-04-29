import Link from "next/link";
import { Globe, Share2, MessageCircle, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background text-muted py-20 border-t border-white/5 relative overflow-hidden">
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-primary-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-12 lg:gap-16">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <span className="sr-only">Rechargic Gold</span>
              <img src="/logo.png" alt="Rechargic Gold Logo" className="h-10 w-auto brightness-0 invert" />
            </Link>
            <p className="text-sm text-muted mb-8 leading-relaxed">
              India’s first platform converting everyday utility payments into pure 24K digital gold. Stop paying. Start earning.
            </p>
            <div className="flex gap-5">
              <a href="#" className="text-muted hover:text-white transition-all bg-white/5 p-2.5 rounded-full hover:bg-white/10 hover:scale-110 hover:-translate-y-1 duration-300">
                <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Globe%20with%20meridians/3D/globe_with_meridians_3d.png" alt="Website" className="w-5 h-5 object-contain" />
              </a>
              <a href="#" className="text-muted hover:text-white transition-all bg-white/5 p-2.5 rounded-full hover:bg-white/10 hover:scale-110 hover:-translate-y-1 duration-300">
                <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Link/3D/link_3d.png" alt="Share" className="w-5 h-5 object-contain" />
              </a>
              <a href="#" className="text-muted hover:text-white transition-all bg-white/5 p-2.5 rounded-full hover:bg-white/10 hover:scale-110 hover:-translate-y-1 duration-300">
                <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Speech%20balloon/3D/speech_balloon_3d.png" alt="Chat" className="w-5 h-5 object-contain" />
              </a>
              <a href="#" className="text-muted hover:text-white transition-all bg-white/5 p-2.5 rounded-full hover:bg-white/10 hover:scale-110 hover:-translate-y-1 duration-300">
                <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/E-mail/3D/e-mail_3d.png" alt="Email" className="w-5 h-5 object-contain" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">Products</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="hover:text-primary-500 transition-colors inline-block">Utility Payments</Link></li>
              <li><Link href="#" className="hover:text-primary-500 transition-colors inline-block">Credit Card Bills</Link></li>
              <li><Link href="#" className="hover:text-primary-500 transition-colors inline-block">Digital Gold Vault</Link></li>
              <li><Link href="#" className="hover:text-primary-500 transition-colors inline-block">Physical Delivery</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="hover:text-primary-500 transition-colors inline-block">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary-500 transition-colors inline-block">Careers <span className="ml-2 inline-flex items-center rounded-full bg-primary-500/10 px-2 py-0.5 text-[10px] font-medium text-primary-500">Hiring</span></Link></li>
              <li><Link href="#" className="hover:text-primary-500 transition-colors inline-block">Investors</Link></li>
              <li><Link href="#" className="hover:text-primary-500 transition-colors inline-block">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="hover:text-primary-500 transition-colors inline-block">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary-500 transition-colors inline-block">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-primary-500 transition-colors inline-block">Refund Policy</Link></li>
              <li><Link href="#" className="hover:text-primary-500 transition-colors inline-block">KYC Guidelines</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Rechargic Gold Inc. All rights reserved.
          </p>
          <p className="text-xs text-muted/60 text-center md:text-right">
            Regulated by RBI guidelines. <br className="md:hidden" />Gold safely vaulted in insured lockers.
          </p>
        </div>
      </div>
    </footer>
  );
}
