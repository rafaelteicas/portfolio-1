'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Setup from '@/sections/setup';
import HomeContent from '@/sections/home';
import About from '@/sections/about';
import Projects from '@/sections/projects';
import {ParamsProps} from '@/domain/common/params-props';

export default function Home({params}: ParamsProps) {
  return (
    <div className="container">
      <Navbar params={params} />
      <HomeContent params={params} />
      <About params={params} />
      <Projects params={params} />
      <Footer params={params} />
    </div>
  );
}
