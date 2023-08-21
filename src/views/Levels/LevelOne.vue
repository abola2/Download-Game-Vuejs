<!--
Level 1 idea

Install free version

Fill page with adds



-->




<template >


  <div class="level1" v-show="currentLevel === 1">
    <div class="page_Header">
      <img id="headerImg" src="../../assets/placeholder.png">
    </div>
    <div class="page_Header_Bottom"></div>
    <header class = "blue">You fool! That wasn't a real download button. <br> But maybe one of these is?</Header>
      <button id = "button1" v-if="value===1" @click="this.$emit('showPopup')">Download</button>
      <img id="arrow1" v-if="value===1" src="../../assets/clickbait_arrow.png" alt="">
      <img id="arrow2" v-if="value===1" src="../../assets/clickbait_arrow.png" alt="">
      <img id="mtndew_Ad" src="../../assets/fake_mtndew_ad.jpg" alt="">
      <header id="mtndew_Ad_Header">Advertisement: </header>
      <img id="tacobell_Ad" src="../../assets/fake_tacobell_ad.jpg" alt="">
      <header id="tacobell_Ad_Header">Advertisement: </header>
      <img id="macncheese_Ad" src="../../assets/fake_macncheese_ad.png" alt="">
      <header id="macncheese_Ad_Header">Advertisement: </header>
      <img id="toothpaste_Ad" src="../../assets/fake_toothpaste_ad.jpg" alt="">
      <header id="toothpaste_Ad_Header">Advertisement: </header>
      
      <button id="fake_x_mtndew">X</button>
      <button id="fake_x_tacobell">X</button>
      <button id="fake_x_macncheese">X</button>
      <button id="fake_x_toothpaste">X</button>
  

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
      'showPopup'

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
      if (this.value === 2) {
        alert("Redirecting to wiki. Have fun ;)")
      }
      else if (this.value === 3) {
        alert("Redirecting to Tos.")
      }
    }

  },

}


</script>

<style src="@vueform/multiselect/themes/default.css"></style>


<style>


.page_Header {
  background: linear-gradient(to left, #000 0%, #333 50%, #868787 75%, #DBEAFE 100%);
  height: 100px;
  width: 100%;
  position: absolute;
  top: 0%;
  left: 0%;
  
}

.page_Header_Bottom {
  background: linear-gradient(to left, darkred 25%, #ffcccb 100%);
  height: 15px;
  width: 100%;
  position: absolute;
  top: 100px;
  left: 0%;

}

.multiselect-blue {
  --ms-tag-bg: #DBEAFE;
  --ms-tag-color: #2563EB;
  width: 150px;
  position: absolute;
  top: 40%;
  left: 50%;
  width: 30%;
  transform: translate(-50%, -50%);
}
.typo__label{
  position: absolute;
  top: 76%;
  left: 70%;
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
  border: #000;
  border-radius: 2px;
  border-style: solid;

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
  width: 3.5%;
  height: 2%;
  position: absolute;
  font-size: 10px;
  top: 69%;
  left: 84%;
}

#fake_x_mtndew{
  height: 2%;
  font-size: 13px;
  position: absolute;
  top: 70%;
  left: 96%;
}

#tacobell_Ad{
  
  border: #000;
  border-radius: 2px;
  border-style: solid;

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
  width: 3.5%;
  height: 2%;
  position: absolute;
  font-size: 10px;
  top: 14%;
  left: 84%;
}

#fake_x_tacobell{
  height: 2%;
  font-size: 13px;
  position: absolute;
  top: 15%;
  left: 96%;
}

#macncheese_Ad{
  
  border: #000;
  border-radius: 2px;
  border-style: solid;

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
  width: 3.5%;
  height: 2%;
  position: absolute;
  font-size: 10px;
  top: 13%;
  left: 4%;
}


#fake_x_macncheese{
  height: 2%;
  font-size: 13px;
  position: absolute;
  top: 14%;
  left: 16%;
}

#toothpaste_Ad{
  
  border: #000;
  border-radius: 2px;
  border-style: solid;

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
  width: 3.5%;
  height: 2%;
  position: absolute;
  font-size: 10px;
  top: 69%;
  left: 4%;
}

#fake_x_toothpaste{
  height: 2%;
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
  left: 43%;
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

#button2 {
  position: absolute;
  top: 75%;
  left: 45%;
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
