import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft, faArrowRight, faBaby, faGear, faHouse, faPersonRunning, faPersonWalking, faRepeat, faVolumeHigh, faWheelchair, faXmark } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowRight, faArrowLeft, faGear, faHouse, faRepeat, faPersonRunning, faPersonWalking, faWheelchair, faBaby, faVolumeHigh, faXmark);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
