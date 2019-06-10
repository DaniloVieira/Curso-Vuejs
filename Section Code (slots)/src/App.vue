<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
               <app-quote > 
                <h2 slot="title" >{{quoteTitle}}</h2>
                <p >A wonderful quote</p>
               </app-quote>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue'
<<<<<<< HEAD
    import Author from './components/Author.vue'
    import Quote from './components/Quote.vue'
    export default {
        data() {
            return {
                quoteTitle: 'The quote'
=======
    export default {
        data() {
            return {
                quoteTitle: 'The quote  '
>>>>>>> master
            }
        },
        components: {
            appQuote: Quote,
<<<<<<< HEAD
            appAuthor,
            appNew
=======
>>>>>>> master
        }
    }
</script>

<style>
</style>
