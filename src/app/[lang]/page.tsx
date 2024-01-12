'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Setup from '@/sections/setup';
import HomeContent from '@/sections/home-content';
import About from '@/sections/about';
import Projects from '@/sections/projects';
import {ParamsProps} from '@/domain/common/params-props';

export default function Home({params}: ParamsProps) {
  return (
    <div className="container">
      <Navbar params={params} />
      <div className="children" id="home">
        <HomeContent params={params} />
        <About params={params} />
        <Projects params={params} />
        <Setup params={params} />
      </div>
      <Footer params={params} />
    </div>
  );
}
