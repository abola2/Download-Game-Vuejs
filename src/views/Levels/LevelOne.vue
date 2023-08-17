<!--
Level 1 idea

Install free version

Fill page with adds



-->




<template >

  <PopupWindow


  />


  <div class="level1" v-show="currentLevel === 1">
    <header>You fool! That wasn't a real download button. <br> But maybe one of these is? 1 </Header>
    <button class = "button1" @click="this.$emit('showPopup')">Download</button>

    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option id="1"> Watch add to support develoment </option>
      <option id="2">Download for free</option>
      <option id="3">Support development</option>
    </select>
    <h2>Selected: {{ selected }}</h2>>
  </div>
</template>


<script lang="ts">


import {defineComponent, ref} from "vue";
import PopupWindow from "@/views/Functionality/PopupWindow.vue";



export default defineComponent({
  components: {
    PopupWindow

  },
  data () {
    return {
      selected: ref(),
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
    getCurrentLevel () {
      console.log("hidden " + this.currentLevel)
    }

  },
  methods: {

  }
})


</script>

<style>

header {
  font-weight: 500;
  font-size: 2.1rem;
  text-align: center;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  
}

#image1{
  
  position: absolute;
  height: 125px;
  transform: rotate(15deg);
  top: 20%;
  left: 30%;
}
#image2{
  
  position: absolute;
  height: 125px;
  transform: scaleX(-1) rotate(15deg);

  top: 20%;
  left: 60%;
}

#button1{
  /*don't even ask*/
  
  font-weight: 400;
  font-size: 25px;
  
	position: absolute;

  top: 40%;
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
