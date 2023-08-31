<template>
  <div class="level2" v-show="getCurrentLevel === 2">
    <div class="full-screen-background">
      <div class="center-container">
        <header>Cookie amount: {{ cookies.toFixed(2) }}</header>
        <button class="centered-button glow" :disabled="!skipAd" @click="cookieClick">
          <div class="circle-image" />
        </button>
      </div>



      <div class="page_Header_Top">
        <h2 class="center-container-header">Earn a million cookies to skip ad</h2>
        <h5 class="center-container-header" v-if="!skipAd">Level completed!</h5>
        <div class="center-container-skip">
          <button
            class="center-button-skip glow"
            v-if="!skipAd"
            @click="$emit('addLevel')"
            :disabled="skipAd"
          >
            Skip ad
          </button>
        </div>
      </div>
      <div class="page_Header_Right_shop" v-if="skipAd" id="shop">
        <button @click="buyMoreCookies" class="moreCookies-button">
          Cookie per click price: {{ cookiesPerClickPrice.toFixed(2) }} Cookies:
          {{ cookiesPerClick.toFixed(2) }}
        </button>
        <button @click="buyMultiplier" class="multiplier-button">
          Cookie multiplier price: {{ cookiemultiplierPrice.toFixed(2) }} multiplier:
          {{ cookiemultiplier.toFixed(2) }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

let cookieMonsterActive: boolean = false;
let interval: number;
let cookiesEaten: boolean = false;

export function stopCookieMonster(){
    cookieMonsterActive = false;
    cookiesEaten = true;
  }


export default defineComponent({
  data() {
    return {
      show: false,
      wait: 5.0,
      cookies: 0,
      cookiesPerClick: 1,
      cookiesPerClickPrice: 10,
      cookiemultiplier: 2,
      cookiemultiplierPrice: 10,
      skipAd: true
    }
  },
  components: {},

  emits: ['addLevel','cookieMonsterPopup'],

  props: {
    currentLevel: {
      default: 0,
      type: Number
    }
  },
  computed: {
    getCurrentLevel(): number {
      return this.currentLevel;
    }
  },
  watch: {
    cookies(amount) {
      this.skipAd = amount < 1000000;
    }
  },
  methods: {
    cookieClick() {
      this.cookies = this.cookies + this.cookiesPerClick * this.cookiemultiplier;
      if (!cookiesEaten) // if cookiemonster hasn't already appeared, and if the player has >= cookies
        {
          if (this.cookies >= 1000)
          {
            this.eatCookies();
          }
        }
    },

    buyMultiplier() {
      if (this.cookies >= this.cookiemultiplierPrice) {
        this.cookies = this.cookies - this.cookiemultiplierPrice;
        this.cookiemultiplier = this.cookiemultiplier * 1.35;
        this.cookiemultiplierPrice =
          this.cookiemultiplierPrice + this.cookiemultiplier * this.cookiemultiplierPrice * 2;
      }
    },
    buyMoreCookies() {
      if (this.cookies >= this.cookiesPerClickPrice) {
        this.cookies = this.cookies - this.cookiesPerClickPrice;
        this.cookiesPerClick = this.cookiesPerClick * 1.3;
        this.cookiesPerClickPrice = this.cookiesPerClickPrice + this.cookiesPerClick * 2;
      }
    },
    eatCookies(){
      this.$emit('cookieMonsterPopup')
      cookieMonsterActive = true;
      interval = setInterval(this.nomNom, 433); // eats cookies every 0.433 seconds (same as the length of the gif)
    },
    nomNom() {
      if (!cookieMonsterActive)
      {
        clearInterval(interval);
        return;
      }
      this.cookies -= 10;
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
  background: url('@/assets/cookie-307960_640.png') center/cover no-repeat;
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
  flex-direction: column;
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

.multiplier-button {
  border-radius: 5px;
}

.multiplier-button:hover {
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
}

.glow {
  box-shadow: 0 0 45px rgba(243, 240, 240, 0.5);
  transition: box-shadow 0.3s ease-in-out;
}

.glow:enabled:hover {
  box-shadow: 0 0 50px rgba(243, 236, 236, 0.8);
}

.centered-button:enabled:active {
  transform: scale(0.92);
  transition: transform 0.05s ease-in-out;
}
</style>
