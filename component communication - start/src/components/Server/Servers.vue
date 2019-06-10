<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li      
                    class="list-group-item"
                    v-for="server in servers">
                    
                        <span @click="detailServer(server)">
                            Server #{{ server.id }} - Status:{{server.status}}
                        </span>                     
                   
                
            </li>
        </ul>
    </div>
</template>

<script>
import {eventBus} from "../../main.js";
export default {
    data() {
        return {
            servers: [
                {id: 1, status:'Normal' },
                {id: 2, status:'Critcal' },
                {id: 3, status:'Unknown' },
                {id: 4, status:'Normal' }

            ]
        }
    },
    methods: {
        detailServer(server) {
            console.log(server);
            //this.$emit('detailServer', server);
            eventBus.evtBusDetailServer(server);
            
        }
    }
}
</script>


<style>

</style>
