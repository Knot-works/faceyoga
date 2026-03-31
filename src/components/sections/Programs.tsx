import { Section, SectionHeader } from '../layout';

const pdfs = [
  {
    title: 'ポスター①',
    pdf: '/pdf1.pdf',
    image: '/pdf1.jpg',
  },
  {
    title: 'ポスター②',
    pdf: '/pdf2.pdf',
    image: '/pdf2.jpg',
  },
  {
    title: 'ポスター③',
    pdf: '/pdf3.pdf',
    image: '/pdf3.jpg',
  },
  {
    title: 'ポスター④',
    pdf: '/pdf4.pdf',
    image: '/pdf4.jpg',
  },
  
];

export function Programs() {
  return (
    <Section id="programs" background="warm">
      <SectionHeader
        title="資料一覧"
        subtitle="クリックすると詳細をご覧いただけます"
      />

      <div className="space-y-8">
        {/* 1個目（中央） */}
        <div className="max-w-2xl mx-auto">
          <a href={pdfs[0].pdf} target="_blank" rel="noopener noreferrer">
            <img
              src={pdfs[0].image}
              alt={pdfs[0].title}
              className="rounded-2xl shadow-lg hover:opacity-80 transition"
            />
          </a>
        </div>

        {/* 2〜3 */}
        <div className="grid md:grid-cols-2 gap-8">
          {pdfs.slice(1, 3).map((item, index) => (
            <a
              key={index}
              href={item.pdf}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="rounded-2xl shadow-lg hover:opacity-80 transition"
              />
            </a>
          ))}
        </div>

        {/* 4〜5 */}
        <div className="grid md:grid-cols-2 gap-8">
          {pdfs.slice(3, 5).map((item, index) => (
            <a
              key={index}
              href={item.pdf}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="rounded-2xl shadow-lg hover:opacity-80 transition"
              />
            </a>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-text-muted text-sm">
          ※ 画像をクリックするとPDFが開きます
        </p>
      </div>
    </Section>
  );
}