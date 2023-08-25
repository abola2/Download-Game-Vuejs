<template >

  <WelcomePage
    @addLevel="addLevel"
    :current-level="currentLevel">
  </WelcomePage>


  <LevelOne
      @addLevel="addLevel"
      @showPopup="popup(-1, 'https://image.ibb.co/epha5A/giphy.gif', 'LOOK! A cool monkey!', '', '','Yes (no)', 'Yes', false)"
      @showTosPopup="popup(-1, '', 'We expect you to read the whole of our terms of service','TermsOfService', 'do you accept terms and conditions? ','Yes (no)', 'Yes', true)"
      :current-level="currentLevel"
      :popupWindow="popupWindow">
  </LevelOne>

  <PopupWindow
      @close-popup="closePopup"
      @addLevel="addLevel"
      :current-level="currentLevel"
      :image-url="gifUrl"
      :popup-title="popupTitle"
      :popup-text="popupText"
      :footer-text="footerText"
      :button-text-left="buttonTextLeft"
      :button-text-right="buttonTextRight"
      :tos-Button="tosButton"
      :popupWindow="popupWindow">
    </PopupWindow>

  <LevelTwo
      @addLevel="addLevel"
      @showPopup="popup(-1, 'https://image.ibb.co/epha5A/giphy.gif', 'LOOK! A cool monkey!', '', '','Yes (no)', 'Yes', false)"
      @cookieMonsterPopup="popup(-1, 'https://media.giphy.com/media/JrH3p5ZyUHEV6iyvR4/giphy.gif', 'OH NO! The Cookie Monster got to your cookie jar!', '', 'Stop him immediately!','but he\'s cute', 'Yes!', false)"
      :current-level="currentLevel">
      :popupWindow="popupWindow">
      :cookieMonster="cookieMonsterActive">

  </LevelTwo>

  <LevelThree
      @addLevel="addLevel"
      :current-level="currentLevel"
      :popupWindow="popupWindow">
  </LevelThree>




</template>


<script lang="ts">
import WelcomePage from './components/WelcomePage.vue'
import {defineComponent} from "vue";
import LevelOne from "@/views/Levels/LevelOne.vue";
import LevelTwo from "@/views/Levels/LevelTwo.vue";
import LevelThree from '@/views/Levels/LevelThree.vue';
import {stopCookieMonster} from "@/views/Levels/LevelTwo.vue";
import PopupWindow from "@/views/Functionality/PopupWindow.vue";





export default defineComponent( {

  data () {
    return {
      hide: true,
      currentLevel: 0,
      popupWindow: false,
      gifUrl: "", //https://image.ibb.co/epha5A/giphy.gif
      popupTitle: "",
      popupText: "",
      footerText: "",
      buttonTextLeft: "",
      buttonTextRight: "",
      tosButton: false,
      cookieMonsterActive: false
    }
  },

  components: {
    LevelTwo,
    LevelOne,
    LevelThree,
    WelcomePage,
    PopupWindow,
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

    popup: function (showTImeInMilliseconds: number, gifUrl: string, title: string, text: string, footer: string, buttonTextLeft: string, buttonTextRight: string, tosButton: boolean) {

      this.popupWindow = true;
      this.gifUrl = gifUrl
      this.popupTitle = title;
      this.popupText = text;
      this.footerText = footer;
      this.buttonTextLeft = buttonTextLeft;
      this.buttonTextRight= buttonTextRight;
      this.tosButton = tosButton;
      console.log("start " + this.popupTitle)

      if (showTImeInMilliseconds == -1) {
        return
      }
      setTimeout(() => {
        this.popupWindow = false;
        console.log("end " + this.popupWindow);
      }, showTImeInMilliseconds);
    },


    closePopup() {
      if (this.popupWindow) {
        stopCookieMonster();
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
