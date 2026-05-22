import { Section, SectionHeader } from '../layout';

const weddingImage = import.meta.env.BASE_URL + 'wedding.jpg';

const pdfs = [
  {
    title: 'ポスター①',
    pdf: import.meta.env.BASE_URL + 'pdf1.pdf',
    image: import.meta.env.BASE_URL + 'pdf1.jpg',
  },
  {
    title: 'ポスター②',
    pdf: import.meta.env.BASE_URL + 'pdf2.pdf',
    image: import.meta.env.BASE_URL + 'pdf2.jpg',
  },
  {
    title: 'ポスター③',
    pdf: import.meta.env.BASE_URL + 'pdf3.pdf',
    image: import.meta.env.BASE_URL + 'pdf3.jpg',
  },
  {
    title: 'ポスター④',
    pdf: import.meta.env.BASE_URL + 'pdf4.pdf',
    image: import.meta.env.BASE_URL + 'pdf4.jpg',
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
        <div className="max-w-2xl mx-auto">
          <div className="group relative rounded-3xl overflow-hidden shadow-lg bg-surface">
            <img
              src={weddingImage}
              alt="お客様オリジナルプログラム"
              className="mx-auto block max-w-full h-auto transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-6 py-5">
              <p className="text-xs uppercase tracking-[0.3em] text-white/80">
                お客様オリジナルプログラム
              </p>
              <p className="mt-2 text-2xl font-semibold text-white">
                Wedding
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-2xl mx-auto">
          <a href={pdfs[0].pdf} target="_blank" rel="noopener noreferrer">
            <img
              src={pdfs[0].image}
              alt={pdfs[0].title}
              className="rounded-2xl shadow-lg hover:opacity-80 transition"
            />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {pdfs.slice(1, 3).map((item, index) => (
            <a key={index} href={item.pdf} target="_blank" rel="noopener noreferrer">
              <img
                src={item.image}
                alt={item.title}
                className="rounded-2xl shadow-lg hover:opacity-80 transition"
              />
            </a>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {pdfs.slice(3, 5).map((item, index) => (
            <a key={index} href={item.pdf} target="_blank" rel="noopener noreferrer">
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
          ※ 下の資料画像をクリックするとPDFが開きます
        </p>
      </div>
    </Section>
  );
}