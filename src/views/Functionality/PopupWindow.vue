<template>
  <!--with video-->

  <div v-if="popupWindow" id="popup1" class="overlay">
    <div class="popup">
      <h2>{{ popupTitle }}</h2>
      <div class="gap">
        <div class="content">
          <img :src="imageUrl" alt="Image" v-if="imageUrl !== ''" />
          {{ popupTextComputed }}
        </div>

      <div class="modal-footer">
        <div class="footertext">
          {{ footerTextComputed }}
        </div>
        <input id="sudokuInput" placeholder="0" type="number" max="9" min="1" v-model="input" v-if="popupText == 'Sudoku'">
        <input id="pokemonInput" placeholder="Pikachu" v-model="input" v-if="popupText == 'Pokemon'">
      </div>
      <div class="right-container">
        <b id="popupbutton1" v-show="showButtons" class="button" @click="hideButtons" v-if="buttonTextLeft !== ''"
          >{{ buttonTextLeft }}
        </b>
        <b id="popupbutton2" v-show="showButtons" class="button" @click="buttonFunctionality" v-if="buttonTextRight !== ''"
          >{{ buttonTextRight }}
        </b>
      </div>
    </div>
      <a
        id="popupclosebutton"
        v-show="showButtons"
        v-if="closeButton"
        class="button-close"
        @click="$emit('close-popup')"
        >X
      </a>
    </div>
  </div>
</template>

<script lang="ts">

import {stopCookieMonster} from "@/views/Levels/LevelTwo.vue";
import { ref } from 'vue';
const input = ref('');

export default {
  data() {
    return {
      showButtons: true,
      input
    }
  },
  emits: ['addLevel', 'close-popup'],
  components: {},
  computed: {
    getCurrentLevel(): number {
      return this.currentLevel;
    },

    footerTextComputed (): string {
      if (this.footerText != "")
      {
        return !this.showButtons ? "Oof" : this.footerText;
      }
      else
      {
        return !this.showButtons ? "Oof" : "";
      }
    },
    
    // uses popupText to determine who called the PopupWindow and what the popup should do
    popupTextComputed (): string {
      switch (this.popupText){
        case "TermsOfService":
          return "By accepting the terms of service you agree to blah blah blah...";
        
        case "CookieMonster":
          return "";

        case "Sudoku":
          return "";

        case "Pokemon":
          return "";
        case "gameEnd":
          return "";
        default:
          return this.popupText;
      }
    }
  },
  props: {
    currentLevel: {
      default: 0,
      type: Number
    },
    popupWindow: {
      default: false,
      type: Boolean
    },
    imageUrl: {
      default: '',
      type: String
    },
    popupTitle: {
      default: ' nej',
      type: String
    },
    popupText: {
      default: '',
      type: String
    },
    buttonTextLeft: {
      default: 'Yes (no)',
      type: String
    },
    buttonTextRight: {
      default: 'Yes',
      type: String
    },
    footerText: {
      default: '',
      type: String
    },
    tosButton: {
      default: false,
      type: Boolean
    },
    closeButton: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    hideButtons() {
      this.toggleButtons();
      setTimeout(() => {
        this.toggleButtons();
      }, 900)
    },
    toggleButtons() {
      this.showButtons ? (this.showButtons = false) : (this.showButtons = true);
    },
    // uses popupText to determine who called the PopupWindow and what the popup should do
    buttonFunctionality() {
      switch (this.popupText){
        case "TermsOfService":
          this.$emit('addLevel');
          this.$emit('close-popup');
          break;

        case "CookieMonster":
          stopCookieMonster();
          this.$emit('close-popup');
          break; 


        case "Sudoku":
          if (input.value == "4")
          {
            input.value = "";
            this.$emit('close-popup');
          }
          else 
          {
            input.value = "";
            this.hideButtons();
          }
          break;
        case "Pokemon":
          if (input.value.toLowerCase() == "blacephalon")
          {
            input.value = "";
            this.$emit('close-popup');
          }
          else 
          {
            input.value = "";
            this.hideButtons();
          }
          break;
        case "gameEnd":
          this.$emit('addLevel');
          this.$emit('close-popup');
          break;

        default:
          this.$emit('close-popup');
          break;
      }
    }
  },
  watch: {}
}
</script>

<style>
.button {
  cursor: pointer;
  font-size: 16px;
  height: 25px;
  width: 80px;
  color: black;
  border-radius: 2px/5px;
  border: 1px solid black;
  transition: all 0.2s ease-out;
  text-align: center;
}

.button-close {
  position: absolute;
  top: -5px;
  right: 10px;
  transition: all 200ms;
  font-size: 25px;
  padding: 5px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}
.button:hover {
  background: #d0caca;
  transform: scale(1.01);
}

#popupclosebutton:hover {
  color: #a60a5c;
  background: none;
  transform: scale(1.01);
}

.right-container {
  display: flex;
  justify-content: right;
  align-items: normal;
  align-content: center;
  height: 10px;
  gap: 10px;
}

.overlay {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: opacity 500ms;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
}
.gap{
  gap: 10px;
}

.popup {
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 45%;
  position: relative;
  transition: all 5s ease-in-out;
}

.popup h2 {
  margin-top: 0;
  color: #333;
  font-family: Tahoma, Arial, sans-serif;
}

.popup .content {
  
flex-direction: row;
display: flex;
justify-content: center;
align-items: center;
  max-height: 30%;
  overflow: auto;
}

img{
  display: block;
  max-width: 400px;
  max-height: 600px;
  width: auto;
  height: auto;
}

@media screen and (max-width: 700px) {
  .popup {
    width: 70%;
  }
}
</style>
