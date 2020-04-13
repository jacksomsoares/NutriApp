import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  //namespace: "jackbundle",
  outputTargets: [{
    type: 'www',
    // serviceWorker: null
  }],
  globalScript: 'src/global/app.ts',
  globalStyle: 'src/global/app.css'
};
