<template>
<ul>
    <div class="carousel-indicators bg-dark">
            <button type="button" data-bs-target="#carouselExampleCaptions" :class="true ? 'active' : 'active'" aria-current="true" aria-label="Slide 1" @click="locateSlide(index)" v-for="(slide, index) in state.Slides" :key="slide"></button>
    </div>
</ul>
    <div class="carousel slide" ref="carousel" data-bs-ride="carousel" >
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" @click="locateSlide(0)"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" @click="locateSlide(1)"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" @click="locateSlide(2)"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="/static/images/dummy_slide.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>1 slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="/static/images/dummy_slide.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>2 slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="/static/images/dummy_slide.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>3 slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide="prev" @click="changeSlide('prev')">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide="next" @click="changeSlide('next')">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script lang="ts">
import  Carousel from "bootstrap/js/src/carousel";
import { log } from "node:console";
import { defineComponent, onMounted, ref, Ref, reactive } from 'vue';

export default defineComponent({
    setup() {

        const carousel: Ref<HTMLDivElement> = ref(null)
        let carouselObj = null;


        const locateSlide = (index:number) => { 
            carouselObj.to(index)
        }

        const changeSlide = (direction:string)=>{
            if(direction==="next"){
                carouselObj.next()
            }
            else if(direction==="prev"){
                carouselObj.prev()
            }
        }

        const state = reactive (
            {
                Slides: [
                    {
                        title:"first post title",
                        shortDesc:"Short Description",
                        bannerURL:"/static/images/dummy_slide.jpg"
                    },
                    {
                        title:"second post title",
                        shortDesc:"Short Description",
                        bannerURL:"/static/images/dummy_slide.jpg"
                    }
                ]
            })


        onMounted(() => {
            
            carouselObj = new Carousel(carousel.value, {
                interval: 2000,
                pause:"false",
            })

            console.log(carouselObj)

            window.data = {Slider: carouselObj}
        })


        return {
            carousel,
            state,
            changeSlide,
            locateSlide,
        }
    }
});
</script>