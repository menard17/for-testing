import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router configuration
import './styles/styles.css'; // Import the styles.css file
import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App);

app.use(router); // Use the router in the application

app.mount('#app');