import { registerApplication, start } from 'single-spa';

registerApplication({
  name: '@cms-react-editorial',
  app: () => System.import('cms-react-editorial'),
  activeWhen: ['/editorial'],
});

registerApplication({
  name: '@cms-vue-media',
  app: () => System.import('cms-vue-media'),
  activeWhen: ['/media-library'],
});

registerApplication({
  name: '@cms-angular-auth',
  app: () => System.import('cms-angular-auth'),
  activeWhen: ['/role-access'],
});

registerApplication({
  name: '@cms-svelte-collab',
  app: () => System.import('cms-svelte-collab'),
  activeWhen: ['/real-time-editor'],
});

start();
