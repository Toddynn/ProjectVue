<template>
    <Banner></Banner>
    <div class="main-container">
        <h1>Monte seu Hambúrguer</h1>
        <BurguerForm></BurguerForm>
    </div>
</template>

<script>
    import Banner from "../components/Banner.vue";
    import BurguerForm from "../components/BurguerForm.vue";

    export default{
        name: "Home",
        components:{
            Banner,
            BurguerForm
        },
        
    }
</script>

<style scoped>

</style>