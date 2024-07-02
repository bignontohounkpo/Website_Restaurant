import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js'
import '@fortawesome/fontawesome-free/css/all.css'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css';       // Thème
import 'primevue/resources/primevue.min.css';                 // Core CSS
import 'primeicons/primeicons.css'; 
const app = createApp(App);

app.use(PrimeVue);

app.mount('#app');