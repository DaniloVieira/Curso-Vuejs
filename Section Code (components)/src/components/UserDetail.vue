<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{switchName}}</p>
        <p>User Age: {{userAge}}</p>
        <button @click="resetName">reset</button>
        <button @click="resetFn()">reset</button>
    </div>
</template>

<script>
import {eventBus} from "../main.";
export default {
    props: {
        name: {
            type: Number,
            
            default: 'missing name'
        },
        resetFn: Function,
        userAge: Number
    },
    methods: {
        switchName() {
            return this.name.split("").reverse().join("");            
        },
        resetName(){
            this.name = 'Danilo';
            this.$emit('nameReseted', this.name);
        }
    },
    created () {//life cicle hook
        eventBus.$on('ageEdited', (age) => {
            this.userAge = age;
        });
    },
    
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
