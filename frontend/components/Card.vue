<template>
<div class="container py-5 ">
   <div class="row h-5 border rounded-3" style="height:600px">
       <div class="col-xl-4 bg-light mh-100 border-end" > soth</div>
       <div class="col-xl-4 p-4"> 
            <div class="card">
                <img :src="mainProdImageUrl" class="card-img" :alt="text" style="z-index: 0;">
                <div class="card-body">
                    <h5 class="card-title px-0">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
           SMTH
       </div>
       <div class="col-xl-4 border-start">{{answer}}</div>
   </div>
</div>
</template>




<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    
    setup() {
        return {
            'text': " sample text",
            mainProdImageUrl:"/static/images/dummy_slide.jpg"
        }
    }
});
</script>
