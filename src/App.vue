<template >

  <WelcomePage
    @addLevel="addLevel"
    :current-level="currentLevel">
  </WelcomePage>


  <LevelOne
    :current-level="currentLevel">

  </LevelOne>


  <RouterView />
</template>


<script lang="ts">
import WelcomePage from './components/WelcomePage.vue'
import {defineComponent} from "vue";
import LevelOne from "@/views/Levels/LevelOne.vue";

export default defineComponent( {

  data () {
    return {
      hide: true,
      currentLevel: 0
    }
  },

  components: {
    LevelOne,
    WelcomePage
  },

  emits: {

  },
  props: {

  },
  methods: {
    addLevel() {
      console.log("current level: " + this.currentLevel)
      this.currentLevel++
    }

  },

  watch: {
    currentLevel () {
      alert(this.currentLevel)
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
