'use client';

import HomeContent from '@/sections/home';
import {ParamsProps} from '@/domain/common/params-props';
import {ProjectSection} from '@/sections/project-section';
import {projectMockEn} from '@/domain/projects/projects-mock-en';
import {projectMock} from '@/domain/projects/projects-mock';

export default function Project({params}: ParamsProps) {
  const item = params.lang === 'en' ? projectMockEn : projectMock;
  const project = params.project === 'vconnect' ? item[0] : item[1];

  return (
    <div className="container">
      <div className="leftContainer">
        <HomeContent params={params} />
      </div>
      <div className="rightContainer">
        <ProjectSection {...project} />
      </div>
    </div>
  );
}
