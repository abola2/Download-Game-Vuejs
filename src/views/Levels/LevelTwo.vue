<template v-show="this.getCurrentLevel">
  <div class="level2">
    <header>You fool! That wasn't a real download button. <br> But maybe one of these is? 2 </Header>
    <button class = button2>Download</button>

  </div>

</template>

<script lang="ts">

import {defineComponent} from "vue/dist/vue";

export default defineComponent({
  components: {

  },

  emits: [

  ],

  props: {
    currentLevel: {
      default: 0,
      type: Number
    }
  },
  computed: {
    getCurrentLevel (): number {
      return this.currentLevel;
    }
  },
  watch: {
    getCurrentLevel () {
      console.log("hidden " + this.currentLevel)
    }

  }
})

</script>


<style scoped>

</style>