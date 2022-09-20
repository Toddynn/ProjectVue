<template>
    <header>
        <nav>
            <RouterLink to="/" id="logo_url">
                <img :src="logo" :alt="alt" id="logo">
            </RouterLink>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/Pedidos">Pedidos</RouterLink>
        </nav>
    </header>
</template>

<script>
    export default{
        name: 'Navbar',
        props: ["logo","alt"]
    }
</script>

<style scoped>
    nav{
        background-color: #222;
        border-bottom: 4px solid #111;
        padding: 15px 50px;
        display: flex;
        justify-content: end;
        align-items: center;
        flex-wrap: nowrap;
        flex-direction: row;
        align-content: center;
    }

    #logo_url{
        margin: auto;
        margin-left: 0%;
    }

    #logo{
        width: 40px;
        height: 40px;
    }

    a{
        justify-content: end;
        color:  #FCBA03;
        text-decoration: none;
        margin: 12px;
        transition: 0.5s;
    }
    a:hover{
        color:white;
    }
</style>