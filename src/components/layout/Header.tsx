import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'トップ', href: '#home' },
  { id: 'about', label: '私について', href: '#about' },
  { id: 'faceyoga', label: 'フェイスヨガとは', href: '#faceyoga' },
  { id: 'programs', label: 'プログラム', href: '#programs' },
  { id: 'flow', label: '参加の流れ', href: '#flow' },
  { id: 'faq', label: 'よくある質問', href: '#faq' },
  { id: 'contact', label: 'お問い合わせ', href: '#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-surface/95 backdrop-blur-sm shadow-soft py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="font-heading text-xl md:text-2xl text-primary tracking-wider"
          >
            Face Yoga
            <span className="block text-xs text-text-muted font-body font-light tracking-widest">
              by Yukie Okita
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-sm text-text-muted hover:text-primary transition-colors duration-300 tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <a
            href="#contact"
            className="hidden lg:inline-flex px-6 py-2.5 bg-primary text-surface text-sm rounded-lg hover:bg-secondary transition-colors duration-300 tracking-wide"
          >
            お申込み
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-primary"
            aria-label="メニュー"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-surface shadow-medium transition-all duration-500 ${
          isMobileMenuOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-4'
        }`}
      >
        <nav className="px-6 py-8 space-y-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-text-muted hover:text-primary transition-colors duration-300 tracking-wide"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="inline-block px-6 py-3 bg-primary text-surface text-sm rounded-lg hover:bg-secondary transition-colors duration-300 tracking-wide"
          >
            お申込み
          </a>
        </nav>
      </div>
    </header>
  );
}
