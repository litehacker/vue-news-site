<template>
    <form class="d-flex position-absolute bottom-0 end-0 py-4 d-none d-lg-grid">
        <input
            class="form-control border-right-none"
            type="search"
            placeholder="ძებნა..."
            aria-label="Search"
        />
        <button class="btn btn-light border-left-none" type="submit"></button>
    </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    setup() {
        return {};
    },
});
</script>
