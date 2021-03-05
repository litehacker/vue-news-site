<template>
   <div class="item">
       <div> Content from item.vue </div>
       <button type="button" class="btn btn-primary">Primary</button>
       {{text}}
   </div>
</template>




<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        return {
            'text': " sample text"
        }
    }
});
</script>
