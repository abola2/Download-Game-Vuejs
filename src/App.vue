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
        'Isn\'t this monkey cute?',
        'Yes (no)',
        'Yes',
        true
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
        'Yes',
        true
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
        'Isn\'t this monkey cute?',
        'Yes (no)',
        'Yes',
        true
      )
    "
    @cookieMonsterPopup="
      popup(
        -1,
        'https://media.giphy.com/media/JrH3p5ZyUHEV6iyvR4/giphy.gif',
        'OH NO! The Cookie Monster got to your cookie jar!',
        'CookieMonster',
        'Stop him immediately!',
        'He\'s cute',
        'Yes!',
        false
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
          'Answer',
          false
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
          'Answer',
          false
        )
      "
      @jokePopup="
        popup(
          -1,
          '',
          'Why should you never iron a four leaf clover?',
          'Because you\'d be pressing your luck!',
          'please laugh',
          'not funny',
          'ok',
          false
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
          'Download',
          false
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
  :image-url="imgUrl"
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
      imgUrl: '', //https://image.ibb.co/epha5A/giphy.gif
      popupTitle: '',
      popupText: '',
      footerText: '',
      buttonTextLeft: '',
      buttonTextRight: '',
      closeButton: false
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
      closeButton: boolean
    ) {
      this.popupWindow = true
      this.imgUrl = gifUrl
      this.popupTitle = title
      this.popupText = text
      this.footerText = footer
      this.buttonTextLeft = buttonTextLeft
      this.buttonTextRight = buttonTextRight
      this.closeButton = closeButton
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

})
</script>


