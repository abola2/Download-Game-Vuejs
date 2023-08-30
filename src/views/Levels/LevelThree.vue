<template>
    <div class="level3" v-show="getCurrentLevel === 3">
    <header id="lvl3Header">That level was tricky! <br/> Thankfully you won't have to deal with weird buttons ever again :D <br/> You've done well. So I gave you two buttons as extra.</Header>
    <div class="center-container" id="c-container">
    <button class="initialButton" @click="allTheButtons('initialButton1')">Download</button>
    <button class="initialButton" @click="allTheButtons('initialButton2')">Download</button>
    </div>
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
console.log(NumberOfClicks +','+ numberOfButtons +','+ nOfTimesButtonsCreated + ' id: ' + id); 
NumberOfClicks++;
const btn = document.getElementById(id)
btn?.remove();

if (NumberOfClicks >= numberOfButtons * nOfTimesButtonsCreated - (1 * nOfTimesButtonsCreated)) 
{
    console.log('all buttons clicked')
    
    document.getElementById('lvl3Header')!.textContent = "Hey you clicked them all! But still two remain. Which one could it be?";
    allButtonsClicked = true;
}
}

export default defineComponent({
components: {

},

emits: [
    'addLevel',
    'sudokuPopup',
    'gameEnd',
    'pokemonPopup'
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
    document.getElementById('lvl3Header')!.textContent = "Woops, that's a lot more than a few buttons. Just don't click that red one!";
    if (correctButton == iButton && allButtonsClicked) 
    {
        this.completeLevel();
        return;
    }

    else
    {
        correctButton = iButton;
        allButtonsClicked = false;
        
        nOfTimesButtonsCreated++;
        for (let i= 0; i < numberOfButtons; i++){
            console.log(i);
            let newButton = document.createElement('button');
            newButton.style.height = '30px';
            newButton.style.width = '100px';
            newButton.style.backgroundColor = '#0a66C2';
            newButton.style.color = '#ffffff';
            newButton.style.borderRadius = '25px';
            newButton.textContent = 'Download';
            newButton.id = 'b' + i + 'n' + nOfTimesButtonsCreated;
            console.log(newButton.id + "  " + newButton.className);
            let topPosition: number = Math.random()* (95 - 5);
            let leftPosition: number = Math.random()* (95 - 5);
            
            newButton.style.position = 'absolute';
            newButton.style.left = leftPosition + "%";
            newButton.style.top = topPosition + "%";
            
            switch (i)
            {
                case 1: // red button
                    newButton.onclick = () => this.allTheButtons(iButton);
                    newButton.style.backgroundColor = '#FF0000';
                    newButton.textContent = 'Don\'t press';
                    break;
                case 5:
                    
                    newButton.onclick = () => this.sudokuAndLevelProgress(newButton.id);
                    break;
                case 6:
                    
                    newButton.onclick = () => this.pokemonAndLevelProgress(newButton.id);
                    break;
                default:
                    newButton.onclick = function() { levelProgression(newButton.id) };
            }
            document.getElementById('c-container')!.appendChild(newButton);
        }
    }
    
    },
    completeLevel()
    {
    this.$emit('gameEnd')
    /*this.$emit('addLevel');*/
    },
    sudokuAndLevelProgress(id: string){
        this.$emit('sudokuPopup')
        levelProgression(id)
    },
    pokemonAndLevelProgress(id: string){
        this.$emit('pokemonPopup')
        levelProgression(id)
    },
}

})

</script>


<style scoped>



.center-container {
  gap: 50px 50px;
  padding: 40px 40px;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

header {
font-size: xx-large;
color: #2563EB;
}
.initialButton {
  background-color: #0a66C2;
  color: white;
  border-radius: 25px;
  height: 30px;
  width: 100px;
  top: 50%;
  left: 55%;
  gap: 10px;
  transform: translate(-50%, -50%);
}







</style>