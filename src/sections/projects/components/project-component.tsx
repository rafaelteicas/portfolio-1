'use client';

import {Button} from '@/components/git-button';
import {SkillsCard} from '@/components/skill-card';
import {ProjectTypes} from '../../../domain/projects/projects-types';
import Image from 'next/image';
import Text from '@/components/text';
import {
  ImageContainer,
  ProjectsBox,
  ProjectsSkillsContainer,
  ProjectsTextContainer,
} from '../styles/projects.styles';

const ICON_SIZE = 20;

export default function ProjectComponent(item: ProjectTypes) {
  return (
    <ProjectsBox>
      <ImageContainer
        src={item.screenshot}
        alt={item.screenshot}
        width={200}
        height={400}
      />
      <ProjectsTextContainer>
        <Text title>{item.title}</Text>
        <Text>{item.description}</Text>
        <ProjectsSkillsContainer>
          {item.skills.map(skill => (
            <SkillsCard title={skill} key={skill} />
          ))}
        </ProjectsSkillsContainer>
        <Button
          url={item.gitUrl}
          icon={
            <Image
              src="/icons/github.png"
              width={ICON_SIZE}
              height={ICON_SIZE}
              alt="git"
            />
          }
        />
        {item.backend && (
          <>
            <ProjectsTextContainer>
              <Text title>{item.backend.title}</Text>
              <div
                dangerouslySetInnerHTML={{
                  __html: item.backend?.description as string,
                }}
                style={{
                  opacity: 0.7,
                }}
              />
              <ProjectsSkillsContainer>
                {item.backend?.skills?.map(skill => (
                  <SkillsCard title={skill} key={skill} />
                ))}
              </ProjectsSkillsContainer>
            </ProjectsTextContainer>
            <Button
              url={item.backend.gitUrl ? item.backend.gitUrl : '/'}
              icon={
                <Image
                  src="/icons/github.png"
                  width={ICON_SIZE}
                  height={ICON_SIZE}
                  alt="git"
                />
              }
            />
          </>
        )}
      </ProjectsTextContainer>
    </ProjectsBox>
  );
}
