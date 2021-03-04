<template>
   <div class="item">
       <div> Content from item.vue </div>
       <button type="button" class="btn btn-primary">Primary</button>
       {{text}}
   </div>
</template>




<script lang="ts">

export default {
    setup() {
        
        return {
            'text': " sample text"

        }
    }
};
</script>
