import { createApp } from "vue";

import store from "./store";
import router from "./router";
import App from "./layouts/App.vue";

export function createMyApp() {
    const app = createApp(App);
    app.use(router);
    app.use(store);
    return app;
}
