import { useState } from 'react';
import { Section, SectionHeader } from '../layout';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: '何歳まで参加できますか？',
    answer:
      '年齢制限はありません。50代以降の方が多く参加されています。筋肉は何歳からでも鍛えることができますので、年齢に関係なくお気軽にご参加ください。',
  },
  {
    question: '変化は必ず出ますか？',
    answer:
      'やり方を間違えなければ、変化は現れます。変化の大きさは、習慣への気づき次第です。長年の習慣を少しずつ修正していくことで、確実に変化を感じていただけます。',
  },
  {
    question: '無理な勧誘はありますか？',
    answer:
      'ありません。選ぶのはご本人です。まずは1日ワークショップで体験していただき、ご自身に合うかどうかをゆっくりご検討ください。',
  },
  {
    question: '対面とオンライン、どちらがおすすめですか？',
    answer:
      'どちらでも効果的にレッスンを受けていただけます。対面では直接姿勢や表情をチェックできるメリットがあり、オンラインでは自宅からリラックスして参加できるメリットがあります。',
  },
  {
    question: 'フェイスヨガはどのくらいの頻度で行えばいいですか？',
    answer:
      '毎日少しずつ続けることが大切です。1日5〜10分程度で十分です。習慣化することで、無理なく続けられるようになります。',
  },
  {
    question: '男性でも参加できますか？',
    answer:
      'もちろん参加可能です。性別に関係なく、表情筋のケアは大切です。お気軽にご相談ください。',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" background="warm">
      <SectionHeader
        title="よくある質問"
        subtitle="お問い合わせの前にご確認ください"
      />

      <div className="max-w-3xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-surface rounded-xl overflow-hidden shadow-soft"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-surface-warm/50 transition-colors duration-300"
              >
                <span className="font-medium text-primary pr-4">
                  Q. {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-secondary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="pt-2 border-t border-border-light">
                    <p className="text-text-muted leading-relaxed pt-4">
                      A. {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional note */}
        <div className="mt-12 text-center">
          <p className="text-text-muted">
            その他ご不明点がございましたら、
            <br className="sm:hidden" />
            お気軽にお問い合わせください。
          </p>
        </div>
      </div>
    </Section>
  );
}
