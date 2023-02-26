import { createApp, type Component } from 'vue';
import App from './App.vue';

import './assets/main.css';

import 'vuetify/styles';
import { createVuetify } from 'vuetify/lib/framework.mjs';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const app = createApp(<Component>App);

const vuetify = createVuetify({
  components,
  directives,
});
app.use(vuetify);

app.mount('#app');
