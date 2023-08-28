


<template>
  <div class="level3" v-show="getCurrentLevel === 2">

    <div class="full-screen-background">
      <div class="center-container">
        <button class="centered-button glow" @click="cookieClick">CLICK ME</button>
      </div>
      <header>Cookie amount: {{ cookies }}</header>
      <!-- Your content goes here -->
      <div class="page_Header_Right">
        <button @click="buyMoreCookies" class="">Cookie per click price: {{ cookiesPerClickPrice }} Cookies: {{ cookiesPerClickPrice }}</button>
        <button @click="buyMultiplayer" class="">Cookie multiplayer price : {{ cookieMultiplayerPrice }} Multiplayer: {{ cookieMultiplayerPrice }}</button>
      </div>
    </div>
  </div>

</template>



<script lang="ts">

import {defineComponent} from "vue";
let NumberOfClicks: number = 0;
let clicksForLevelCompletion: number = 10;
export default defineComponent({
  data () {
    return {
      show: false,
      wait: 5.0,
      cookies: 0,
      cookiesPerClick: 1,
      cookiesPerClickPrice: 10,
      cookieMultiplayer: 1,
      cookieMultiplayerPrice: 10
    }
  },
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

    cookieClick() {

      this.cookies = this.cookies + this.cookiesPerClickPrice * this.cookieMultiplayer;
    },
    buyMultiplayer() {
      if (this.cookies >= this.cookieMultiplayerPrice)
      {
        this.cookies = this.cookies - this.cookieMultiplayerPrice
        this.cookieMultiplayer = this.cookieMultiplayer * 1.25
      }

    },
    buyMoreCookies() {
      if (this.cookies >= this.cookiesPerClickPrice)
      {
        this.cookies = this.cookies - this.cookiesPerClickPrice
        this.cookiesPerClick = this.cookiesPerClick * 1.10
      }

    },
    
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
        let topPosition: number = Math.random()* (100) + 1;
        let leftPosition: number = Math.random()* (100) + 1;
        document.getElementById('movingButton')!.style.left = leftPosition + "%";
        document.getElementById('movingButton')!.style.top = topPosition + "%";
        console.log("positions: ", topPosition,", ", leftPosition);
      }
    }
  }

})

</script>


<style>

.page_Header_Right {
  background: #dbe2e8;
  width: 30%;
  position: absolute;
  height: 100%;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  left: 95%;
  bottom: 0;
  transition: left 1.5s ease-in-out;


}

.page_Header_Right:hover {
  background: #d4dae0;
  width: 30%;
  position: absolute;
  height: 100%;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  left: 70%;
  bottom: 0;
  transition: left 1.5s ease-in-out;



}


.page_Header_Left {
  background: #dbe2e8;
  width: 30%;
  position: absolute;
  height: 100%;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  right: 80%;
  bottom: 0;
}



.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Adjust the height as needed */

}


.full-screen-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #84a3d2;
}


.centered-button {
  width: 50%;
  height: 20%;
  border-radius: 10px;
  font-size: larger;
  font-family: 'DM Sans', sans-serif;
  transform: scale(1);
  transition: transform 0.01s ease-in-out;

}


.glow {
  -webkit-box-shadow:0 0 30px #ffffff;
  -moz-box-shadow: 0 0 30px #f5efef;
  box-shadow:0 0 30px #e2e2ea;
}


.centered-button:active {
  transform: scale(1.02);
  transition: transform 0.05s ease-in-out;
}









#movingButton {
  position: absolute;
  background-color: skyblue;
  border-radius: 5px;
  height: 5%;
  width: 10%;
  top: 50%;
  left: 50%;
}

</style>