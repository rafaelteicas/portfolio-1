import {ProjectTypes} from './projects-types';

export const projectMock: ProjectTypes[] = [
  {
    title: 'VCONNECT APP',
    description:
      'O VConnect é um aplicativo que permite que você encontre pessoas para jogar em qualquer lugar, basta fazer uma postagem, ou enviar uma mensagem para que alguém te encontre, de acordo com seu nível e suas habilidades.',
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
        '<li>Autenticação</li><li>Token e Refresh token</li><li>CRUD de postagens</li><li>Paginação</li><li>Fotos de perfil de usuário</li><li>Deploy feito no Heroku</li>',
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
      'O Nubble App é o aplicativo de uma rede social na qual você pode se conectar com pessoas do mundo todo, postando coisas relacionadas ao seu cotidiano ou curtindo e comentando em posts de amigos ou qualquer usuário.',
    gitUrl: '',
    screenshot: ['/images/nubble.png'],
    skills: ['React Native', 'Firebase', 'Restyle', 'MMKV', 'Zustand'],
  },
];
