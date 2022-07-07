import { createApp } from 'vue'
import App from './App.vue'
import * as launchdarkly from 'launchdarkly-js-client-sdk';

let ldClient = launchdarkly.initialize('62c4ef8146ea681562fbaf74', {
    anonymous: true,
  });

const app = createApp(App).provide('$ldClient', ldClient).mount('#app');