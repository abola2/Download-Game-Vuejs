<!--
Level 1 idea

Install free version

Fill page with adds



-->




<template >


  <div class="level1" v-show="currentLevel === 1">
    <header>You fool! That wasn't a real download button. <br> But maybe one of these is? 1 </Header>
    <button class = "button1" @click="this.$emit('showPopup')">Download</button>

    <div>
      <label class="typo__label">Select with search</label>
      <div>
        <Multiselect
            class="multiselect-blue"
            @select="console.log(value)"
            v-model="value"
            :close-on-select="true"
            :searchable="true"
            :mode="'single'"
            :placeholder="'select'"
            :options="[
    { value: '1', label: 'Buy' },
    { value: '2', label: 'Wiki' },
    { value: '3', label: 'Tos' },
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
      value: null,
      options: [
       'wdwdwd',
        'efefwg',
        'wqdttt'
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
    getCurrentLevel () {
      console.log("hidden " + this.currentLevel)
    }

  },
  methods: {


  }
}


</script>
<style src="@vueform/multiselect/themes/default.css"></style>


<style>




.multiselect-blue {
  --ms-tag-bg: #DBEAFE;
  --ms-tag-color: #2563EB;
}



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
