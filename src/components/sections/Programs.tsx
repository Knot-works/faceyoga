import { Section, SectionHeader } from '../layout';
import { ProgramCard } from '../ui';

const programs = [
  {
    title: '1日ワークショップ',
    subtitle: '【入口】まずは体験',
    description: 'フェイスヨガの基本を体験できる入門プログラム。正しい姿勢のチェックから始まり、習慣への気づきを促します。',
    price: '¥4,000',
    priceNote: '税込・約90分',
    features: [
      '正しい姿勢チェック',
      '写真撮影（変化に気づくため）',
      '顔の筋肉に触れて確認',
      '初期チェックシート',
      '習慣チェックシート',
      'フェイスヨガ2ポーズ',
    ],
  },
  {
    title: '5日間プログラム',
    subtitle: '【最初の実践】毎日の習慣づくり',
    description: '毎日4ポーズを実践し、表情や癖への個別フィードバックで、日常で気をつけるポイントを明確にします。',
    price: '¥20,000〜',
    priceNote: 'Zoom ¥20,000 / 対面 ¥22,000',
    features: [
      '毎日4ポーズの実践',
      '表情・癖の個別フィードバック',
      '日常で気をつけるポイント提示',
    ],
  },
  {
    title: '14日間プログラム',
    subtitle: '【習慣化】習慣の書き換え',
    description: '1日4ポーズを14日間継続。習慣の書き換えにフォーカスし、表情・姿勢・使い癖を修正していきます。',
    price: '¥38,000',
    priceNote: '税込',
    features: [
      '1日4ポーズ × 14日',
      '習慣の書き換えにフォーカス',
      '表情・姿勢・使い癖の修正',
    ],
    highlighted: true,
  },
  {
    title: '3か月プログラム',
    subtitle: '【本気で変えたい方】根本からの変化',
    description: '習慣の根本修正に取り組み、写真比較・定期チェックで変化を確認。フェイスヨガと生活習慣の両面からアプローチします。',
    price: '¥180,000',
    priceNote: '税込',
    features: [
      '習慣の根本修正',
      '写真比較・定期チェック',
      'フェイスヨガ＋生活習慣指導',
    ],
  },
  {
    title: '6か月プログラム',
    subtitle: '【人生を整える】習慣の定着',
    description: '3か月プログラムを2クール実施。習慣の定着・安定を図り、フェイスヨガが「日常」になります。',
    price: '¥300,000',
    priceNote: '税込',
    features: [
      '3か月プログラムを2クール',
      '習慣の定着・安定',
      'フェイスヨガが「日常」になる',
    ],
  },
];

export function Programs() {
  return (
    <Section id="programs" background="warm">
      <SectionHeader
        title="プログラム一覧"
        subtitle="あなたに合ったプログラムをお選びください"
      />

      {/* Programs grid - asymmetric layout */}
      <div className="space-y-8">
        {/* First row - single card */}
        <div className="max-w-2xl mx-auto">
          <ProgramCard {...programs[0]} />
        </div>

        {/* Second row - two cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <ProgramCard {...programs[1]} />
          <ProgramCard {...programs[2]} />
        </div>

        {/* Third row - two cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <ProgramCard {...programs[3]} />
          <ProgramCard {...programs[4]} />
        </div>
      </div>

      {/* Note */}
      <div className="mt-12 text-center">
        <p className="text-text-muted text-sm">
          ※ プログラムの詳細やご不明点はお気軽にお問い合わせください
        </p>
      </div>
    </Section>
  );
}
