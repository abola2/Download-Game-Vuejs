<template>
  <div class="level2" v-show="this.getCurrentLevel === 2">
    <header>level2 placeholder text </Header>
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