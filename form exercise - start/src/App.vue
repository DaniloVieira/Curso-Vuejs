<template>
  <div class="container">
    <form v-if="!isSubmitted">
      <div class="row" >
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>Signup</h1>
          <hr>
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <!-- Mail -->
          <!-- Password -->
          <!-- Store Data? Yes/No -->
          <!-- 
		  <div class="form-group">
            <label for="firstName">First name</label>
            <input type="text" id="firstName" class="form-control" :value="userData.firstName">
          </div>
		  <div class="form-group">
            <label for="lastName">Last name</label>
            <input type="text" id="lastName" class="form-control" :value="userData.lastName">
          </div> 
		  -->

		  <!-- <app-full-name :firstName="userData.firstName" :lastName="userData.lastName" @input="applyFullName"></app-full-name> -->
		  
		  <app-full-name v-model="userData.fullName" ></app-full-name>

		  <div class="form-group">
            <label for="email">Mail</label>
            <input type="text" id="email" class="form-control" :value="userData.email">
          </div>
		  <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" class="form-control" :value="userData.password">
		  </div>
		  <label for="storeData">Store data?</label>
		  <div id="storeData" class="form-group">
			<label for="radioYes">
				<input type="radio" id="radioYes" value="true" v-model="isStoreData"> YES
			</label>
			<label for="radioNo">
				<input type="radio" id="radioNo" value="false" v-model="isStoreData"> NO
			</label>
		  </div>

          <!-- Exercise 2 -->
          <!-- Only display the Form if it has NOT been submitted -->
          <!-- Display the Data Summary ONCE the Form HAS been submitted -->

          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
        </div>
      </div>
    </form>
    <hr>
    <div v-if="!isSubmitted" class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name:{{userData.fullName}}</p>
            <p>Mail:</p>
            <p>Password:</p>
            <p>Store in Database?:{{isStoreData ? 'YES' : 'NO'}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FullName from './components/FullName.vue'
export default {
	data() {
		return {
			userData: {
				fullName: null,
				firstName:null,
				lastName:null, 
				email:null,
				password:null
			},
			isStoreData: false,
			isSubmitted: false		
			}
	},
	methods: {
		applyFullName(fullname) {
			console.log('Here');
			console.log('Evento: ' + fullname);
			this.userData.fullName = fullname;
		}
	},
	components: {
		appFullName: FullName,
	}
};
</script>

<style>
</style>
