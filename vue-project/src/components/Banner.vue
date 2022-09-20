<template>
    <div class="main_banner">
        <h1>Make Your Burguer</h1>
    </div>
</template>

<script>
    export default{
        name: "Banner",
    }
</script>

<style scoped>
    h1{
        margin-bottom: 1em;
        padding: 50px;
        color: #FCBA03;
        font-size: 45px;
    }
    .main_banner{
        background-image: url("/img/burger.jpg");
        min-width: 90vw;
        min-height: 90vh;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: start;
    }
</style>