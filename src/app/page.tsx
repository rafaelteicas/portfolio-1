'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import HomeContent from '../pages/home-content';
import About from '../pages/about';
import Projects from '../pages/projects';
import {Tools} from '@/pages/tools';

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <div className="children" id="home">
        <HomeContent />
        <About />
        <Projects />
        <Tools />
      </div>
      <Footer />
    </div>
  );
}
