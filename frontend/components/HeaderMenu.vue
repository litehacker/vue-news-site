<template>
    <div class=" container-flux">
        <nav class="navbar navbar-expand-lg navbar-light  border">
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0" v-for="(item, index) in headerMenuLinks" :key="index">
                    <li class="nav-item p-1 "  >
                        <router-link class="nav-link " :to="item.url">
                            {{ item.title }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    <div class="  px-0" style="background-color:#042b40">

       <div style="height:150px" class="container-xl position-relative">
                           <a class="navbar-brand align-middle" href="#">-LOGO-</a>

                    <form class="d-flex position-absolute bottom-0 end-0 py-2">
                        <input class="form-control me-2" type="search" placeholder="ჩაწერე საძიებო სიტყვა" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">ძებნა</button>
                    </form>

       </div>
        <nav class="navbar navbar-expand-lg navbar-dark container-xl d-flex">
            <div class="collapse navbar-collapse d-flex justify-content-evenly">
                <ul class="navbar-nav flex-row" v-for="(item, index) in headerMenuLinks" :key="index">
                    <li class="nav-item p-1 border to-hover ">
                        <router-link class="nav-link dropdown-toggle" data-bs-toggle="dropdown" :to="item.url">
                            {{ item.title }}
                        </router-link>
                        <ul class="to-show position-absolute bg-light ">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                    </li>
                    
                </ul>
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
                    title:"საზოგადოება",
                    url:"/",
                    subCategories:[
                        {title:"სათაური",imageUrl:"/static/images/dummy_slide.jpg"},
                        {title:"სათაური",imageUrl:"/static/images/dummy_slide.jpg"},
                        {title:"სათაური",imageUrl:"/static/images/dummy_slide.jpg"},
                    ]
                },
                {
                    title:"ეკონომიკა",
                    url:"/2",
                    subCategories:[
                        {title:"სათაური",imageUrl:"/static/images/dummy_slide.jpg"},
                        {title:"სათაური",imageUrl:"/static/images/dummy_slide.jpg"},
                        {title:"სათაური",imageUrl:"/static/images/dummy_slide.jpg"},
                    ]
                },
                {
                    title:"მსოფლიო",
                    url:"/3",
                    subCategories:[
                        {title:"სათაური",imageUrl:"/static/images/dummy_slide.jpg"},
                        {title:"სათაური",imageUrl:"/static/images/dummy_slide.jpg"},
                    ]
                },
                {
                    title:"განათლება",
                    url:"/4",
                    subCategories:[
                        {title:"სათაური",imageUrl:"/static/images/dummy_slide.jpg"},
                        {title:"სათაური",imageUrl:"/static/images/dummy_slide.jpg"},
                        {title:"სათაური",imageUrl:"/static/images/dummy_slide.jpg"},
                    ]
                },
                {
                    title:"HI-Tech",
                    url:"/5",
                    subCategories:[
                        {title:"სათაური",imageUrl:"/static/images/dummy_slide.jpg"},
                        {title:"სათაური",imageUrl:"/static/images/dummy_slide.jpg"},
                        {title:"სათაური",imageUrl:"/static/images/dummy_slide.jpg"},
                    ]
                },
                {
                    title:"კულტურა",
                    url:"/5",
                    subCategories:[
                        {title:"სათაური",imageUrl:"/static/images/dummy_slide.jpg"},
                        {title:"სათაური",imageUrl:"/static/images/dummy_slide.jpg"},
                        {title:"სათაური",imageUrl:"/static/images/dummy_slide.jpg"},
                        {title:"სათაური",imageUrl:"/static/images/dummy_slide.jpg"},
                    ]
                },
                {
                    title:"მოგზაურობა",
                    url:"/5",
                    subCategories:[
                        {title:"სათაური",imageUrl:"/static/images/dummy_slide.jpg"},
                        {title:"სათაური",imageUrl:"/static/images/dummy_slide.jpg"},
                        {title:"სათაური",imageUrl:"/static/images/dummy_slide.jpg"},
                        {title:"სათაური",imageUrl:"/static/images/dummy_slide.jpg"},
                    ]
                },
                {
                    title:"საინტერესო",
                    url:"/5",
                    subCategories:[
                        {title:"სათაური",imageUrl:"/static/images/dummy_slide.jpg"},
                        {title:"სათაური",imageUrl:"/static/images/dummy_slide.jpg"},
                        {title:"სათაური",imageUrl:"/static/images/dummy_slide.jpg"},
                        {title:"სათაური",imageUrl:"/static/images/dummy_slide.jpg"},
                    ]
                },
                {
                    title:"ყველა",
                    url:"/5",
                    subCategories:[
                        {title:"სათაური",imageUrl:"/static/images/dummy_slide.jpg"},
                        {title:"სათაური",imageUrl:"/static/images/dummy_slide.jpg"},
                        {title:"სათაური",imageUrl:"/static/images/dummy_slide.jpg"},
                        {title:"სათაური",imageUrl:"/static/images/dummy_slide.jpg"},
                    ]
                },

            ]
        }
    }
});
</script>
