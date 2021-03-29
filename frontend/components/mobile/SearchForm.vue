<template>
    <form class="container-fluid d-lg-none mb-2">
        <div class="input-group">
            <span
                class="input-group-text"
                style="
                    width: 60px;
                    margin: 0 auto;
                    text-align: center;
                    font-family: helvetica, arial, sans-serif;
                "
            >
                <svg
                    class="svg-icon search-icon"
                    aria-labelledby="title desc"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 19.9 19.7"
                >
                    <g class="search-path" fill="none" stroke="#848F91">
                        <path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" />
                        <circle cx="8" cy="8" r="7" />
                    </g>
                </svg>
            </span>
            <input
                type="text"
                class="form-control"
                placeholder="ძებდა..."
                aria-label="Username"
                aria-describedby="basic-addon1"
            />
        </div>
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
