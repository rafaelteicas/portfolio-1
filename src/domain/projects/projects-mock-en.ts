import {ProjectTypes} from './projects-types';

export const projectMockEn: ProjectTypes[] = [
  {
    title: 'VCONNECT APP',
    description:
      'VConnect is an application that allows you to find people to play with anywhere, just make a post or send a message for someone to find you, according to your level and skills.',
    screenshot: [
      '/images/vconnect.png',
      '/images/vconnect2.png',
      '/images/vconnect3.png',
      '/images/vconnect4.png',
    ],
    skills: ['React Native', 'Firebase', 'Restyle', 'MMKV', 'Zustand'],
    gitUrl: 'https://github.com/rafaelteicas/ValorantConnectApp',
    backend: {
      title: 'BACKEND VCONNECT',
      description:
        '<li>Auth</li><li>Token e Refresh token</li><li>Posts CRUD</li><li>Paging</li><li>User profile picture</li><li>Deployed on Heroku</li>',
      gitUrl: 'https://github.com/rafaelteicas/ValorantConnectApi',
      skills: [
        'Node JS',
        'Express',
        'TypeORM',
        'Docker',
        'Postgres',
        'Firebase',
      ],
    },
  },
  {
    title: 'Nubble app',
    description:
      'Nubble App is a social network application in which you can connect with people from all over the world, posting things related to your daily life or liking and commenting on posts from friends or any user.',
    gitUrl: '',
    screenshot: ['/images/nubble.png'],
    skills: ['React Native', 'Firebase', 'Restyle', 'MMKV', 'Zustand'],
  },
];
