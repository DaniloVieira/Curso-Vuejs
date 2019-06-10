new Vue({
        el: '#exercise',
        data: {
            value: 0
            
        },
        computed:{
            result: function(){
                console.log('computed');
                return this.value < 37 ? 'not there yet' : 'done';
            }
        },
        watch:{
            result: function(value){
                console.log('timeout')
                var vm = this;
                setTimeout(function(){
                    vm.value = 0;
                }, 5000);
            }
        }
    });