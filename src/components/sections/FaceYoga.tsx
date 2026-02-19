import { Section, SectionHeader } from '../layout';
import { Sparkles, Hand, Shield, Heart } from 'lucide-react';

const features = [
  {
    icon: Hand,
    title: '道具不要',
    description: '特別な道具は一切必要ありません。身一つで参加できます。',
  },
  {
    icon: Shield,
    title: '安全・安心',
    description: '強く引っ張りません。副作用はありません。',
  },
  {
    icon: Sparkles,
    title: 'ゆるめ・動かし・整える',
    description: '顔の表情筋を優しくケアするメソッドです。',
  },
  {
    icon: Heart,
    title: '習慣への気づき',
    description: '変化の大きさは、年齢ではなく気づきで決まります。',
  },
];

export function FaceYoga() {
  return (
    <Section id="faceyoga" background="white">
      <SectionHeader
        title="フェイスヨガとは"
        subtitle="顔の表情筋を「ゆるめ・動かし・整える」メソッド"
      />

      <div className="max-w-4xl mx-auto">
        {/* Main description */}
        <div className="text-center mb-16">
          <p className="text-lg text-text-muted leading-loose">
            フェイスヨガは、顔だけを動かすメソッドではありません。
            <br />
            <span className="text-primary font-medium">
              日常の癖、無意識の習慣に気づき、
            </span>
            <br />
            それ以上"下がらない顔"をつくること。
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-background rounded-2xl p-8 transition-all duration-300 hover:shadow-soft hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/30 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-secondary" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Key message */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-accent/20 via-accent-warm/20 to-accent/20 rounded-2xl p-8 md:p-12">
            <p className="text-text-muted mb-4">変化の大きさは</p>
            <p className="text-2xl md:text-3xl font-heading text-primary">
              年齢ではなく、
              <br className="sm:hidden" />
              どれだけ習慣に気づけたか
            </p>
            <p className="text-text-muted mt-4">で決まります。</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
