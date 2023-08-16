<script lang="ts">

import {defineComponent} from "vue";

export default defineComponent({
  components: {

  },

  emits: [
    'addLevel',
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



  }
})





</script>

<template v-show="this.currentLevel == 0">
  <div class="greetings">
    <h1 class="blue"></h1>
    <h3>
      Welcome to the funny download game. Start the game by downloading a very nonsuspicious "program"

    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  
}

h3 {
  font-size: 1.2rem;  
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.greetings h1,

.greetings h3 {
  text-align: center;
  
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: center;
  }
}
</style>
