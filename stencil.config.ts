import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'container-queries',
  hashFileNames: false,
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      baseUrl: 'https://stenciljs.com',
    },
  ],
};
