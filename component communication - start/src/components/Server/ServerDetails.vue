<template>
    <div class="col-xs-12 col-sm-6">
        <h1>Server Detail</h1>
        <h2>number:#{{serverDetail.id}}</h2>
        <h2>status:{{serverDetail.status}}</h2>
        <button @click="updateStatus('Normal')" >Start</button>
        <button @click="updateStatus('Stoped')" >Stop</button>
    </div>

</template>

<script>

export default {
    props: {
        serverDetail: {
            type: Object,
            required: true
        }
    },
    methods: {
        updateStatus(strStatus) {
            this.serverDetail.status = strStatus;
            
        }
    }
}
</script>


<style>

</style>
