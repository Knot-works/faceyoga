import { Button } from '../ui';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
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

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32">
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

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-light opacity-0 animate-fade-in stagger-4">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-text-light to-transparent" />
        </div>
      </div>
    </section>
  );
}
