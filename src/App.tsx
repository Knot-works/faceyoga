import { Header, Footer } from './components/layout';
import {
  Hero,
  About,
  FaceYoga,
  Programs,
  Flow,
  FAQ,
  Contact,
} from './components/sections';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <FaceYoga />
        <Programs />
        <Flow />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
