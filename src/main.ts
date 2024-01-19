import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft, faArrowRight, faGear, faHouse, faRepeat } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowRight, faArrowLeft, faGear, faHouse, faRepeat);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
