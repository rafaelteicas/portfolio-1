'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import HomeContent from '../pages/home-content';
import About from '../pages/about';
import Projects from '../pages/projects';

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <div className="children" id="home">
        <HomeContent />
        <About />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}
