new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        isActive: false,
        isAttacking: false,
        combatLog:[]
        
    },
    computed: {
        displayActions: function () {
            return isActive;
        }
    },
    methods: {
        startGame: function () {
            this.isActive = true;
        },
        attack:function(factor){
            console.log("attack cliqued!")
            var vm = this;
            vm.isAttacking = true;
            setTimeout(function(){
                damage = Math.floor(Math.random() * factor);
                vm.monsterHealth = vm.monsterHealth - damage;
                log
                vm.combatLog.unshift({message:'Player dealt '+damage+' damage', isPlayer:true});          
                setTimeout(function(){
                    damage = Math.floor(Math.random() * 15);
                    vm.playerHealth = vm.playerHealth - damage;
                    vm.combatLog.unshift({message:'Monster dealt '+damage+' damage', isPlayer:false});
                    vm.isAttacking = false;
                }, 2000)
            }, 2000)

           
         },
         heal:function(){
            console.log("heal cliqued!")
            var vm = this;
            vm.isAttacking = true;
            setTimeout(function(){
                heal = Math.floor(Math.random() * 5);
                //vm.playerHealth = Math.min(vm.playerHealth + heal, 100);
                vm.playerHealth = vm.playerHealth + heal;
                vm.combatLog.unshift({message:'Player healed '+heal+' damage', isPlayer:false});
                setTimeout(function(){
                    damage = Math.floor(Math.random() * 15);
                    vm.playerHealth = vm.playerHealth - damage;
                    vm.combatLog.unshift({message:'Monster dealt '+damage+' damage', isPlayer:false});
                    vm.isAttacking = false;
                }, 2000)                
            }, 2000)
         }
    }
})