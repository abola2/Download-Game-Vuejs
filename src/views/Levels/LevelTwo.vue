<template>
  <div class="level3" v-show="getCurrentLevel === 2">
    <div class="full-screen-background">
      <div class="center-container">
        <button class="centered-button glow" :disabled="!skipAdd" @click="cookieClick">
          <div class="circle-image" />
        </button>
      </div>

      <header>Cookie amount: {{ cookies.toFixed(2) }}</header>

      <!-- Your content goes here -->
      <div class="page_Header_Top">
        <!-- Your content goes here -->
        <h2 class="center-container-header">Earn million cookies to skip add</h2>
        <h5 class="center-container-header" v-if="!skipAdd">Level completed!</h5>
        <div class="center-container-skip">
          <button
            class="center-button-skip glow"
            v-if="!skipAdd"
            @click="$emit('addLevel')"
            :disabled="skipAdd"
          >
            Skip add
          </button>
        </div>
      </div>
      <div class="page_Header_Right_shop" v-if="skipAdd" id="shop">
        <button @click="buyMoreCookies" class="moreCookies-button">
          Cookie per click price: {{ cookiesPerClickPrice.toFixed(2) }} Cookies:
          {{ cookiesPerClick.toFixed(2) }}
        </button>
        <button @click="buyMultiplayer" class="multiplayer-button">
          Cookie multiplayer price: {{ cookieMultiplayerPrice.toFixed(2) }} Multiplayer:
          {{ cookieMultiplayer.toFixed(2) }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
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
  watch: {
    getCurrentLevel() {
      console.log('hidden ' + this.currentLevel)
    },

    cookies(amount) {
      this.skipAdd = amount < 1000000
    }
  },
  methods: {
    cookieClick() {
      this.cookies = this.cookies + this.cookiesPerClick * this.cookieMultiplayer
    },

    buyMultiplayer() {
      if (this.cookies >= this.cookieMultiplayerPrice) {
        this.cookies = this.cookies - this.cookieMultiplayerPrice
        this.cookieMultiplayer = this.cookieMultiplayer * 1.35
        this.cookieMultiplayerPrice =
          this.cookieMultiplayerPrice + this.cookieMultiplayer * this.cookieMultiplayerPrice * 2
      }
    },
    buyMoreCookies() {
      if (this.cookies >= this.cookiesPerClickPrice) {
        this.cookies = this.cookies - this.cookiesPerClickPrice
        this.cookiesPerClick = this.cookiesPerClick * 1.3
        this.cookiesPerClickPrice = this.cookiesPerClickPrice + this.cookiesPerClick * 2
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

.page_Header_Right_shop:hover {
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

.circle-image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  background: url('@/assets/cookies-1264263_640.jpg') center/cover no-repeat;
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
  width: 20%;
  height: 40%;
  border-radius: 50%;
  background-color: transparent;
  border-style: hidden;
  display: inline-block;
  font-size: larger;
  font-family: 'DM Sans', sans-serif;
  transform: scale(1);
  transition: transform 0.01s ease-in-out;
  position: relative;
}

.glow {
  box-shadow: 0 0 45px rgba(243, 240, 240, 0.5);
  transition: box-shadow 0.3s ease-in-out;
}

.glow:enabled:hover {
  box-shadow: 0 0 50px rgba(243, 236, 236, 0.8);
}

.centered-button:enabled:active {
  transform: scale(1.02);
  transition: transform 0.05s ease-in-out;
}
</style>
