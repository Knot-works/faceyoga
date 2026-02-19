export function Footer() {
  return (
    <footer className="bg-primary text-surface-warm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl text-surface mb-4">
              Face Yoga
            </h3>
            <p className="text-sm text-surface-warm/80 leading-relaxed">
              50代からのフェイスヨガ
              <br />
              習慣に気づき、顔と心を整える
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg text-surface mb-4">
              メニュー
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'トップ', href: '#home' },
                { label: '私について', href: '#about' },
                { label: 'フェイスヨガとは', href: '#faceyoga' },
                { label: 'プログラム', href: '#programs' },
                { label: 'よくある質問', href: '#faq' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-surface-warm/80 hover:text-surface transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg text-surface mb-4">
              お問い合わせ
            </h4>
            <div className="space-y-4 text-sm text-surface-warm/80">
              <p>
                ご質問やお申込みはお気軽にどうぞ
              </p>
              <a
                href="#contact"
                className="inline-block px-6 py-3 border border-surface-warm/40 rounded-lg hover:bg-surface/10 transition-colors duration-300"
              >
                お問い合わせフォーム
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-surface-warm/20" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-surface-warm/60">
          <p>
            &copy; {new Date().getFullYear()} Face Yoga by Yukie Okita. All
            rights reserved.
          </p>
          <p className="text-xs">
            Face Yoga Method 国際認定講師
          </p>
        </div>
      </div>
    </footer>
  );
}
