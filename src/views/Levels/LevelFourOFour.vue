<template>
<PopupWindow> </PopupWindow>

<section class="Level404" v-show="currentLevel == 4">
    <body class="body">
    <h1 class="text-center">Error 404</h1>
    <h2 class="text-center">no suspicious program found</h2>
    </body>
</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
components: {},
emits: ['addLevel'],

props: {
    currentLevel: {
    default: 0,
    type: Number
    }
},
computed: {
    getCurrentLevel(): number {
    return this.currentLevel
    }
},
watch: {}
})
</script>

<style>
h1 {
    color: green;
}
h2 {
    color: green;
}
</style>
