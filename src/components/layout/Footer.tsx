import {
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaInstagram,
  FaSeedling,
} from "react-icons/fa6";

const socials = [
  { Icon: FaFacebookF, href: "#" },
  { Icon: FaYoutube, href: "#" },
  { Icon: FaWhatsapp, href: "#" },
  { Icon: FaInstagram, href: "#" },
];

export function Footer() {
  return (
    <footer className="py-15 border-t border-glass-border mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2.5 font-display text-2xl font-bold text-text mb-3">
            <FaSeedling className="text-accent" />
            <span>AgroGrow</span>
          </div>
          <p className="text-text-dim text-sm mb-5">
            Empowering Indian Agriculture Digitally. Jai Jawan, Jai Kisan.
          </p>
          <div className="flex justify-center gap-3.5">
            {socials.map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                aria-label="social"
                className="w-10 h-10 rounded-full border border-glass-border flex items-center justify-center text-text-dim hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all duration-300 hover:shadow-[0_4px_15px_rgba(245,158,11,0.2)]"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
        <div className="text-center pt-6 border-t border-glass-border">
          <p className="text-xs text-text-dim">
            &copy; 2024 AgroGrow. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
