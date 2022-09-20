<template>
    <footer id="footer">
        <p>Make Your Burguer &copy; 2022</p>
    </footer>
</template>

<script>
    export default{
        name: 'Footer',
    }
</script>

<style scoped>
    footer{
        position: absolute;
        bottom: -100vh;
        height: 10em;
        background-color: #222;
        border-top: 4px solid #111;
        color: #FCBA03;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
</style>