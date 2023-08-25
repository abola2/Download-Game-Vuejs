<template>
    <div class="level3" v-show="getCurrentLevel === 3">
    <header>That level was tricky! <br/> Thankfully you won't have to deal with weird buttons ever again :D</Header>
    
    </div>

</template>

<script lang="ts">

import {defineComponent} from "vue";
let NumberOfClicks: number = 0;
let clicksForLevelCompletion: number = 1000;
export default defineComponent({
components: {

},

emits: [
    'addLevel',
    'showPopup'
],

props: {
    currentLevel: {
    default: 0,
    type: Number
    }
},
computed: {
    getCurrentLevel (): number {
    return this.currentLevel;
    }
},
watch: {
    getCurrentLevel () {
    console.log("hidden " + this.currentLevel);
    }

},
methods: {
    /*completes level once the button has been clicked x times. If the button hasn't been clicked x times moveButton teleports the button to a random position on the screen, and makes it a little easier to see.*/
    moveButton() {
    if (NumberOfClicks >= clicksForLevelCompletion)
    {
        console.log("level completed");
        /*this.$emit('addLevel');*/
    }
    else 
    {
        console.log(NumberOfClicks);
        NumberOfClicks++;
        let topPosition: number = Math.random()* (100 - 0) + 1;
        let leftPosition: number = Math.random()* (100 - 0) + 1;
        document.getElementById('movingButton')!.style.left = leftPosition + "%";
        document.getElementById('movingButton')!.style.top = topPosition + "%";
        let opacity: string = ((NumberOfClicks + 1) /10).toString();
        document.getElementById('movingButton')!.style.opacity = opacity;
        console.log("positions: ", topPosition,", ", leftPosition);
    }
    }
}

})

</script>


<style scoped>

header {
color: #2563EB;
}
#movingButton {
position: absolute;
opacity: 0.05;
height: 5%;
width: 10%;
top: 0%;
left: 0%;
}

#lvl2button {
position: absolute;
/*always keep this button smaller than #movingButton,
so you can click it even if they are on top of each other */
height: 4%;
width: 9%;
top: 50%;
left: 45%;
}

</style>