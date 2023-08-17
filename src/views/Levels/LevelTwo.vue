<template>
  <div class="level2" v-show="this.getCurrentLevel">
    <header>You fool! That wasn't a real download button. <br> But maybe one of these is? 2 </Header>
    <button class = "button2" @click="this.$emit('addLevel')">Download</button>

  </div>

</template>

<script lang="ts">


import {defineComponent} from "vue";

export default defineComponent({
  components: {

  },

  emits: [
      'addLevel'

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