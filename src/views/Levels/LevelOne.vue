
<template>
  <div class="level1" v-show="currentLevel === 1">
    <div class="page_Header_Right"></div>
    <div class="page_Header_Left"></div>
    <div class="body">
      <header class="blue marg">
        You fool! That wasn't a real download button. <br />
        But maybe you can find one here?
      </header>
        <Multiselect
            class="multiselect-blue"
            v-model="value"
            :close-on-select="true"
            :searchable="false"
            :mode="'single'"
            :placeholder="'select'"
            :options="[
              { value: 1, label: 'Buy' },
              { value: 2, label: 'Wiki' },
              { value: 3, label: 'Tos' }
            ]"
        />
      <iframe v-if="value === 2" src="https://www.wikipedia.com" class="" width="60%" height="50%">
      </iframe>
      <div class="container-row">
      <img id="arrow1" v-if="value === 1" src="../../assets/clickbait_arrow.png" alt="" />
      <button id="button1" v-if="value === 1" @click="$emit('showPopup')">Download</button>
      <img id="arrow2" v-if="value === 1" src="../../assets/clickbait_arrow.png" alt="" />
      </div>
    </div>


    <div class="img-add-div">
      <img
        id="mtndew_Ad"
        class="img-thumbnail"
        src="../../assets/capuchin-8183528_640.jpg"
        alt=""
      />
      <header id="mtndew_Ad_Header">Advertisement:</header>
    </div>
    <img
      id="tacobell_Ad"
      class="img-thumbnail"
      src="../../assets/elephant-1822636_640.jpg"
      alt=""
    />
    <header id="tacobell_Ad_Header">Advertisement:</header>
    <img
      id="macncheese_Ad"
      class="img-thumbnail"
      src="../../assets/lifeguard-tower-8173913_640.jpg"
      alt=""
    />
    <header id="macncheese_Ad_Header">Advertisement:</header>
    <img
      id="toothpaste_Ad"
      class="img-thumbnail"
      src="../../assets/iceland-1979445_640.jpg"
      alt=""
    />
    <header id="toothpaste_Ad_Header">Advertisement:</header>

    <button id="btn_fake_x_mtndew">X</button>
    <button id="btn_fake_x_tacobell">X</button>
    <button id="btn_fake_x_macncheese">X</button>
    <button id="btn_fake_x_toothpaste">X</button>


  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import Multiselect from '@vueform/multiselect'

export default {
  components: {
    Multiselect
  },
  data() {
    return {
      selected: ref(''),
      value: 0,
      options: []
    }
  },

  emits: ['addLevel', 'showPopup', 'showTosPopup'],

  props: {
    currentLevel: {
      default: 0,
      type: Number
    },
    popupWindow: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    getCurrentLevel(): number {
      return this.currentLevel
    }
  },
  watch: {
    value() {
      if (this.value === 3) {
        this.$emit('showTosPopup')
      }
    }
  }
}
</script>

<style src="@vueform/multiselect/themes/default.css"></style>

<style>

.container-row {
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding-top: 30px;
}


iframe {
  overflow: hidden;
}


@media screen and (max-height: 800px) {
  iframe {
    top: 80%;
    height: 40%;
  }

  header {
    height: 30%;
  }
}




.page_Header_Right {
  background: #dbe2e8;
  width: 30%;
  position: absolute;
  overflow-y: hidden;
  height: 100%;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  left: 80%;
  bottom: 0;
}

.page_Header_Left {
  background: #dbe2e8;
  width: 30%;
  position: absolute;
  overflow-y: hidden;
  height: 100%;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  right: 80%;
  bottom: 0;
}

.multiselect-blue {
  --ms-tag-bg: #dbeafe;
  --ms-tag-color: #2563eb;
  width: 30%;
}

header {
  font-weight: 500;
  font-size: 2.6rem;
  text-align: center;
  padding-bottom: 2%;
}


.marg {
  padding-right: 60px;
  padding-left: 60px;
}

@media screen and (max-width: 1025px) {
  .marg {
    padding-right: 20%;
    padding-left: 20%;
  }
}


@media screen and (max-width: 1400px) {
  .marg {
    padding-right: 25%;
    padding-left: 25%;
  }
}


@media screen and (max-width: 500px) {
  .marg {
    padding-right: 40%;
    padding-left: 40%;
    font-size: x-large;
  }
}



#arrow1 {
  height: 12.5%;
  transform: rotate(15deg);
}
#arrow2 {
  height: 12.5%;
  transform: scaleX(-1) rotate(15deg);
}

#mtndew_Ad {
  border-radius: 2px;
  border: solid #000;

  position: absolute;
  height: 25%;
  width: 15%;
  top: 70%;
  left: 82%;
}
#mtndew_Ad_Header {
  background: #e4e4e4;
  text-align: left;
  padding: 5px;
  width: 4.5%;
  position: absolute;
  font-size: 10px;
  top: 69%;
  left: 84%;
}

#btn_fake_x_mtndew {
  font-size: 13px;
  position: absolute;
  top: 69%;
  left: 96%;
  border-radius: 3px;
}

#tacobell_Ad {
  border-radius: 3px;

  position: absolute;
  height: 25%;
  width: 15%;
  top: 15%;
  left: 82%;
}

#tacobell_Ad_Header {
  background: #e4e4e4;
  text-align: left;
  padding: 5px;
  width: 4.5%;
  position: absolute;
  font-size: 10px;
  top: 14%;
  left: 84%;
}

#btn_fake_x_tacobell {
  font-size: 13px;
  position: absolute;
  top: 15%;
  left: 96%;
  border-radius: 3px;
}

#macncheese_Ad {
  border-radius: 2px;
  border: solid #000;

  position: absolute;
  height: 25%;
  width: 15%;
  top: 14%;
  left: 2%;
}
#macncheese_Ad_Header {
  background: #e4e4e4;
  text-align: left;
  padding: 5px;
  width: 4.5%;
  position: absolute;
  font-size: 10px;
  top: 13%;
  left: 4%;
}

#btn_fake_x_macncheese {
  font-size: 13px;
  position: absolute;
  top: 14%;
  left: 16%;
  border-radius: 3px;
}

#toothpaste_Ad {
  border-radius: 2px;
  border: solid #000;

  position: absolute;
  height: 25%;
  width: 15%;
  top: 70%;
  left: 2%;
}

#toothpaste_Ad_Header {
  background: #e4e4e4;
  text-align: left;
  padding: 5px;
  width: 4.5%;
  height: 2%;
  position: absolute;
  font-size: 10px;
  top: 69%;
  left: 4%;
}

#btn_fake_x_toothpaste {
  font-size: 13px;
  position: absolute;
  top: 70%;
  left: 16%;
}

#button1:hover {
  transform: scale(1.02);
}

#button1 {
  font-weight: 400;
  font-size: 25px;
  width: 200px;
  height: 100px;
  border-radius: 10px;
  overflow: hidden;
  padding: 25px;

  &::before {
    width: 200%;
    height: 400%;
    background-repeat: no-repeat;
    background-size:
      50% 50%,
      50% 50%;
    background-position:
      0 0,
      100% 0,
      100% 100%,
      0 100%;
    background-image: linear-gradient(#ff69b4, #ff69b4), linear-gradient(#ff51ff, #ff51ff),
      linear-gradient(#ff2cff, #ff2cff), linear-gradient(#f64a8a, #f64a8a);
    animation: rotate 5s linear infinite;
  }
}

@keyframes rotate {
  100% {
    transform: rotate(1turn);
  }
}
</style>
