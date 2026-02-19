import { Section, SectionHeader } from '../layout';
import { ClipboardList, Calendar, Mail, Play } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    title: 'お申込み',
    description: 'フォームまたはLINEからお申込みください',
  },
  {
    icon: Calendar,
    title: '日程調整',
    description: 'ご希望の日時を調整いたします',
  },
  {
    icon: Mail,
    title: '事前案内送付',
    description: 'プログラム開始前に詳細をお送りします',
  },
  {
    icon: Play,
    title: 'プログラム開始',
    description: 'いよいよフェイスヨガをスタート',
  },
];

export function Flow() {
  return (
    <Section id="flow" background="white">
      <SectionHeader
        title="参加までの流れ"
        subtitle="お申込みから始まる4つのステップ"
      />

      <div className="max-w-4xl mx-auto">
        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-12 left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-0.5 bg-gradient-to-r from-accent via-accent-warm to-accent" />

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Step number */}
                <div className="relative z-10 w-14 h-14 mx-auto mb-6 rounded-full bg-surface shadow-soft flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-secondary" />
                  {/* Step number badge */}
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-accent text-surface text-xs font-medium flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-heading text-lg text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-surface rounded-xl hover:bg-secondary transition-colors duration-300 shadow-soft hover:shadow-medium"
          >
            <span className="font-medium tracking-wide">
              お申込み・お問い合わせはこちら
            </span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </Section>
  );
}
