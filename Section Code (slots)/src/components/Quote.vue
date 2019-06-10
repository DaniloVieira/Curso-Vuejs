<template>
    <div>
        <div class="title">
            <slot name="title"></slot>
<<<<<<< HEAD
            <span><slot style="color: #ccc" name="subtitle"></slot>  The Subtitle </span>
=======
>>>>>>> master
        </div>
        <hr>
        <div>
            <slot ></slot>
        </div>

    </div>
</template>
<script>
export default {
   
    
}
</script>
<style scoped>
    div {
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center
    }
    h2 {
        color: red;
    }
<<<<<<< HEAD
    .title {
        font-style: italic
    }
=======
>>>>>>> master
</style>


