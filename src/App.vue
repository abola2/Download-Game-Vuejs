<template>
  <WelcomePage @addLevel="addLevel" :current-level="currentLevel"> </WelcomePage>

  <LevelOne
    @addLevel="addLevel"
    @showPopup="
      popup(
        -1,
        'https://image.ibb.co/epha5A/giphy.gif',
        'LOOK! A cool monkey!',
        '',
        '',
        'Yes (no)',
        'Yes'
      )
    "
    @showTosPopup="
      popup(
        -1,
        '',
        'We expect you to read the whole of our terms of service',
        'TermsOfService',
        'do you accept terms and conditions? ',
        'Yes (no)',
        'Yes'
      )
    "
    :current-level="currentLevel"
    :popupWindow="popupWindow"
  >
  </LevelOne>


  <LevelTwo
    @addLevel="addLevel"
    @showPopup="
      popup(
        -1,
        'https://image.ibb.co/epha5A/giphy.gif',
        'LOOK! A cool monkey!',
        '',
        '',
        'Yes (no)',
        'Yes'
      )
    "
    @cookieMonsterPopup="
      popup(
        -1,
        'https://media.giphy.com/media/JrH3p5ZyUHEV6iyvR4/giphy.gif',
        'OH NO! The Cookie Monster got to your cookie jar!',
        'CookieMonster',
        'Stop him immediately!',
        'but he\'s cute',
        'Yes!'
      )
    "
    :current-level="currentLevel"
    :popupWindow="popupWindow">
  </LevelTwo>

  <LevelThree
      @addLevel="addLevel"
      @sudokuPopup="
        popup(
          -1,
          'https://i.ibb.co/RBwM8FZ/sudoku.png',
          'What number should be in the middle square of this sudoku?',
          'Sudoku',
          '',
          '',
          'Answer'
        )
      "
      @pokemonPopup="
        popup(
          -1,
          'https://i.ibb.co/YbrWPbm/blacephalon.png',
          'Help! I forgot the name of this pokemon',
          'Pokemon',
          '',
          '',
          'Answer'
        )
      "
      @gameEnd="
        popup(
          -1,
          'https://media.giphy.com/media/5jT0jaNDsM6Ik7X9yq/giphy.gif',
          'Congratulations! You completed the game! Had to make sure you were smart enough to download our amazing program.',
          'gameEnd',
          '',
          '',
          'Download'
        )
      "
      :current-level="currentLevel"
      :popupWindow="popupWindow">
  </LevelThree>
  
  <LevelFourOFour
  @addLevel="addLevel"
  :current-level="currentLevel">
  </LevelFourOFour>

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
  :popupWindow="popupWindow"
>
</PopupWindow>

</template>

<script lang="ts">
import WelcomePage from './views/WelcomePage.vue'
import { defineComponent } from 'vue'
import LevelOne from '@/views/Levels/LevelOne.vue'
import LevelTwo from '@/views/Levels/LevelTwo.vue'
import LevelThree from '@/views/Levels/LevelThree.vue'
import LevelFourOFour from '@/views/Levels/LevelFourOFour.vue'
import PopupWindow from '@/views/Functionality/PopupWindow.vue'

export default defineComponent({
  data() {
    return {
      hide: true,
      currentLevel: 0,
      popupWindow: false,
      gifUrl: '', //https://image.ibb.co/epha5A/giphy.gif
      popupTitle: '',
      popupText: '',
      footerText: '',
      buttonTextLeft: '',
      buttonTextRight: ''
    }
  },

  components: {
    LevelTwo,
    LevelOne,
    LevelThree,
    LevelFourOFour,
    WelcomePage,
    PopupWindow
  },

  emits: {},
  props: {},
  methods: {
    addLevel() {
      this.currentLevel++
    },

    popup: function (
      showTImeInMilliseconds: number,
      gifUrl: string,
      title: string,
      text: string,
      footer: string,
      buttonTextLeft: string,
      buttonTextRight: string,
    ) {
      this.popupWindow = true
      this.gifUrl = gifUrl
      this.popupTitle = title
      this.popupText = text
      this.footerText = footer
      this.buttonTextLeft = buttonTextLeft
      this.buttonTextRight = buttonTextRight

      if (showTImeInMilliseconds == -1) {
        return
      }
      setTimeout(() => {
        this.popupWindow = false;
      }, showTImeInMilliseconds)
    },

    closePopup() {
      if (this.popupWindow) {
        this.popupWindow = false;
      }
    }
  },

  watch: {
    currentLevel() {
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

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
