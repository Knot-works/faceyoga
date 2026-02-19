import { Section, SectionHeader } from '../layout';

export function About() {
  return (
    <Section id="about" background="warm">
      <SectionHeader title="私について" subtitle="置田 幸恵 / Yukie Okita" />

      <div className="grid lg:grid-cols-[40fr_60fr] gap-12 lg:gap-20 items-start">
        {/* Profile Card */}
        <div className="relative">
          <div className="sticky top-32">
            {/* Profile image placeholder */}
            <div className="relative aspect-[4/5] max-w-sm mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-tl-[80px] rounded-br-[80px] transform -rotate-3" />
              <div className="absolute inset-0 bg-surface rounded-tl-[70px] rounded-br-[70px] shadow-medium flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-accent/30 flex items-center justify-center">
                    <span className="text-3xl text-primary font-heading">Y</span>
                  </div>
                  <h3 className="font-heading text-xl text-primary mb-2">
                    置田 幸恵
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Face Yoga Method
                    <br />
                    国際認定講師
                  </p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-text-light text-xs">
                      チェンマイ式
                      <br />
                      タイマッサージセラピスト
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Story */}
        <div className="space-y-8 text-text-muted leading-loose">
          <div className="bg-surface rounded-2xl p-8 shadow-soft">
            <p>
              私は、生まれたときから首に横ジワがありました。
              母は「へその緒が絡まっていたからよ」と言ってくれましたが、
              今思えば、あれは母なりの優しさだったのだと思います。
            </p>
          </div>

          <p>
            紫外線ケアを知らず、
            ニュージーランドで3年間、日焼け止めも塗らずに過ごし、
            顔と首は別物だと勘違いしたまま50代へ。
          </p>

          <p>
            歯の噛み合わせ（切端咬合）の影響で
            40年以上、片側噛みの習慣。
            寝るときはいつも左下。
          </p>

          <p>
            話すときは大きな筋肉を使い、
            目はだんだん開かなくなり、
            むくみもひどくなっていきました。
          </p>

          <div className="bg-accent/10 rounded-2xl p-8 border-l-4 border-accent">
            <p className="text-primary font-medium mb-4">
              転機は、娘の一言。
            </p>
            <p className="text-xl font-heading text-primary">
              「どうしてママは、
              <br />
              友達のママみたいに若くないの？」
            </p>
          </div>

          <p>
            そして、母を亡くし、父の介護が始まり、
            外見に無頓着になっていた自分に
            写真撮影で現実を突きつけられました。
          </p>

          <p>
            55歳で、「考えるだけでは変わらない」と
            フェイスヨガの認定講師コースを受講。
          </p>

          <div className="bg-surface rounded-2xl p-8 shadow-soft">
            <p className="text-lg text-primary font-medium mb-4">
              学んだのは、テクニック以上に
            </p>
            <p className="text-xl font-heading text-primary">
              顔は"習慣でできている"という事実
            </p>
          </div>

          <p>
            むくみは、リンパケアで比較的早く変わる。
            でも、ほうれい線・目の大きさ・顎のたるみは
            長年の習慣の積み重ね。
          </p>

          <div className="pt-4">
            <p className="text-lg text-primary">
              だから私は、ポーズよりも
            </p>
            <p className="text-2xl font-heading text-primary mt-2">
              「気づき」から入るフェイスヨガ
            </p>
            <p className="mt-4">をお伝えしています。</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
