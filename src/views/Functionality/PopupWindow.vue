

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
            <slot name="body-text">{{ popupText }}</slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              {{ footerTextComputed }}
              <button v-show="this.showButtons"
                  class="modal-default-button"
                  @click="hideButtons"
              >{{ buttonTextLeft }}</button>

              <button v-show="this.showButtons"
                  class="modal-default-button"
                  @click="buttonFunctionality"
              >{{ buttonTextRight }}</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>




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
  border-radius: 5px;
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
</style>