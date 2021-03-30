<template>
    <div class="d-flex custom-topmenu">
        <div
            class="partners d-none d-xxl-block"
            style="color: white; position: absolute"
        >
            პარტნიორები
        </div>
        <div class="container-lg p-0">
            <nav
                class="navbar navbar-expand-xl d-none d-xl-block p-0 text-light"
            >
                <div class="navbar-collapse">
                    <div
                        class="navbar-nav custom-topmenu-link w-100"
                        style="white-space: nowrap"
                        v-for="(item, index) in data.headerTopMenu"
                        :key="index"
                        :class="{
                            'custom-topmenu-link-first-element': !index,
                            promo: item.promo,
                        }"
                    >
                        <li
                            class="nav-item mx-auto px-1"
                            :class="{ 'ms-4': item.promo }"
                        >
                            <router-link
                                class="nav-link link-light p-0"
                                :to="item.url"
                                target="_blank"
                            >
                                {{ item.title }}
                            </router-link>
                        </li>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import data from "../data/menu.json";

export default defineComponent({
    setup() {
        return {
            data,
        };
    },
});
</script>
