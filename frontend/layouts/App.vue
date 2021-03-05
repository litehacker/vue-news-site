<template>
    <div class="app-wrapper">
        <Header/>
        <router-view />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderMenu from "../components/HeaderMenu.vue";


export default defineComponent({
    components: {
      "Header":  HeaderMenu
    },
    setup() {},
});
</script>
