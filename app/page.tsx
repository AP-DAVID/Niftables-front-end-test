import ComingSoon from '@/features/ComingSoon';
import CreonPass from '@/features/CreonPass';
import Footer from '@/features/Footer';
import Hero from '@/features/Hero';
import Market from '@/features/Market';
import Mission from '@/features/Mission';
import Profiting from '@/features/Profiting';
import '@mantine/carousel/styles.css';
export default function Home() {
  return (
    <main className='bg-black h-screen overflow-y-scroll pb-10'>
      {/* hero */}
      <section id='hero'>
        <Hero />
      </section>

      {/* creonePass */}
      <section id='creonPass'>
        <CreonPass />
      </section>

      {/* Profiting */}
      <section id='profiting'>
        <Profiting />
      </section>

      {/* mission */}
      <section id='mission'>
        <Mission />
      </section>

      {/* comingsoon */}
      <section id='comingsoon'>
        <ComingSoon />
      </section>

      {/* market */}
      <section id='market'>
        <Market />
      </section>

      <footer id='footer'>
        <Footer />
      </footer>
    </main>
  );
}
