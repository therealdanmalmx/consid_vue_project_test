import { createApp } from "vue";
import App from "./App.vue";
import store from './store'
import router from './plugins/router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
    faCircleChevronLeft,
    faBars,
    faShop,
    faUser,
    faCartShopping,
}
from '@fortawesome/free-solid-svg-icons'
import {
    faTwitter,
    faFacebook,
    faLinkedin,
    faYoutube
}
from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(
    faCircleChevronLeft,
    faBars,
    faShop,
    faUser,
    faCartShopping,
    faTwitter,
    faFacebook,
    faLinkedin,
    faYoutube
    )

createApp(App)
    .use(router)
    .use(store)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount("#app");
