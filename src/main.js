import { createApp } from 'vue';
import components from "@/compoents/UI/index"
import App from './App';

const app = createApp(App)

components.forEach(elem => {
    app.component(elem.name, elem)
});


app.mount('#app')
