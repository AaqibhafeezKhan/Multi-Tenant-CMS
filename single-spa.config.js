import { registerApplication, start } from 'single-spa';

registerApplication(
  'react-editorial',
  () => System.import('https://AaqibhafeezKhan.github.io/cms-react-editorial/main.js'),
  pathPrefix('/editorial')
);

registerApplication(
  'vue-media',
  () => System.import('https://AaqibhafeezKhan.github.io/cms-vue-media/main.js'),
  pathPrefix('/media-library')
);

registerApplication(
  'angular-auth',
  () => System.import('https://AaqibhafeezKhan.github.io/cms-angular-auth/main.js'),
  pathPrefix('/auth')
);

registerApplication(
  'svelte-collab',
  () => System.import('https://AaqibhafeezKhan.github.io/cms-svelte-collab/main.js'),
  pathPrefix('/collab')
);


start();
