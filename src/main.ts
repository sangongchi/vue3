import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
const app = createApp(App);

import './directives/index';

import SvgIcon from '@/components/SvgIcon/index.vue';
app.component('SvgIcon', SvgIcon);
app.use(router).use(store).mount('#app');
