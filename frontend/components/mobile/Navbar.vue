<template>
    <nav class="navbar navbar-expand-lg d-lg-none navbar-dark">
        <div class="container-fluid" style="background-color: rgb(4, 43, 64)">
            <a class="navbar-brand align-middle" href="#" style="height: 100px"
                >-LOGO-</a
            >
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div
                class="collapse navbar-collapse row mx-1 mb-1"
                id="navbarSupportedContent"
            >
                <div
                    class="navbar-nav flex-fill col-6 px-0"
                    :class="`main-menu-item-border-${index + 1}`"
                    v-for="(item, index) in data.headerMenuLinks.slice(0, 4)"
                    :key="index"
                    style="border-right: 0px"
                >
                    <div class="to-hover justify-content-center d-flex">
                        <router-link
                            :class="`nav-link p-0 text-white arrow-${
                                index + 1
                            }`"
                            :to="item.url"
                        >
                            {{ item.title }}
                        </router-link>

                        <div
                            class="to-show py-3 pb-5 px-0 bg-dark vw-100 start-50 translate-middle-x position-absolute top-100"
                        >
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
                                                    style="max-height: 150px"
                                                />

                                                <div
                                                    class="card-body position-absolute bg-dark col-10"
                                                    style="
                                                        top: 100px;
                                                        min-height: 90px;
                                                        max-height: 90px;
                                                    "
                                                >
                                                    <h6 class="card-title">
                                                        {{ subCats.title }}
                                                    </h6>
                                                </div>
                                            </router-link>
                                        </div>
                                    </li>
                                </div>
                                <div
                                    class="col-2 position-absolute bottom-0 pb-3"
                                    style="right: 50px"
                                >
                                    <router-link
                                        class="text-decoration-none"
                                        :to="item.url"
                                        style="color: white"
                                    >
                                        მეტი
                                        <svg
                                            width="32"
                                            height="32"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z"
                                            />
                                        </svg>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="navbar-nav flex-fill col-6 px-0"
                    :class="`main-menu-item-border-${index + 5}`"
                    v-for="(item, index) in data.headerMenuLinks.slice(4, 8)"
                    :key="index"
                    style="border-right: 0px"
                >
                    <div class="to-hover justify-content-center d-flex">
                        <router-link
                            :class="`nav-link p-0 text-white arrow-${
                                index + 5
                            }`"
                            :to="item.url"
                        >
                            {{ item.title }}
                        </router-link>

                        <div
                            class="to-show py-3 pb-5 px-0 bg-dark vw-100 start-50 translate-middle-x position-absolute top-100"
                        >
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
                                                    style="max-height: 150px"
                                                />

                                                <div
                                                    class="card-body position-absolute bg-dark col-10"
                                                    style="
                                                        top: 100px;
                                                        min-height: 90px;
                                                        max-height: 90px;
                                                    "
                                                >
                                                    <h6 class="card-title">
                                                        {{ subCats.title }}
                                                    </h6>
                                                </div>
                                            </router-link>
                                        </div>
                                    </li>
                                </div>
                                <div
                                    class="col-2 position-absolute bottom-0 pb-3"
                                    style="right: 50px"
                                >
                                    <router-link
                                        class="text-decoration-none"
                                        :to="item.url"
                                        style="color: white"
                                    >
                                        მეტი
                                        <svg
                                            width="32"
                                            height="32"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z"
                                            />
                                        </svg>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
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
