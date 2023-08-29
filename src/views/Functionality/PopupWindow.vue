

<template>



  <!--with video-->


  <div v-if="popupWindow" id="popup1" class="overlay">
    <div class="popup">
      <h2>{{ popupTitle }}</h2>
      <img :src="imageUrl" alt="Image" id="appimg" v-if="imageUrl !== ''">
      <div class="content">
        {{ popupText }}
      </div>
      <div class="right-container">
        <b id="popupbutton1" v-show="showButtons"
           class="button"
           @click="hideButtons"
        >{{ buttonTextLeft }}
        </b>
        <b id="popupbutton2" v-show="showButtons"
           class="button"
           @click="buttonFunctionality"
        >{{ buttonTextRight }}
        </b>
      </div>
        <a id="popupclosebutton" v-show="showButtons"
           class="button-close"
           @click="$emit('close-popup');"
        >X
        </a>

    </div>
  </div>








</template>

<script lang="ts">


export default {
  data () {
    return {
      showButtons: true
    }
  },
  emits: [
    'addLevel',
    'close-popup'
  ],
  components: {
  },
  computed: {
    getCurrentLevel (): number {
      return this.currentLevel;
    },

    footerTextComputed (): string {
      if (this.footerText != "")
      {
        return !this.showButtons ? "Oof" : this.footerText;
      }
      else
      {
        return !this.showButtons ? "Oof" : "Isn't this monkey cute?";

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
      default: "",
      type: String

    },
    popupTitle: {
      default: " nej",
      type: String
    },
    popupText:
        {
          default: "",
          type: String
        },
    buttonTextLeft:
        {
          default:"Yes (no)",
          type: String
        },
    buttonTextRight:
        {
          default:"Yes",
          type: String
        },
    footerText:
        {
          default:"",
          type: String
        },
    tosButton:
        {
          default: false,
          type: Boolean
        }
  },
  methods:{
    hideButtons () {
      this.toggleButtons()
      console.log("hide buttons")
      setTimeout(() => {
        console.log("show buttons")
        this.toggleButtons()
      }, 900);
    },
    toggleButtons() {
      this.showButtons ? this.showButtons = false : this.showButtons = true;
    },
    buttonFunctionality() {
      if (this.tosButton)
      {
        console.log("adding level");
        this.$emit('addLevel');
        this.$emit('close-popup');
      }
      else
      {
        console.log("closing popup");
        this.$emit('close-popup');
      }
    }



  },
  watch: {
  }
}
</script>


<style>
.button {
  cursor: pointer;
  font-size: 18px;
  height: 25px;
  width: 25%;
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
  height: 10px; /* Adjust the height as needed */
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

.popup {
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 30%;
  position: relative;
  transition: all 5s ease-in-out;
}

.popup h2 {
  margin-top: 0;
  color: #333;
  font-family: Tahoma, Arial, sans-serif;
}

.popup .content {
  max-height: 30%;
  overflow: auto;
}

@media screen and (max-width: 700px) {

  .popup {
    width: 70%;
  }
}
</style>