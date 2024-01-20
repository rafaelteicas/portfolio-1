import {ProjectTypes} from './projects-types';

export const projectMockEn: ProjectTypes[] = [
  {
    title: 'VConnection',
    description:
      'O VConnect é um aplicativo que permite que você encontre pessoas para jogar em qualquer lugar, basta fazer uma postagem, ou enviar uma mensagem para que alguém te encontre, de acordo com seu nível e suas habilidades.',
    screenshot: [
      '/images/screenshots/vconnection/1.png',
      '/images/screenshots/vconnection/2.png',
      '/images/screenshots/vconnection/3.png',
      '/images/screenshots/vconnection/4.png',
      '/images/screenshots/vconnection/5.png',
      '/images/screenshots/vconnection/6.png',
    ],
    skills: [
      'React Native',
      'Restyle',
      'Typescript',
      'Zustand',
      'MMKV',
      'Context API',
      'Reanimated V3',
    ],
    projectImage: '/images/projects/vconnection.png',
    gitUrl: 'https://github.com/rafaelteicas/ValorantConnectApp',
    backend: {
      title: 'BACKEND VCONNECTION',
      description:
        '<li>Autenticação</li><li>Token e Refresh token</li><li>CRUD de postagens</li><li>Paginação</li><li>Fotos de perfil de usuário</li><li>Deploy feito no Heroku</li>',
      gitUrl: 'https://github.com/rafaelteicas/ValorantConnectApi',
      skills: [''],
    },
    url: 'vconnect',
  },
  {
    title: 'NubbleApp',
    description:
      'O NubbleApp é um aplicativo de uma rede social semelhante ao Instagram.',
    screenshot: [
      '/images/screenshots/nubble/1.png',
      '/images/screenshots/nubble/2.png',
      '/images/screenshots/nubble/3.png',
      '/images/screenshots/nubble/4.png',
    ],
    skills: [
      'React Native',
      'Restyle',
      'Typescript',
      'Zustand',
      'MMKV',
      'Context API',
      'Reanimated V3',
    ],
    projectImage: '/images/projects/nubble.png',
    gitUrl: 'https://github.com/rafaelteicas/ValorantConnectApp',
    url: 'nubble',
  },
];
