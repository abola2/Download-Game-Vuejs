<template>
    <div class="level3" v-show="getCurrentLevel === 3">
    <header>That level was tricky! <br/> Thankfully you won't have to deal with weird buttons ever again :D</Header>
    <button id="initialButton1" @click="allTheButtons('initialButton1')">Download</button>
    <button id="initialButton2" @click="allTheButtons('initialButton2')">Download</button>
    </div>

</template>

<script lang="ts">

import {defineComponent} from "vue";
let NumberOfClicks: number = 0;
let nOfTimesButtonsCreated: number = 0; // this exists so that when the user creates buttons multiple times they can still have different id:s
let numberOfButtons: number = 50;
let allButtonsClicked: boolean = false;
let correctButton: string = "";

function levelProgression(id: string)
    {
    console.log(NumberOfClicks + ' id: ' + id); 
    NumberOfClicks++;
    const btn = document.getElementById(id)
    btn?.remove();

    if (NumberOfClicks >= numberOfButtons)
    {
        console.log('all buttons clicked')
        allButtonsClicked = true;
    }
    }

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
    /*Creates a lot of buttons that delete on click. You have to click them all to complete the level.*/
    allTheButtons(iButton: string) {
    // if you clicked iButton, cleared all the buttons that it created, and then click iButton again then you can complete the level.
    if (correctButton == iButton && allButtonsClicked) 
    {
        this.completeLevel();
        return;
    }

    else
    {
        correctButton = iButton;
        allButtonsClicked = false;
        NumberOfClicks = 0;
        
        nOfTimesButtonsCreated++;
        for (let i= 0; i < numberOfButtons; i++){
            console.log(i);
            let newButton = document.createElement('button');
            newButton.style.height = '30px';
            newButton.style.width = '100px';
            newButton.textContent = 'Download';
            newButton.id = 'b' + i + 'n' + nOfTimesButtonsCreated;
            console.log(newButton.id);
            let topPosition: number = Math.random()* (95 - 5);
            let leftPosition: number = Math.random()* (95 - 5);
            
            newButton.style.position = 'absolute';
            newButton.style.left = leftPosition + "%";
            newButton.style.top = topPosition + "%";
            newButton.onclick = function() { levelProgression(newButton.id) };

            document.body.appendChild(newButton);
        }
    }
    
    },
    completeLevel()
    {
    console.log("level completed");
    /*this.$emit('addLevel');*/
    }
}

})

</script>


<style scoped>

header {
color: #2563EB;
}
#initialButton1 {
position: absolute;
height: 30px;
width: 100px;
top: 50%;
left: 55%;
}

#initialButton2 {
position: absolute;
height: 30px;
width: 100px;
top: 50%;
left: 45%;
}

</style>