import { createApp } from 'vue';
import App from './App.vue';
import state from './store/index.js';

const app = createApp(App);
app.use(state);

app.mount('#app');
