<template>
  <div class="level2" v-show="getCurrentLevel === 2">
    <header>level2 placeholder text </Header>
    <button id = "movingButton" @click="moveButton">Download</button>

  </div>

</template>

<script lang="ts">

import {defineComponent} from "vue";
let NumberOfClicks: number = 0;
let clicksForLevelCompletion: number = 10;
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
      console.log("hidden " + this.currentLevel);
    }

  },
  methods: {
    
    moveButton() {
      if (NumberOfClicks >= clicksForLevelCompletion)
      {
        console.log("level completed");
        /*this.$emit('addLevel');*/
      }
      else 
      {
        console.log(NumberOfClicks);
        NumberOfClicks++;
        let topPosition: number = Math.random()* (100 - 0) + 1;
        let leftPosition: number = Math.random()* (100 - 0) + 1;
        document.getElementById('movingButton')!.style.left = leftPosition + "%";
        document.getElementById('movingButton')!.style.top = topPosition + "%";
        console.log("positions: ", topPosition,", ", leftPosition);
      }
    }
  }

})

</script>


<style scoped>

#movingButton {
  position: absolute;
  background-color: skyblue;
  height: 5%;
  width: 10%;
  top: 50%;
  left: 50%;
}

</style>