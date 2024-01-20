import Image from 'next/image';
import Text from '@/components/text';
import {ProjectTypes} from '@/domain/projects/projects-types';
import {ProjectSectionContainer} from './styles/project-section.styles';
import {SkillsCard} from '@/components/skill-card';
import {useState} from 'react';

export function ProjectSection(item: ProjectTypes) {
  const [select, setSelect] = useState<string | null>();
  console.log(select);

  return (
    <ProjectSectionContainer>
      {/* <div
        className=""
        style={{
          height: '30vh',
          position: 'relative',
          aspectRatio: 16 / 9,
        }}>
        <Image src={item.screenshot} fill alt="a" />
      </div> */}
      <Text title>{item.title}</Text>
      <br />
      <Text>{item.description}</Text>
      <br />
      <Text title>Stacks</Text>
      <br />
      <div style={{display: 'flex', flexWrap: 'wrap', gap: 10}}>
        {item.skills.map(skill => (
          <SkillsCard title={skill} key={skill} />
        ))}
      </div>
      <br />
      <Text title>Screenshots</Text>
      <br />
      <div
        style={{
          display: 'flex',
          gap: 10,
        }}>
        {item.screenshot.map(item => (
          <div
            key={item}
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: 0.5,
              border:
                select === item ? '1px solid var(--primary)' : '1px solid gray',
              borderRadius: 10,
            }}>
            <Image
              src={item}
              fill
              alt="Screenshot"
              style={{borderRadius: 10}}
              onClick={() => {
                if (select === item) {
                  setSelect(null);
                }
                setSelect(item);
              }}
            />
          </div>
        ))}
      </div>
      {select && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: 380,
              aspectRatio: 0.5,
            }}>
            <Image src={select} fill alt={select} style={{borderRadius: 10}} />
          </div>
        </div>
      )}
      {item.backend && (
        <>
          <br />
          <Text title>{item.backend.title}</Text>
          <br />
          <div
            dangerouslySetInnerHTML={{
              __html: item.backend.description as string,
            }}
          />
        </>
      )}
    </ProjectSectionContainer>
  );
}
