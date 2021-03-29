<template>
    <TopNavbar />
    <div class="px-0" style="background-color: #042b40">
        <div class="container-sm position-relative p-0">
            <a
                class="navbar-brand align-middle d-none d-lg-block"
                style="height: 150px"
                href="#"
                >-LOGO-</a
            >
            <!-- mobile NAV BAR START -->

            <MobileNavbar />
            <MobileSearch />
            <!-- mobile NAV BAR END -->
            <SearchBar />
        </div>
        <div class="d-flex" style="border-top: 1px solid #1d3948">
            <NavBar />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MobileSearchForm from "../components/mobile/SearchForm.vue";
import MobileNavbar from "../components/mobile/Navbar.vue";
import SearchDesktop from "../components/desktop/SearchBar.vue";
import NavBar from "../components/desktop/NavBar.vue";
import TopNavbar from "../components/desktop/TopNavbar.vue";
import data from "./data/menu.json";

export default defineComponent({
    components: {
        MobileSearch: MobileSearchForm,
        MobileNavbar: MobileNavbar,
        SearchBar: SearchDesktop,
        NavBar,
        TopNavbar,
    },
    setup() {
        return {
            data,
        };
    },
});
</script>
