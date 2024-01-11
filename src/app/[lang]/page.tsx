'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import {Tools} from '@/pages/tools';
import HomeContent from '@/pages/home-content';
import About from '@/pages/about';
import Projects from '@/pages/projects';
import {Locale} from '@/infra/translate/i18n';
import {ParamsProps} from '@/domain/common/params-props';

export default function Home({params}: ParamsProps) {
  return (
    <div className="container">
      <Navbar params={params} />
      <div className="children" id="home">
        <HomeContent params={params} />
        <About params={params} />
        <Projects params={params} />
        <Tools params={params} />
      </div>
      <Footer params={params} />
    </div>
  );
}
