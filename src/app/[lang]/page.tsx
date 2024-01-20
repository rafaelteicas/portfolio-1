'use client';

import HomeContent from '@/sections/home';
import About from '@/sections/about';
import Projects from '@/sections/projects';
import {ParamsProps} from '@/domain/common/params-props';
import Skills from '@/sections/skills';
import Setup from '@/sections/tools';

export default function Home({params}: ParamsProps) {
  return (
    <div className="container">
      <div className="leftContainer">
        <HomeContent params={params} />
      </div>
      <div className="rightContainer">
        <About params={params} />
        <Projects params={params} />
        <Setup />
        <Skills />
      </div>
    </div>
  );
}
