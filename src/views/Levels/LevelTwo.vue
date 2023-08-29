<template>
  <div class="level2" v-show="getCurrentLevel === 2">
    <header>Terms of service are important! <br/> Now that you have accepted them you can finally download our "program"</Header>
    <button id = "movingButton" @click="moveButton">Download</button>
    <button id = "lvl2button" @click="eatCookies">Download</button>
    <div class="counter">{{ count }}</div>
  </div>

</template>

<script lang="ts">

import {defineComponent} from "vue";
let NumberOfClicks: number = 0;
let clicksForLevelCompletion: number = 10;
let interval: number;
let cookieMonsterActive: boolean = false;

export function stopCookieMonster(){
    cookieMonsterActive = false;
    console.log('No more cookies for the monster');
  }

export default defineComponent({
  components: {

  },
  data () {
    return {
      count: 100,
    }
  },

  emits: [
      'addLevel',
      'showPopup',
      'cookieMonsterPopup'
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
    /*completes level once the button has been clicked x times. If the button hasn't been clicked x times moveButton teleports the button to a random position on the screen, and makes it a little easier to see.*/
    moveButton() {
      if (NumberOfClicks >= clicksForLevelCompletion)
      {
        console.log("level completed");
        this.$emit('addLevel');
      }
      else 
      {
        console.log(NumberOfClicks);
        NumberOfClicks++;
        this.count++;
        let topPosition: number = Math.random()* (100 - 0) + 1;
        let leftPosition: number = Math.random()* (100 - 0) + 1;
        document.getElementById('movingButton')!.style.left = leftPosition + "%";
        document.getElementById('movingButton')!.style.top = topPosition + "%";
        let opacity: string = ((NumberOfClicks + 1) /10).toString();
        document.getElementById('movingButton')!.style.opacity = opacity;
        console.log("positions: ", topPosition,", ", leftPosition);
      }
    },
    eatCookies(){
      this.$emit('cookieMonsterPopup')
      cookieMonsterActive = true;
      interval = setInterval(this.nomnom, 433)
      console.log(interval)
    },
    nomnom() {
      if (!cookieMonsterActive)
      {
        console.log(interval)
        clearInterval(interval);
        return;
      }
      this.count--;
    }
  }

})

</script>


<style scoped>

header {
  font-size: xx-large;
  color: #2563EB;
}

.counter {
  position: absolute;
  
  border-width: 3px;
  background-color: #555;
  border-style: solid;
  width: 100px;
  height: 40px;
  text-align: center;
  font-size: 20px;
  color: white;
  left: 85%;
  top: 10%;
}

#movingButton {
  position: absolute;
  opacity: 0.05;
  height: 5%;
  width: 10%;
  top: 0%;
  left: 0%;
}

#lvl2button {
  position: absolute;
  /*always keep this button smaller than #movingButton,
  so you can click it even if they are on top of each other */
  height: 4%;
  width: 9%;
  top: 50%;
  left: 45%;
}

</style>