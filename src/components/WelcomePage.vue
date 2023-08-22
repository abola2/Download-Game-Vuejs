
<template >

  <PopupWindows>

  </PopupWindows>


  <div class="greetings" v-show="currentLevel == 0">
    <h1 class="center-header">
      Welcome to the funny download game. Start the game by downloading a very nonsuspicious "program"</h1>
    <h3>
      <button class="p-5 w-50 text-bg-primary rounded-3 alert alert-primary center" @click="$emit('addLevel')">Download</button>
    </h3>
  </div>
</template>


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



<style scoped>
h1 {
  text-align: center;
  font-weight: 500;
  font-size: 2.6rem;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  
}

h3 {
  
  text-align: center;
  font-size: 1.3rem;  
  position: absolute;
  width: 750px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.center-header {
  align-content: center;
}


.center {
  transform: translate(0%, 85%);
  align-content: center;
}


</style>
