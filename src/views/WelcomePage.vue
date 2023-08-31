<template>
  <PopupWindow> </PopupWindow>

  <section class="parent" v-show="currentLevel == 0">
    <div class="body">
      <h1 class="text-center">Welcome to the download game.</h1>
        <h4 class="text-center">Start the game by downloading a very nonsuspicious "program"</h4>
        <button class="btn-play w-25 p-3" @click="$emit('addLevel')"></button>
    </div>
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



.body {
  font-family: 'DM Sans', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh; /* Adjust as needed */

}



.btn-play {
  background-color: #1b9fdc;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='%2322244a' stroke='%2322244a' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play'%3E%3Cpolygon points='5 3 19 12 5 21 5 3'/%3E%3C/svg%3E");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 40px;
  height: 60px;
  flex-shrink: 0;
  border: none;
  border-radius: 10px;
  margin-top: 15px;
}
</style>
