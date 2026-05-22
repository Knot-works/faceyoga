import { Section, SectionHeader } from '../layout';
import { Mail, MessageCircle, Send } from 'lucide-react';

export function Contact() {
  return (
    <Section id="contact" background="white">
      <SectionHeader
        title="お申込み・お問い合わせ"
        subtitle="お気軽にご連絡ください"
      />

      <div className="max-w-5xl mx-auto">
        {/* 比率もフォーム側を広くするため、グリッドの比率を [60fr_40fr] に反転させています */}
        <div className="grid lg:grid-cols-[60fr_40fr] gap-12 lg:gap-16">
          
          {/* 1. 【前に移動】Contact form (Google Form リンクへの差し替え) */}
          <div className="bg-surface-warm rounded-2xl p-8 md:p-10 flex flex-col justify-center items-center text-center">
            <h3 className="font-heading text-xl text-primary mb-4">
              お申し込み、お問い合わせフォーム
            </h3>
            <p className="text-sm text-text-muted mb-8 leading-relaxed">
              フォームでのお問い合わせ・お申し込みは、<br />
              Googleフォームにて受け付けております。<br />
              下記のボタンよりご入力をお願いいたします。
            </p>

            <a
              href="https://forms.gle/7Z5cmafKFC4xiRB38"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-sm inline-flex items-center justify-center bg-accent text-white font-medium h-12 px-6 rounded-lg hover:bg-accent/90 transition-colors duration-300 shadow-sm"
            >
              <Send className="w-5 h-5 mr-2" />
              フォームを開いて入力する
            </a>
          </div>

          {/* 2. 【後ろに移動】Contact options */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-xl text-primary mb-6">
                お問い合わせ方法
              </h3>
              <div className="space-y-4">
                {/* LINE */}
                <a
                  href="https://lin.ee/suH9AhB"
                  target="_blank"
                  rel="noopener noreferrer"
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
                  href="mailto:sachi.realignment@gmail.com"
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
                      sachi.realignment@gmail.com
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

        </div>
      </div>
    </Section>
  );
}