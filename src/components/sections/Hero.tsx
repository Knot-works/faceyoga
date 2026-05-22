import { Button } from '../ui';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        {/* Soft gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-surface-warm/50 to-background" />

        {/* Organic blob shapes */}
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-accent/10 blob-shape blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 blob-shape blur-3xl" />

        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235d4a3c' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-16 w-full">
        <div className="grid lg:grid-cols-[55fr_45fr] gap-16 items-center">
          {/* Content */}
          <div className="opacity-0 animate-fade-in-up">
            {/* Label */}
            <span className="inline-block px-4 py-1.5 bg-accent/20 text-secondary text-sm tracking-widest uppercase rounded-full mb-8">
              50代からの変化
            </span>

            {/* Headline */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary leading-tight mb-6">
              若く見せたい、ではなく
              <br />
              <span className="text-accent-warm">若々しく、明るく、</span>
              <br />
              元気に見える自分へ
            </h1>

            {/* Subheading */}
            <p className="text-xl text-text-muted mb-4">
              50代からのフェイスヨガ
            </p>
            <p className="text-lg text-text-light mb-10">
              ― 習慣に気づき、顔と心を整える ―
            </p>

            {/* Lead text */}
            <div className="text-text-muted leading-loose mb-10 max-w-lg space-y-4">
              <p>
                年齢は変えられません。
                <br />
                重力にも逆らえません。
              </p>
              <p>
                でも、筋肉には
                <br />
                「元の位置に戻ろうとする力」があります。
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Button href="#programs" size="lg">
                プログラムを見る
              </Button>
              <Button href="#about" variant="outline" size="lg">
                私について
              </Button>
            </div>
          </div>

          {/* Visual element */}
          <div className="relative hidden lg:block opacity-0 animate-fade-in stagger-2">
            {/* Main decorative frame */}
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              {/* Background shape */}
              <div className="absolute inset-4 bg-gradient-to-br from-accent/30 to-accent-warm/30 rounded-[60px_20px_60px_20px] transform rotate-3" />

              {/* Placeholder for image */}
              <div className="absolute inset-0 bg-surface rounded-[50px_30px_50px_30px] shadow-large flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent/40 to-accent-warm/40 flex items-center justify-center">
                    <span className="text-4xl text-primary font-heading">
                      顔
                    </span>
                  </div>
                  <p className="text-text-muted text-sm">
                    Face Yoga Method
                    <br />
                    国際認定講師
                  </p>
                </div>
              </div>

              {/* Decorative dots */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent rounded-full opacity-60" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-secondary rounded-full opacity-40" />
              <div className="absolute top-1/2 -right-6 w-4 h-4 bg-accent-warm rounded-full opacity-50" />
            </div>
          </div>
        </div>
      </div>

      {/* 🔴 追加：【特別出店】イベント情報ブロック */}
      <div className="max-w-4xl mx-auto px-6 w-full mb-20 opacity-0 animate-fade-in stagger-3">
        <div className="bg-surface-warm/80 backdrop-blur-sm border border-accent/20 rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
            初出店のお知らせ
          </div>
          <h2 className="text-xl md:text-2xl font-heading text-primary mb-4">
            木更津市開催【健康イベント ハピくるマルシェ】に初出店いたします！
          </h2>
          <div className="text-sm text-text-muted leading-relaxed mb-6 space-y-3">
            <p>
              実は、お顔の筋肉も体とまったく同じ。使わないとたるみ、使いすぎると凝り固まります。<br />
              今回のイベントでは、そんなお顔の筋肉を <strong>①心地よく【緩めて】 ②正しく【鍛える】 ③元の位置へ戻すトレーニング</strong> をお伝えします！
            </p>
            <p>
              一度覚えれば、お家でずっと続けられる「一生モノのセルフメンテ術」です。目指すのは、久しぶりに会ったお友達から「最近なんかした？」「綺麗になったね！」なんて言われちゃうような嬉しい変化。
            </p>
            <p>
              「私の顔でも変わるのかな…」そんな不安も大丈夫です。優しく丁寧に、あなたと二人三脚で「変化」を作っていくセラピスト・サチが、木更津の会場で温かくお待ちしております。
            </p>
          </div>
          
          {/* 日時・場所のリスト */}
          <div className="bg-white/80 p-4 rounded-xl space-y-2 text-sm border border-border text-primary">
            <p className="flex flex-wrap"><span className="font-bold w-16 inline-block">📅 日時</span> <span>2026年5月23日 金曜日 10:00 〜 17:00 (最終受付16:30)</span></p>
            <p className="flex flex-wrap"><span className="font-bold w-16 inline-block">📍 場所</span> <span>木更津市中央1-4-6 ハマダヤセンタービル2階（ハピくるマルシェ）</span></p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-light opacity-0 animate-fade-in stagger-4 hidden md:flex">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-6 bg-gradient-to-b from-text-light to-transparent" />
      </div>
    </section>
  );
}