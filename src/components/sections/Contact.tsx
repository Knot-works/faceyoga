import { useState } from 'react';
import { Section, SectionHeader } from '../layout';
import { Button } from '../ui';
import { Mail, MessageCircle, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    program: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Section id="contact" background="white">
      <SectionHeader
        title="お申込み・お問い合わせ"
        subtitle="お気軽にご連絡ください"
      />

      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-[40fr_60fr] gap-12 lg:gap-16">
          {/* Contact options */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-xl text-primary mb-6">
                お問い合わせ方法
              </h3>
              <div className="space-y-4">
                {/* LINE */}
                <a
                  href="#"
                  className="flex items-center gap-4 p-5 bg-[#06C755]/10 rounded-xl hover:bg-[#06C755]/20 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#06C755] flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-primary group-hover:text-[#06C755] transition-colors duration-300">
                      LINE公式
                    </p>
                    <p className="text-sm text-text-muted">
                      お気軽にメッセージください
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:contact@example.com"
                  className="flex items-center gap-4 p-5 bg-accent/10 rounded-xl hover:bg-accent/20 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-primary group-hover:text-secondary transition-colors duration-300">
                      メール
                    </p>
                    <p className="text-sm text-text-muted">
                      contact@example.com
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Note */}
            <div className="bg-surface-warm rounded-xl p-6">
              <p className="text-sm text-text-muted leading-relaxed">
                お問い合わせいただきましたら、2営業日以内にご返信いたします。
                <br />
                <br />
                まずは1日ワークショップからのご参加をおすすめしています。
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-surface-warm rounded-2xl p-8 md:p-10">
            <h3 className="font-heading text-xl text-primary mb-6">
              お問い合わせフォーム
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text-muted mb-2"
                >
                  お名前 <span className="text-accent-warm">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300"
                  placeholder="山田 花子"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text-muted mb-2"
                >
                  メールアドレス <span className="text-accent-warm">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300"
                  placeholder="example@email.com"
                />
              </div>

              {/* Program */}
              <div>
                <label
                  htmlFor="program"
                  className="block text-sm font-medium text-text-muted mb-2"
                >
                  ご興味のあるプログラム
                </label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 appearance-none cursor-pointer"
                >
                  <option value="">選択してください</option>
                  <option value="workshop">1日ワークショップ</option>
                  <option value="5days">5日間プログラム</option>
                  <option value="14days">14日間プログラム</option>
                  <option value="3months">3か月プログラム</option>
                  <option value="6months">6か月プログラム</option>
                  <option value="other">その他・相談したい</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text-muted mb-2"
                >
                  メッセージ
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 resize-none"
                  placeholder="ご質問やご要望があればお書きください"
                />
              </div>

              {/* Submit */}
              <Button type="submit" size="lg" className="w-full">
                <Send className="w-5 h-5 mr-2" />
                送信する
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}
