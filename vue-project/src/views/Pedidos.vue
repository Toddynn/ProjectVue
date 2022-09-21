<template>
  <div class="main-container">
    <h1>PEDIDOS</h1>
    <Dashboard></Dashboard>
  </div>
</template>

<script>
  import Dashboard from "../components/Dashboard.vue";
  export default{
    name: "Pedidos",
    components:{
      Dashboard
    }
  }
</script>