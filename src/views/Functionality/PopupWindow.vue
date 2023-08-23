

<template>



<!--with video-->
  <Transition name="modal">
    <div v-if="popupWindow" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header"> {{ popupTitle }}</slot>
          </div>

          <div class="modal-body">
            <img :src="imageUrl" alt="Image" id="appimg" v-if="imageUrl !== ''">
            <div class="popup-text">{{ popupTextComputed }}</div>
          </div>

          <div class="modal-footer">
            <div class="footertext">
              {{ footerTextComputed }}
            </div>
          </div>
          <button id="popupbutton1" v-show="this.showButtons"
            class="modal-default-button"
            @click="hideButtons"
            >{{ buttonTextLeft }}
          </button>

          <button id="popupbutton2" v-show="this.showButtons"
            class="modal-default-button"
            @click="buttonFunctionality"
            >{{ buttonTextRight }}
          </button>

          <button id="popupclosebutton" v-show="this.showButtons">
            class="modal-default-button"
            @click="buttonFunctionality"
            >X
          </button>
        </div>
      </div>
    </div>
  </Transition>




</template>

<script lang="ts">
/* import { readFile } from "./readFromFile"; */

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
    },
    
    popupTextComputed (): string {
      if (this.popupText != "TermsOfService")
      {
        /*
        let modalbody = document.getElementById('modal-body') as HTMLElement;
        modalbody.style.setProperty('overflow', 'hidden'); 
         */
        console.log("the popup should have this text:" + this.popupText);
        return this.popupText;
      }
      else 
      {
        /*
        let modalbody = document.getElementById('modal-body') as HTMLElement;
        modalbody.style.setProperty('overflow', 'scroll'); 
        */
        /* const file = readFile('../../assets/fake_tos.txt'); 
        not sure how to fix this, but it's not that important right now
        Uncaught (in promise) Error: Module "fs" has been externalized for browser compatibility. Cannot access "fs.readFileSync" in client code.
        */
        const file = "TOS should be here anyday now...";
        return file;
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

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 600px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 10;
  color: #42b983;
}

.modal-body {

  margin: 20px 0;
}

.modal-default-button {
  border-radius: 20px;
  float: right;
}

.footertext {
  
  position: absolute;
  right: 43%;
  border-radius: 20px;
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
#popupbutton1 {
  
  position: absolute;
  right: 37.5%;
}

#popupbutton2 {
  
  position: absolute;
  right: 35%;
}

</style>