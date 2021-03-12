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

       <div style="height:150px" class="container-xl position-relative p-0">
                           <a class="navbar-brand align-middle" href="#">-LOGO-</a>

                    <form class="d-flex position-absolute bottom-0 end-0 py-4">
                        <input class="form-control me-2" type="search" placeholder="ჩაწერე საძიებო სიტყვა" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">ძებნა</button>
                    </form>

       </div>
        <nav class="navbar navbar-expand-lg navbar-dark container-xl d-flex p-0">
            <div class="collapse navbar-collapse d-flex justify-content-between">
                <ul class="navbar-nav" v-for="(item, index) in headerMenuLinks" :key="index">
                    <li class="to-hover nav-item p-2 border">
                        <router-link class="nav-link dropdown-toggle p-0" :to="item.url">
                            {{ item.title }}
                        </router-link>
                        <ul class="to-show bg-dark  vw-100 start-50 translate-middle-x position-absolute top-100" style="height:300px">
                            <div class="row " v-for="subCats in item.subCategories" :key="subCats">
                                
                                    <div class="col-sm-3">
                                        <div class="card ">
                                            <router-link class="text-decoration-none" :to="subCats.url">
                                                <img :src="subCats.imageUrl" class="card-img-top" :alt="subCats.title">
                                            </router-link>
                                            <div class="card-body">
                                                <h5 class="card-title">{{ subCats.title }}</h5>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            </div>
                                        </div>
                                    </div>
                                
                            </div>
                        </ul>
                    </li>
                </ul>
                
            </div>
        </nav>
                    

    </div>
    <p>
        klasdjfhk jashdlkfj hlasdkfh laskdjfh lkasdjfh lksdjfh 
        </p>
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
                        {title:"სათაური 1",imageUrl:"/static/images/dummy_slide.jpg",url:"/subcat"},
                        {title:"სათაური 2",imageUrl:"/static/images/dummy_slide.jpg",url:"/subcat"},
                        {title:"სათაური 3",imageUrl:"/static/images/dummy_slide.jpg",url:"/subcat"},
                    ]
                },
                {
                    title:"ეკონომიკა",
                    url:"/2",
                    subCategories:[
                        {title:"სათაური 4",imageUrl:"/static/images/dummy_slide.jpg",url:"/subcat"},
                        {title:"სათაური 5",imageUrl:"/static/images/dummy_slide.jpg",url:"/subcat"},
                        {title:"სათაური 6",imageUrl:"/static/images/dummy_slide.jpg",url:"/subcat"},
                    ]
                },
                {
                    title:"მსოფლიო",
                    url:"/3",
                    subCategories:[
                        {title:"სათაური 7",imageUrl:"/static/images/dummy_slide.jpg",url:"/subcat"},
                        {title:"სათაური 8",imageUrl:"/static/images/dummy_slide.jpg",url:"/subcat"},
                    ]
                },
                {
                    title:"განათლება",
                    url:"/4",
                    subCategories:[
                        {title:"სათაური 9",imageUrl:"/static/images/dummy_slide.jpg",url:"/subcat"},
                        {title:"სათაური 10",imageUrl:"/static/images/dummy_slide.jpg",url:"/subcat"},
                        {title:"სათაური 11",imageUrl:"/static/images/dummy_slide.jpg",url:"/subcat"},
                    ]
                },
                {
                    title:"HI-Tech",
                    url:"/5",
                    subCategories:[
                        {title:"სათაური 12",imageUrl:"/static/images/dummy_slide.jpg",url:"/subcat"},
                        {title:"სათაური 13",imageUrl:"/static/images/dummy_slide.jpg",url:"/subcat"},
                        {title:"სათაური 14",imageUrl:"/static/images/dummy_slide.jpg",url:"/subcat"},
                    ]
                },
                {
                    title:"კულტურა",
                    url:"/5",
                    subCategories:[
                        {title:"სათაური 15",imageUrl:"/static/images/dummy_slide.jpg",url:"/subcat"},
                        {title:"სათაური 16",imageUrl:"/static/images/dummy_slide.jpg",url:"/subcat"},
                        {title:"სათაური 17",imageUrl:"/static/images/dummy_slide.jpg",url:"/subcat"},
                        {title:"სათაური 18",imageUrl:"/static/images/dummy_slide.jpg",url:"/subcat"},
                    ]
                },
                {
                    title:"მოგზაურობა",
                    url:"/5",
                    subCategories:[
                        {title:"სათაური 19",imageUrl:"/static/images/dummy_slide.jpg",url:"/subcat"},
                        {title:"სათაური 20",imageUrl:"/static/images/dummy_slide.jpg",url:"/subcat"},
                        {title:"სათაური 21",imageUrl:"/static/images/dummy_slide.jpg",url:"/subcat"},
                        {title:"სათაური 22",imageUrl:"/static/images/dummy_slide.jpg",url:"/subcat"},
                    ]
                },
                {
                    title:"საინტერესო",
                    url:"/5",
                    subCategories:[
                        {title:"სათაური 23",imageUrl:"/static/images/dummy_slide.jpg",url:"/subcat"},
                        {title:"სათაური 24",imageUrl:"/static/images/dummy_slide.jpg",url:"/subcat"},
                        {title:"სათაური 25",imageUrl:"/static/images/dummy_slide.jpg",url:"/subcat"},
                        {title:"სათაური 26",imageUrl:"/static/images/dummy_slide.jpg",url:"/subcat"},
                    ]
                },
                {
                    title:"ყველა",
                    url:"/5",
                    subCategories:[
                        {title:"სათაური 27",imageUrl:"/static/images/dummy_slide.jpg",url:"/subcat"},
                        {title:"სათაური 28",imageUrl:"/static/images/dummy_slide.jpg",url:"/subcat"},
                        {title:"სათაური 29",imageUrl:"/static/images/dummy_slide.jpg",url:"/subcat"},
                        {title:"სათაური 30",imageUrl:"/static/images/dummy_slide.jpg",url:"/subcat"},
                    ]
                },

            ]
        }
    }
});
</script>
