<template>
    <div>
        <div class="form-group">
            <label for="firstName">First name</label>
            <input type="text" id="firstName" class="form-control" @keyup="getFirstName($event)" :value="firstName">
          </div>
		  <div class="form-group">
            <label for="lastName">Last name</label>
            <input type="text" id="lastName" class="form-control" @keyup="getLastName($event)" :value="lastName">
          </div>
    </div>
</template>
<script>
export default {
    
    props: ['value'],
    
        computed: {
            firstName() {
                return this.value.split(" ")[0];
            },
            lastName() {
                return this.value.split(" ")[1];
            }
        },
    methods: {
        getFirstName(event) {
            var evtValue = event.target.value;
            console.log( 'lastName:'+ this.lastName);    
            console.log( 'getFistName:'+ evtValue + ' ' +lname);
            this.$emit('input', evtValue + ' ' +lname);
        },

        getLastName(event) {
            var evtValue = event.target.value;
            console.log( 'firstName:'+ this.firstName);        
            console.log( 'getLastName:'+ fname + ' ' +evtValue);        
            this.$emit('input', fname + ' ' +evtValue);
        }
    },
    
}
</script>
<style>

</style>


