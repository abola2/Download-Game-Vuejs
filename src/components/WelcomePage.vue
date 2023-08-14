<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="blue">{{ msg }}</h1>
    <h3>
      Welcome to the funny download game. Start the game by downloading a very nonsuspicious "program"
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  
}

h3 {
  font-size: 1.2rem;  
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.greetings h1,

.greetings h3 {
  text-align: center;
  
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: center;
  }
}
</style>
