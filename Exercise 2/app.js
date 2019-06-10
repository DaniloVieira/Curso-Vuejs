new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods:{
            showAlert: function() {
                alert("test");
            },
            updateValue: function(event){
                console.log(event)
                this.value = event.target.value
            }
        }
    });