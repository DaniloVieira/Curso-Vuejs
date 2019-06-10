<template>
    <ul class="list-group">
        <app-serve v-for="server in servers" :serverData="{name: server.name}"></app-serve>
    </ul>
</template>
<script>
import Server  from './Server.vue' ;
export default {
    data() {
        return {
            servers: [
                {
                    name: 'Atalaia',
                    status: 'running'
                }
            ]
        }
    },
    components: {
        'app-serve': Server
    }    
}
</script>

