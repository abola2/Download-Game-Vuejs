


<template>
  <div class="level3" v-show="getCurrentLevel === 2">

    <div class="full-screen-background">
      <div class="center-container">

          <button class="centered-button glow" @click="cookieClick">CLICK ME</button>
        </div>

        <header>Cookie amount: {{ cookies.toFixed(2) }} </header>

      <!-- Your content goes here -->
        <div class="page_Header_Top">
          <!-- Your content goes here -->
          <h2 class="center-container-header">Earn million cookies to skip add</h2>
          <h5 class="center-container-header" v-if="!skipAdd"> Level completed!</h5>
          <div class="center-container-skip">
          <button class="center-button-skip" v-if="!skipAdd" @click="$emit('addLevel')" :disabled="skipAdd">Skip add</button>
          </div>
        </div>
        <div class="page_Header_Right_shop" id="shop">

        <button @click="buyMoreCookies" class="moreCookies-button">Cookie per click price: {{ cookiesPerClickPrice.toFixed(2) }} Cookies: {{ cookiesPerClick.toFixed(2) }}</button>
        <button @click="buyMultiplayer" class="multiplayer-button">Cookie multiplayer price: {{ cookieMultiplayerPrice.toFixed(2) }} Multiplayer: {{ cookieMultiplayer.toFixed(2) }}</button>

      </div>
    </div>
  </div>

</template>



<script lang="ts">

import {defineComponent} from "vue";
export default defineComponent({
  data () {
    return {
      show: false,
      wait: 5.0,
      cookies: 0,
      cookiesPerClick: 2,
      cookiesPerClickPrice: 10,
      cookieMultiplayer: 2,
      cookieMultiplayerPrice: 10,
      skipAdd: true
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
    },

    cookies (amount) {
      this.skipAdd = amount < 10000;

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
        this.cookieMultiplayerPrice = this.cookieMultiplayerPrice + this.cookieMultiplayer * this.cookieMultiplayerPrice
      }

    },
    buyMoreCookies() {
      if (this.cookies >= this.cookiesPerClickPrice)
      {
        this.cookies = this.cookies - this.cookiesPerClickPrice
        this.cookiesPerClick = this.cookiesPerClick * 1.5
        this.cookiesPerClickPrice = this.cookiesPerClickPrice + this.cookiesPerClick
      }

    }
  }

})

</script>


<style>


.page_Header_Right_shop {
  background: #dbe2e8;
  width: 30%;
  position: absolute;
  height: 100%;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  left: 98%;
  bottom: 0;
  transition: left 0.7s ease-in-out;
  gap: 50px 50px;
  padding: 40px 40px;
  display: flex;
  flex-direction: column;

}

.page_Header_Right_shop:hover  {
  background: #d4dae0;
  width: 30%;
  position: absolute;
  height: 100%;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  left: 70%;
  bottom: 0;
  transition: left 0.3s ease-in-out;
}




.page_Header_Top {
  background: #cbbfb9;
  width: 80%;
  height: 12%;
  border-radius: 5px;
  position: absolute;
  left: 10%;
  bottom: 86%;
  transition: left 1.5s ease-in-out;

}



.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

}


.center-container-skip {
  display: flex;
  justify-content: right;
  align-items: flex-start;

}


.center-container-header {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}


.center-button-skip {
  border-radius: 5px;
  border-color: black;
  background-color: #f1f3f6;
  color: black;
  height: 40px;
  width: 80px;
  text-align: center;
  justify-content: center;
  margin-top: -50px;
  margin-right: 10px;
}


.multiplayer-button {
  border-radius: 5px;
}

.multiplayer-button:hover {
  transform: scale(1.02);
  font-weight: bold;

}

.moreCookies-button {
  border-radius: 5px;
}

.moreCookies-button:hover {
  transform: scale(1.02);
  font-weight: bold;
}



.center-button-skip:hover:enabled {
  transform: scale(1.02);
}


.center-button-skip:disabled {
  cursor: default;
  opacity: 90%;
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




</style>