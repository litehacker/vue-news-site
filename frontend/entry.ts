import "~/scss/main.scss";

import { createMyApp } from "./app";

const app = createMyApp();

declare global {
    interface Window {
        data?: any;
    }
}

app.mount("#app");
