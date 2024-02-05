// components
import About from '@/components/About';
import Hero from '@/components/Hero';
import Work from '@/components/Work';
// import Reviews from '@/components/Reviews';
import Cta from '@/components/Cta';
import TechStack from '@/components/TechStack';

export default function Home() {
  return (
    <main>
      <Hero />
      <TechStack />
      <About />
      <Work />
      {/* <Reviews /> */}
      <Cta />
    </main>
  );
}
