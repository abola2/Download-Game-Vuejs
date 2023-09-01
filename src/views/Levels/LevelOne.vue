
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
      <button id="button1" class="btn-lg m-5" v-if="value === 1" @click="$emit('showPopup')">Download</button>
      <img id="arrow2" v-if="value === 1" src="../../assets/clickbait_arrow.png" alt="" />
      </div>
    </div>



    <div class="img-add-div">
      <header id="arctic_fox_Ad_Header">Advertisement:</header>
      <header id="elephant_Ad_Header">Advertisement:</header>
      <header id="monkey_Ad_Header">Advertisement:</header>
      <header id="tower_Ad_Header">Advertisement:</header>
      <img
        id="monkey_Ad"
        class="img-thumbnail"
        src="../../assets/capuchin-8183528_640.jpg"
        alt=""
      />
    </div>
    <img
      id="elephant_Ad"
      class="img-thumbnail"
      src="../../assets/elephant-1822636_640.jpg"
      alt=""
    />
    <img
      id="tower_Ad"
      class="img-thumbnail"
      src="../../assets/lifeguard-tower-8173913_640.jpg"
      alt=""
    />
    <img
      id="arctic_fox_Ad"
      class="img-thumbnail"
      src="../../assets/iceland-1979445_640.jpg"
      alt=""
    />

    <button id="btn_fake_x_monkey">X</button>
    <button id="btn_fake_x_elephant">X</button>
    <button id="btn_fake_x_tower">X</button>
    <button id="btn_fake_x_arctic_fox">X</button>


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
  padding-top: 30px;
  overflow: hidden;
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

  #button1 {
    /*don't even ask*/

    width: 100px;
    height: 80px;

    &::before {
      width: 50%;
      height: 50%;
    }
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


@media screen and (max-width: 920px) {


  #arrow1 {
    display: none;
  }
  #arrow2 {
    display: none;
  }


}


#arrow1 {
  height: 32.5%;
  transform: rotate(15deg);
}


#arrow2 {
  height: 32.5%;
  transform: scaleX(-1) rotate(15deg);
}


#monkey_Ad {
  border-radius: 2px;
  border: solid #000;

  position: absolute;
  height: 25%;
  width: 15%;
  top: 70%;
  left: 82%;
}


#monkey_Ad_Header {
  background: #e4e4e4;
  text-align: left;
  padding: 5px;
  width: 4.5%;
  position: absolute;
  font-size: 10px;
  top: 67.5%;
  left: 82%;
}


#btn_fake_x_monkey {
  font-size: 13px;
  position: absolute;
  top: 70%;
  left: 95.5%;
  border-radius: 3px;
}


#elephant_Ad {
  border-radius: 2px;
  border: solid #000;

  position: absolute;
  height: 25%;
  width: 15%;
  top: 15%;
  left: 82%;
}


#elephant_Ad_Header {
  background: #e4e4e4;
  text-align: left;
  padding: 5px;
  width: 4.5%;
  position: absolute;
  font-size: 10px;
  top: 12.5%;
  left: 82%;
}


#btn_fake_x_elephant {
  font-size: 13px;
  position: absolute;
  top: 15%;
  left: 95.5%;
  border-radius: 3px;
}


#tower_Ad {
  border-radius: 2px;
  border: solid #000;

  position: absolute;
  height: 25%;
  width: 15%;
  top: 14%;
  left: 2%;
}


#tower_Ad_Header {
  background: #e4e4e4;
  text-align: left;
  padding: 5px;
  width: 4.5%;
  position: absolute;
  font-size: 10px;
  top: 11.5%;
  left: 2%;
}


#btn_fake_x_tower {
  font-size: 13px;
  position: absolute;
  top: 14%;
  left: 15.5%;
  border-radius: 3px;
}


#arctic_fox_Ad {
  border-radius: 2px;
  border: solid #000;

  position: absolute;
  height: 25%;
  width: 15%;
  top: 70%;
  left: 2%;
}


#arctic_fox_Ad_Header {
  background: #e4e4e4;
  text-align: left;
  padding: 5px;
  width: 4.5%;
  height: 2%;
  position: absolute;
  font-size: 10px;
  top: 67.5%;
  left: 2%;
}


#btn_fake_x_arctic_fox {
  font-size: 13px;
  position: absolute;
  top: 70%;
  left: 15.5%;
}

#button1:hover {
  transform: scale(1.02);
}

#button1 {
  /*don't even ask*/

  font-size: 25px;

  position: sticky;
  z-index: 0;
  width: 200px;
  height: 80px;
  border-radius: 10px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    left: -50%;
    top: -150%;
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
