import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Service from "../views/Service.vue";

export default createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: "/",
            component: Home,
            name: "home",
        },
        {
            path: "/2",
            component: Service,
            name: "2",
        },
    ],
});
