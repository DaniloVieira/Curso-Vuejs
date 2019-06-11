<template>
    <div>
       <h3>The Quote</h3>
       <button @click="counter++" >Increase!</button>
       <!-- IF THIS IS DESTROYED IT SHOULD RETURN TO ZERO -->
       <p>{{counter}}</p>

    </div>
</template>
<script>
export default {
    data() {
        return {
            counter: 0
        }
    },
    destroyed () {
        console.log('Destroyed!');
    },
    deactivate(){
        console.log('Deactvated!');
    },
    activate(){
        console.log('Actvated!');
    }
   
    
}
</script>
<style>
    
</style>