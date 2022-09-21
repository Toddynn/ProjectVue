<template>
    <div class="tableBurguer" v-if="burguers">
        <div class="headerTable">
            <div class="rowHeader">
                <div class="headerId">#:</div>
                <div class="headerCliente">Cliente:</div>
                <div class="headerBread">Pão:</div>
                <div class="headerSteak">Carne:</div>
                <div class="headerOptions">Opcionais:</div>
                <div class="headerActions">Ações:</div>
            </div>
            
        </div>
        <div class="rowsOrders">
            <div class="rowOrder" v-for="burguer in burguers" :key="burguer.id">
                <div class="orderId">{{burguer.id}}</div>
                <div class="orderName">{{burguer.nome}}</div>
                <div class="orderBread">{{burguer.pao}}</div>
                <div class="orderSteak">{{burguer.carne}}</div>
                <div class="oderOptions">
                    <ul v-for="(opcional, index) in burguer.opcionais" :key="index">
                        <li>{{opcional}}</li>
                    </ul>
                </div>
                <div class="containerSelect">
                    <select name="status" class="status" @change="updateBurguer($event, burguer.id)">
                        <option :value="s.tipo" v-for="s in status" :key="s.id" :selected="burguer.status == s.tipo">{{s.tipo}}</option>
                    </select>
                    <button class="btn-delete" @click="deleteBurguer(burguer.id)">Cancelar Pedido</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Dashboard",
        data() {
            return {
                burguers: null,
                burguer_id: null,
                status: []
            }
            },
            methods: {
            async getPedidos() {
                const req = await fetch('http://localhost:3000/burguers');
                const data = await req.json();
                this.burguers = data;
                // Resgata os status de pedidos
                this.getStatus()
            },
            async getStatus() {
                const req = await fetch('http://localhost:3000/status');
                const data = await req.json();
                this.status = data;
            },
            async deleteBurguer(id) {
                const req = await fetch(`http://localhost:3000/burguers/${id}`, {
                    method: "DELETE"
                });
                const res = await req.json();
                this.getPedidos();
            },
            async updateBurguer(event, id) {
                const option = event.target.value;
                const dataJSON = JSON.stringify({status: option});
                const req = await fetch(`http://localhost:3000/burguers/${id}`, {
                    method: "PATCH",
                    headers: { "Content-Type" : "application/json" },
                    body: dataJSON
                });
                const res = await req.json();
                console.log(res);
            }
        },
        mounted () {
            this.getPedidos();
        }
    }
</script>

<style scoped>
    .tableBurguer{
        max-width: 85vw;
        margin: 0 auto;
    }
    
    .headerTable{
        font-weight: bold;
        padding: 10px;
        border-bottom: 3px solid #333;
        width: 100%;
    }

    .rowHeader{
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
    }
    .rowHeader div{
        position: relative;
    }
    .headerId{
        left: 0;
    }.headerCliente{
        right: 15px;
    }.headerBread{
        right: 40px;
    }.headerSteak{
    right: 57px;
    }.headerOptions{
        right: 85px;
    }.headerActions{
        right: 50px;
    }

    .rowsOrders{
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        border-bottom: 3px solid #333;
    }
    .rowOrder{
        width: 100%;
        padding-top: 15px;
        padding-bottom: 15px;
        border-bottom: 1px solid #222;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .containerSelect{
        display: flex;
        flex-direction: column;
        width: 150px;
    }
    select{
        width: 100%;
        margin: 0 auto;
        margin-bottom: 15px;
        padding: 10px;
        background-color: #fcba03;
        color: #222;
        font-weight: bold;
        font-size: 12px;
        border: 2px solid #fcba03;
        cursor: pointer;
        transition: 0.5s;
    }
    select:hover{
        transform: scale(101%);
        color: #222;
        background-color: transparent;
        border: 2px solid #222;
    }
    .btn-delete {
        background-color: #222;
        color:#fcba03;
        font-weight: bold;
        border: 2px solid #222;
        padding: 10px;
        width: 100%;
        font-size: 12px;
        margin: 0 auto;
        cursor: pointer;
        transition: 0.5s;
    }
    .btn-delete:hover{
        transform: scale(101%);
        color: #222;
        background-color: transparent;
        border: 2px solid #222;
    }
</style>