<template>
    <div class="d-flex custom-topmenu">
        <div class="container  p-0">
            <nav class="navbar navbar-expand-xl d-none d-xl-block p-0 text-light">
                <div class="navbar-collapse">
                    <div
                        class="navbar-nav w-100 custom-topmenu-link"
                        v-for="(item, index) in headerTopMenu"
                        :key="index"
                        :class="{
                            'custom-topmenu-link-first-element': !index,
                            promo: item.promo,
                        }"
                    >
                        <li
                            class="nav-item mx-auto"
                            :class="{ 'ms-4': item.promo }"
                        >
                            <router-link
                                class="nav-link link-light p-0"
                                :to="item.url"
                            >
                                {{ item.title }}
                            </router-link>
                        </li>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    <div class="px-0" style="background-color: #042b40">
        <div class="container-sm position-relative p-0">
            <a class="navbar-brand align-middle d-none d-lg-block " style="height:150px;" href="#">-LOGO-</a>
            <!-- mobile NAV BAR START -->
            <nav class="navbar navbar-expand-lg d-lg-none navbar-dark">
                <div class="container-fluid" style="background-color: rgb(4, 43, 64);">
                    <a class="navbar-brand align-middle " href="#" style="height:100px;">-LOGO-</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse row mx-1 mb-1" id="navbarSupportedContent">
                        <div
                            class="navbar-nav flex-fill col-6 px-0"
                            :class="`main-menu-item-border-${index+1}`"
                            v-for="(item, index) in headerMenuLinks.slice(0,4)"
                            :key="index"
                            style="border-right:0px"
                        >
                            <div class="to-hover justify-content-center d-flex">
                                <router-link
                                    :class="`nav-link dropdown-toggle p-0 text-white arrow-${index+1}`"
                                    :to="item.url"
                                >
                                    {{ item.title }}
                                </router-link>

                                <div class="to-show py-3 pb-5 px-0 bg-dark vw-100 start-50 translate-middle-x position-absolute top-100">
                                    <div class="d-flex container p-0 mb-0">
                                        <div class="row justify-content-start col-10">
                                            <li
                                                class="col-3 p-3"
                                                v-for="subCats in item.subCategories"
                                                :key="subCats"
                                            >
                                                <div class="card">
                                                    <router-link
                                                        class="text-decoration-none"
                                                        :to="subCats.url"
                                                    >
                                                        <img
                                                            :src="subCats.imageUrl"
                                                            class="card-img-top"
                                                            :alt="subCats.title"
                                                            style="max-height:150px"
                                                        />
                                                    
                                                        <div class="card-body position-absolute bg-dark col-10" style="top:100px; min-height:90px; max-height:90px">
                                                            <h6 class="card-title">
                                                                {{ subCats.title }}
                                                            </h6>
                                                        </div>
                                                    </router-link>
                                                </div>
                                            </li>
                                        </div>
                                        <div class="col-2 position-absolute bottom-0 pb-3" style="right: 50px;">
                                            <router-link class="text-decoration-none" :to="item.url" style="color:white">
                                                მეტი    
                                                <svg width="32" height="32" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z"/></svg>
                                            </router-link>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div
                            class="navbar-nav flex-fill col-6"
                            :class="`main-menu-item-border-${index+5}`"
                            v-for="(item, index) in headerMenuLinks.slice(4,8)"
                            :key="index"
                            style="border-right:0px"
                        >
                            <div class="to-hover justify-content-center d-flex">
                                <router-link
                                    :class="`nav-link dropdown-toggle p-0 text-white arrow-${index+5}`"
                                    :to="item.url"
                                >
                                    {{ item.title }}
                                </router-link>

                                <div class="to-show py-3 pb-5 px-0 bg-dark vw-100 start-50 translate-middle-x position-absolute top-100">
                                    <div class="d-flex container p-0 mb-0">
                                        <div class="row justify-content-start col-10">
                                            <li
                                                class="col-3 p-3"
                                                v-for="subCats in item.subCategories"
                                                :key="subCats"
                                            >
                                                <div class="card">
                                                    <router-link
                                                        class="text-decoration-none"
                                                        :to="subCats.url"
                                                    >
                                                        <img
                                                            :src="subCats.imageUrl"
                                                            class="card-img-top"
                                                            :alt="subCats.title"
                                                            style="max-height:150px"
                                                        />
                                                    
                                                        <div class="card-body position-absolute bg-dark col-10" style="top:100px; min-height:90px; max-height:90px">
                                                            <h6 class="card-title">
                                                                {{ subCats.title }}
                                                            </h6>
                                                        </div>
                                                    </router-link>
                                                </div>
                                            </li>
                                        </div>
                                        <div class="col-2 position-absolute bottom-0 pb-3" style="right: 50px;">
                                            <router-link class="text-decoration-none" :to="item.url" style="color:white">
                                                მეტი    
                                                <svg width="32" height="32" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z"/></svg>
                                            </router-link>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </nav>
            <form class="container-fluid d-lg-none mb-2">
                <div class="input-group">
                    <span class="input-group-text " style="width:60px; margin: 0 auto; text-align:center; font-family: helvetica, arial, sans-serif;">

                        <svg class="svg-icon search-icon" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7"><g class="search-path" fill="none" stroke="#848F91"><path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4"/><circle cx="8" cy="8" r="7"/></g></svg>
                    </span>
                    <input type="text" class="form-control" placeholder="ძებდა..." aria-label="Username" aria-describedby="basic-addon1">
                </div>
            </form>
            <!-- mobile NAV BAR END -->
            <form class="d-flex position-absolute bottom-0 end-0 py-4 d-none d-lg-grid">
                <input
                    class="form-control border-right-none"
                    type="search"
                    placeholder="ძებნა..."
                    aria-label="Search"
                />
                <button class="btn btn-light border-left-none" type="submit">
                </button>
            </form>
        </div>
        <div class="d-flex" style="border-top:1px solid #1d3948">
            
            <nav class="navbar navbar-dark container p-0">
                <div class="navbar-collapse d-none d-lg-block d-lg-flex">
                    <div
                        class="navbar-nav flex-fill"
                        :class="`main-menu-item-border-${index+1}`"
                        v-for="(item, index) in headerMenuLinks"
                        :key="index"
                    >
                        <div class="to-hover justify-content-center d-flex">
                            <router-link
                                :class="`nav-link dropdown-toggle p-0 text-white arrow-${index+1}`"
                                :to="item.url"
                            >
                                {{ item.title }}
                            </router-link>

                            <div class="to-show py-3 pb-5 px-0 bg-dark vw-100 start-50 translate-middle-x position-absolute top-100">
                                <div class="d-flex container p-0 mb-0">
                                    <div class="row justify-content-start col-10">
                                        <li
                                            class="col-3 p-3"
                                            v-for="subCats in item.subCategories"
                                            :key="subCats"
                                        >
                                            <div class="card">
                                                <router-link
                                                    class="text-decoration-none"
                                                    :to="subCats.url"
                                                >
                                                    <img
                                                        :src="subCats.imageUrl"
                                                        class="card-img-top"
                                                        :alt="subCats.title"
                                                        style="max-height:150px"
                                                    />
                                                
                                                    <div class="card-body position-absolute bg-dark col-10" style="top:100px; min-height:90px; max-height:90px">
                                                        <h6 class="card-title">
                                                            {{ subCats.title }}
                                                        </h6>
                                                    </div>
                                                </router-link>
                                            </div>
                                        </li>
                                    </div>
                                    <div class="col-2 position-absolute bottom-0 pb-3" style="right: 50px;">
                                        <router-link class="text-decoration-none" :to="item.url" style="color:white">
                                            მეტი    
                                            <svg width="32" height="32" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z"/></svg>
                                        </router-link>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div :class="`d-none d-lg-block arrow-down-${index+1}`"></div>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    setup() {
        return {
            headerMenuLinks: [
                {
                    title: "საზოგადოება",
                    url: "/",
                    subCategories: [
                        {
                            title: "სათაური 1",
                            imageUrl: "/static/images/dummy_slide.jpg",
                            url: "/subcat",
                        },
                        {
                            title: "სათაური 2",
                            imageUrl: "/static/images/dummy_slide.jpg",
                            url: "/subcat",
                        },
                        {
                            title: "სათაური 3",
                            imageUrl: "/static/images/dummy_slide.jpg",
                            url: "/subcat",
                        },
                    ],
                },
                {
                    title: "ეკონომიკა",
                    url: "/2",
                    subCategories: [
                        {
                            title: "სათაური 4",
                            imageUrl: "/static/images/dummy_slide.jpg",
                            url: "/subcat",
                        },
                        {
                            title: "სათაური 5",
                            imageUrl: "/static/images/dummy_slide.jpg",
                            url: "/subcat",
                        },
                        {
                            title: "სათაური 6",
                            imageUrl: "/static/images/dummy_slide.jpg",
                            url: "/subcat",
                        },
                    ],
                },
                {
                    title: "მსოფლიო",
                    url: "/3",
                    subCategories: [
                        {
                            title: "სათაური 7",
                            imageUrl: "/static/images/dummy_slide.jpg",
                            url: "/subcat",
                        },
                        {
                            title: "სათაური 8",
                            imageUrl: "/static/images/dummy_slide.jpg",
                            url: "/subcat",
                        },
                    ],
                },
                {
                    title: "განათლება",
                    url: "/4",
                    subCategories: [
                        {
                            title: "სათაური 9",
                            imageUrl: "/static/images/dummy_slide.jpg",
                            url: "/subcat",
                        },
                        {
                            title: "სათაური 10",
                            imageUrl: "/static/images/dummy_slide.jpg",
                            url: "/subcat",
                        },
                        {
                            title: "სათაური 11",
                            imageUrl: "/static/images/dummy_slide.jpg",
                            url: "/subcat",
                        },
                    ],
                },
                {
                    title: "HI-Tech",
                    url: "/5",
                    subCategories: [
                        {
                            title: "სათაური 12",
                            imageUrl: "/static/images/dummy_slide.jpg",
                            url: "/subcat",
                        },
                        {
                            title: "სათაური 13",
                            imageUrl: "/static/images/dummy_slide.jpg",
                            url: "/subcat",
                        },
                        {
                            title: "სათაური 14",
                            imageUrl: "/static/images/dummy_slide.jpg",
                            url: "/subcat",
                        },
                    ],
                },
                {
                    title: "კულტურა",
                    url: "/5",
                    subCategories: [
                        {
                            title: "სათაური 15",
                            imageUrl: "/static/images/dummy_slide.jpg",
                            url: "/subcat",
                        },
                        {
                            title: "სათაური 16",
                            imageUrl: "/static/images/dummy_slide.jpg",
                            url: "/subcat",
                        },
                        {
                            title: "სათაური 17",
                            imageUrl: "/static/images/dummy_slide.jpg",
                            url: "/subcat",
                        },
                        {
                            title: "სათაური 18",
                            imageUrl: "/static/images/dummy_slide.jpg",
                            url: "/subcat",
                        },
                    ],
                },
                {
                    title: "მოგზაურობა",
                    url: "/5",
                    subCategories: [
                        {
                            title: "სათაური 19",
                            imageUrl: "/static/images/dummy_slide.jpg",
                            url: "/subcat",
                        },
                        {
                            title: "სათაური 20",
                            imageUrl: "/static/images/dummy_slide.jpg",
                            url: "/subcat",
                        },
                        {
                            title: "სათაური 21",
                            imageUrl: "/static/images/dummy_slide.jpg",
                            url: "/subcat",
                        },
                        {
                            title: "სათაური 22",
                            imageUrl: "/static/images/dummy_slide.jpg",
                            url: "/subcat",
                        },
                    ],
                },
                {
                    title: "საინტერესო",
                    url: "/5",
                    subCategories: [
                        {
                            title: "სათაური 23",
                            imageUrl: "/static/images/dummy_slide.jpg",
                            url: "/subcat",
                        },
                        {
                            title: "სათაური 24",
                            imageUrl: "/static/images/dummy_slide.jpg",
                            url: "/subcat",
                        },
                        {
                            title: "სათაური 25",
                            imageUrl: "/static/images/dummy_slide.jpg",
                            url: "/subcat",
                        },
                        {
                            title: "სათაური 26",
                            imageUrl: "/static/images/dummy_slide.jpg",
                            url: "/subcat",
                        },
                    ],
                },
                {
                    title: "ყველა",
                    url: "/5",
                    subCategories: [
                        {
                            title: "სათაური 27",
                            imageUrl: "/static/images/dummy_slide.jpg",
                            url: "/subcat",
                        },
                        {
                            title: "სათაური 28",
                            imageUrl: "/static/images/dummy_slide.jpg",
                            url: "/subcat",
                        },
                        {
                            title: "სათაური 29",
                            imageUrl: "/static/images/dummy_slide.jpg",
                            url: "/subcat",
                        },
                        {
                            title: "სათაური 30 სათაური 30 სათაური 30 სათაური 30",
                            imageUrl: "/static/images/dummy_slide.jpg",
                            url: "/subcat",
                        },
                    ],
                },
            ],
            headerTopMenu: [
                {
                    title: "ახალი ამბები",
                    url: "/",
                },
                {
                    title: "ქალი",
                    url: "/",
                },
                {
                    title: "ჯანმრთელობა",
                    url: "/",
                },
                {
                    title: "ვიდეო",
                    url: "/",
                    promo: true,
                },
                {
                    title: "ჰოროსკოპი",
                    url: "/",
                },
                {
                    title: "სპორტი",
                    url: "/",
                },
                {
                    title: "ავტო",
                    url: "/",
                },
                {
                    title: "მამაკაცი",
                    url: "/",
                },
                {
                    title: "ბიზნესი",
                    url: "/",
                },
                {
                    title: "მშობლები",
                    url: "/",
                },
                {
                    title: "ყველა საიტი",
                    url: "/",
                },
                {
                    title: "ცხოველები",
                    url: "/",
                },
                {
                    title: "განცხადებები",
                    url: "/",
                    promo: true,
                },
                {
                    title: "რეკლამა",
                    url: "/",
                    promo: true,
                },
            ],
        };
    },
});
</script>
