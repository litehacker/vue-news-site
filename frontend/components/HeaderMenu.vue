<template>
    <TopNavbar />
    <div class="px-0" style="background-color: #042b40">
        <div class="container-lg position-relative px-0 py-4">
            <div style="height: 132px">
                <a class="navbar-brand align-middle" href="#">
                    <div
                        style="
                            height: 64px;
                            width: 235px;
                            background-color: white;
                            margin-top: 11px;
                        "
                    ></div>
                </a>
                <div
                    class="current-date d-none d-lg-block"
                    style="color: #46a5d1"
                >
                    <span>{{ date.number }}</span>
                    {{ date.week }} {{ date.month }}
                    {{ date.year }}
                </div>
            </div>
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
            date: data.date,
        };
    },
});
</script>
