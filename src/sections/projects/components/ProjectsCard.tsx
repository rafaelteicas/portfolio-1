import {Card} from '@/components/card';
import Text from '@/components/text';
import Image from 'next/image';
import {ProjectsImageContainer} from '../styles/projects.styles';
import {ProjectTypes} from '@/domain/projects/projects-types';

type Props = {
  onClick: () => void;
  item: ProjectTypes;
};

export default function ProjectsCard({onClick, item}: Props) {
  return (
    <Card onClick={onClick}>
      <ProjectsImageContainer>
        <Image
          src={item.projectImage}
          fill
          alt="11"
          style={{borderRadius: 12}}
          key={'vconnect'}
        />
      </ProjectsImageContainer>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginLeft: 20,
          justifyContent: 'space-between',
          flex: 1,
          overflow: 'hidden',
        }}>
        <div>
          <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
          <Text
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}>
            {item.description}
          </Text>
        </div>
        <div>
          <Text>Ver mais...</Text>
        </div>
      </div>
    </Card>
  );
}
