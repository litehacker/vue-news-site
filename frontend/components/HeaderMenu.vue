<template>
   <div class="headerMenu container-md">
        <nav class="navbar navbar-expand-lg navbar-light bg-light border">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">-LOGO-</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item p-1 " v-for="(item, index) in headerMenuLinks" :key="index" >
                            <router-link class="nav-link " :to="item.url">
                                {{ item.title }}
                            </router-link>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="ჩაწერე საძიებო სიტყვა" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">ძებნა</button>
                    </form>
                </div>
            </div>
        </nav>
    </div>
</template>




<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    setup() {

        return {
            headerMenuLinks: [
                {
                    title:"მთავარი",
                    url:"/",
                },
                {
                    title:"მეორეხარისხოვანი",
                    url:"/2",
                },
                {
                    title:"კონტაქტი",
                    url:"/3",
                },
                {
                    title:"ებაუთ",
                    url:"/4",
                },
                {
                    title:"მთავარი",
                    url:"/5",
                },
            ]
        }
    }
});
</script>
