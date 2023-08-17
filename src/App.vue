<template >

  <WelcomePage
    @addLevel="addLevel"
    :current-level="currentLevel">
  </WelcomePage>


  <LevelOne
      @addLevel="addLevel"
      @showPopup="waitSpecificTime(5000)"
    :current-level="currentLevel"
    :popupWindow="popupWindow">

  </LevelOne>

  <PopupWindow
      @closepopup="closePopup"
      :popupWindow="popupWindow">
    </PopupWindow>

  <LevelTwo
      @addLevel="addLevel"
      :current-level="currentLevel">

  </LevelTwo>




</template>


<script lang="ts">
import WelcomePage from './components/WelcomePage.vue'
import {defineComponent} from "vue";
import LevelOne from "@/views/Levels/LevelOne.vue";
import LevelTwo from "@/views/Levels/LevelTwo.vue";
import PopupWindow from "@/views/Functionality/PopupWindow.vue";

export default defineComponent( {

  data () {
    return {
      hide: true,
      currentLevel: 0,
      popupWindow: false
    }
  },

  components: {
    LevelTwo,
    LevelOne,
    WelcomePage,
    PopupWindow
  },

  emits: {

  },
  props: {

  },
  methods: {
    addLevel() {
      console.log("current level: " + this.currentLevel)
      this.currentLevel++
    },
    waitSpecificTime: function (value) {
      this.popupWindow = true;
      console.log("test " + this.popupWindow);

      setTimeout(() => {  // Using an arrow function to maintain the correct context
        this.popupWindow = false;  // Corrected property name
        console.log("end " + this.popupWindow);
      }, value);
    },

    closePopup() {
      if (this.popupWindow) {
        this.popupWindow = false
      }
    }


  },

  watch: {
    currentLevel () {
      console.log(this.currentLevel)
    }
  }
})



</script>


<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}


nav {
  width: 15%;
  font-size: 12px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-30%, -50%);
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
