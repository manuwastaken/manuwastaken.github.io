import { mySocials } from "../constants";

const Footer = () => {
  return (
    <footer className="c-space py-8 border-t border-white/10 mt-20">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
        <p>© 2026 Abdul Rehman Hasan Syed. All rights reserved.</p>

        <div className="flex items-center gap-4">
          {mySocials.map((social, index) => (
            <a
              href={social.href}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <img src={social.icon} className="size-4 opacity-70 hover:opacity-100" alt={social.name} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;