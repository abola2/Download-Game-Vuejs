<!--
Level 1 idea

Install free version

Fill page with adds



-->




<template >


  <div class="level1" v-show="currentLevel === 1">
    <div class="page_Header_Right"></div>
    <div class="page_Header_Left"></div>
    <header class = "blue">You fool! That wasn't a real download button. <br> But maybe you can find one here?</Header>
      <button id = "button1" v-if="value===1" @click="$emit('showPopup')">Download</button>
      <img id="arrow1" v-if="value===1" src="../../assets/clickbait_arrow.png" alt="">
      <img id="arrow2" v-if="value===1" src="../../assets/clickbait_arrow.png" alt="">
    <iframe v-if="value===2" src="https://www.wikipedia.com" class="" width="60%" height="50%">
    </iframe>
      <div class="img-add-div">
        <img id="mtndew_Ad" class="img-thumbnail" src="../../assets/capuchin-8183528_640.jpg" alt="">
        <header id="mtndew_Ad_Header" >Advertisement: </header>
      </div>
        <img id="tacobell_Ad" class="img-thumbnail" src="../../assets/elephant-1822636_640.jpg" alt="">
      <header id="tacobell_Ad_Header">Advertisement: </header>
      <img id="macncheese_Ad" class="img-thumbnail" src="../../assets/lifeguard-tower-8173913_640.jpg" alt="">
      <header id="macncheese_Ad_Header">Advertisement: </header>
      <img id="toothpaste_Ad" class="img-thumbnail" src="../../assets/iceland-1979445_640.jpg" alt="">
      <header id="toothpaste_Ad_Header">Advertisement: </header>
      
      <button id="btn_fake_x_mtndew">X</button>
      <button id="btn_fake_x_tacobell">X</button>
      <button id="btn_fake_x_macncheese">X</button>
      <button id="btn_fake_x_toothpaste">X</button>
  

    <div>
      <div class="multiselect-style">
        <Multiselect
            class="multiselect-blue"
            @select="console.log(value)"
            v-model="value"
            :close-on-select="true"
            :searchable="true"
            :mode="'single'"
            :placeholder="'select'"
            :options="[
    { value: 1, label: 'Buy' },
    { value: 2, label: 'Wiki' },
    { value: 3, label: 'Tos' },
  ]"
        />
      </div>
    </div>
  </div>
</template>


<script lang="ts">


import {ref} from "vue";
import Multiselect from "@vueform/multiselect";



export default{
  components: {
    Multiselect

  },
  data () {
    return {
      selected: ref(''),
      value: 0,
      options: [

      ]
    }
  },

  emits: [
      'addLevel',
      'showPopup',
      'showTosPopup'

  ],

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
    getCurrentLevel (): number {
      return this.currentLevel;
    }
  },
  watch: {
    value () {
      if (this.value === 3) {
        this.$emit('showTosPopup')
      }
    }

  },

}


</script>

<style src="@vueform/multiselect/themes/default.css"></style>


<style>

iframe{
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;

}




.page_Header {
  height: 40%;
  width: 40%;
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  padding: 10px -20px 20px;
  transform: translate(75%, 10%);
  
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
  --ms-tag-bg: #DBEAFE;
  --ms-tag-color: #2563EB;
  position: absolute;
  top: 40%;
  left: 50%;
  width: 30%;
  transform: translate(-50%, -50%);
}



header {
  font-weight: 500;
  font-size: 2.6rem;
  text-align: center;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  
}

#headerImg{
  width: 350px;
  height: 75px;
}

#arrow1{
  
  position: absolute;
  height: 12.5%;
  transform: rotate(15deg);
  top: 60%;
  left: 32%;
}
#arrow2{
  
  position: absolute;
  height: 12.5%;
  transform: scaleX(-1) rotate(15deg);

  top: 60%;
  left: 58%;
}

#mtndew_Ad{
  border-radius: 2px;
  border: solid #000;

  position: absolute;
  height: 25%;
  width: 15%;
  top: 70%;
  left: 82%;
}
#mtndew_Ad_Header{
  background: #e4e4e4;
  text-align: left;
  padding: 5px;
  width: 4.5%;
  position: absolute;
  font-size: 10px;
  top: 69%;
  left: 84%;
}

#btn_fake_x_mtndew{
  font-size: 13px;
  position: absolute;
  top: 69%;
  left: 96%;
  border-radius: 3px;
}

#tacobell_Ad{

  border-radius: 3px;

  position: absolute;
  height: 25%;
  width: 15%;
  top: 15%;
  left: 82%;
}

#tacobell_Ad_Header{
  background: #e4e4e4;
  text-align: left;
  padding: 5px;
  width: 4.5%;
  position: absolute;
  font-size: 10px;
  top: 14%;
  left: 84%;
}

#btn_fake_x_tacobell{
  font-size: 13px;
  position: absolute;
  top: 15%;
  left: 96%;
  border-radius: 3px;
}

#macncheese_Ad{

  border-radius: 2px;
  border: solid #000;

  position: absolute;
  height: 25%;
  width: 15%;
  top: 14%;
  left: 2%;
}
#macncheese_Ad_Header{
  background: #e4e4e4;
  text-align: left;
  padding: 5px;
  width: 4.5%;
  position: absolute;
  font-size: 10px;
  top: 13%;
  left: 4%;
}


#btn_fake_x_macncheese{
  font-size: 13px;
  position: absolute;
  top: 14%;
  left: 16%;
  border-radius: 3px;
}

#toothpaste_Ad{

  border-radius: 2px;
  border: solid #000;

  position: absolute;
  height: 25%;
  width: 15%;
  top: 70%;
  left: 2%;
}

#toothpaste_Ad_Header{
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

#btn_fake_x_toothpaste{
  font-size: 13px;
  position: absolute;
  top: 70%;
  left: 16%;
}

#button1{
  /*don't even ask*/
  
  font-weight: 400;
  font-size: 25px;
  
	position: absolute;
  
  top: 75%;
  left: 45%;
	z-index: 0;
	width: 200px;
	height: 100px;
	border-radius: 10px;
	overflow: hidden;
	padding: 25px;
	
	&::before {
		content: '';
		position: absolute;
		z-index: -1;
		left: -50%;
		top: -150%;
		width: 200%;
		height: 400%;
		background-color: #399953;
		background-repeat: no-repeat;
		background-size: 50% 50%, 50% 50%;
		background-position: 0 0, 100% 0, 100% 100%, 0 100%;
		background-image: linear-gradient(	#FF69B4, #FF69B4), linear-gradient( #ff51ff, #ff51ff), linear-gradient(#ff2cff, #ff2cff), linear-gradient(#F64A8A, #F64A8A);
		animation: rotate 5s linear infinite;
	}
	

}



@keyframes rotate {
	100% {
		transform: rotate(1turn);
	}
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
