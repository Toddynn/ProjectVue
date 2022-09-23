<template>
    <div>
        <form class="burguerForm" method="POST" @submit="createBurguer">
            <div class="inputContainer">
                <label for="nome" >Nome do Cliente:</label>
                <input type="text" id="nome" name="nome" v-model="nome" required placeholder="Digite seu nome">
            </div>
            <div class="inputContainer">
                <label for="pao">Escolha o Pão:</label>
                <select name="pao" id="pao" v-model="pao" required>
                    <option value="" disabled>Selecione seu pão</option>
                    <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">{{pao.tipo}}</option>
                </select>
            </div>
            <div class="inputContainer">
                <label for="carne">Escolha a Carne do seu Hambúrguer:</label>
                <select name="carne" id="carne" v-model="carne" required>
                    <option value="" disabled>Selecione a carne</option>
                    <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">{{carne.tipo}}</option>
                </select>
            </div>
            <div class="opcionaisContainer inputContainer">
                <label class="titleOpcionais" for="opcionais">Opcionais?: </label>
                <div class="checkboxContainer" v-for="opcional in opcionaisdata" :key="opcional.id">
                    <label class="optionsText"><input type="checkbox" name="opcionais" v-model="opcionais" :value="opcional.tipo"><span>{{opcional.tipo}}</span></label>
                </div>
            </div>
            <div class="inputContainer">
                <input type="submit" class="btn-submit" value="Criar meu Hambúrguer">
            </div>
        </form>
    </div>
</template>

<script>
    import Swal from "sweetalert2";

    export default{
        name: "BurguerForm",
        data(){
            return{
                paes:null,
                carnes:null,
                opcionaisdata:null,
                nome:null,
                pao:null,
                carne:null,
                opcionais:[],
            }
        },
        methods:{
            async getIngredientes(){
                const req = await fetch("http://localhost:3000/ingredientes");
                const data = await req.json();

                this.paes = data.paes;
                this.carnes = data.carnes;
                this.opcionaisdata = data.opcionais;
            },
            async createBurguer(e){
                e.preventDefault();
                
                const data = {  
                    nome: this.nome,
                    carne: this.carne,
                    pao: this.pao,
                    opcionais: Array.from(this.opcionais),
                    status: 'Solicitado',
                }

                const dataJSON = JSON.stringify(data);
                const req = await fetch("http://localhost:3000/burguers",{
                    method: "POST",
                    headers: { "Content-type" : "application/json" },
                    body: dataJSON
                });
                const res = await req.json();

                this.nome = '';
                this.carne = '';
                this.pao = '';
                this.opcionais = [];
                
                Swal.fire({
                    title: `Olá ${this.nome}, Seu pedido ${res.id}é:`,
                    text: `
                        Pão:${this.pao},
                        Carne:${this.carne},
                        Opcionais:${this.opcionais}
                    `,
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Sim! Esse é meu pedido',
                    cancelButtonText: 'Refazer pedido'
                }).then((result) => {
                    if (result.isConfirmed) {

                    }
                })
            }
            
        },
        mounted(){
            this.getIngredientes();
        },
        components:{
            Swal
        }
    }
</script>

<style scoped>
    .burguerForm{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .inputContainer{
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        text-align: start;
        justify-content: center;
        width: 50%;
    }

    label{
        font-weight: bold;
        margin: 10px;
        margin-left: 0%;
        color: #222;
        padding: 5px 10px;
        border-left: 4px solid #FCBA03;
    }

    input, select{
        padding: 5px 10px;
        width: auto;
    }

    .opcionaisContainer{
        flex-direction: row;
        flex-wrap: wrap;
    }

    .titleOpcionais{
        width: 100%;
    }

    .checkboxContainer{
        display: flex;
        align-items: flex-start;
        width: 35%;
        margin-bottom: 20px;
        margin-left: 4em;
    }
    
    .optionsText{
        margin: 0;
        border: 0;
    }

    span{
        width: auto;
        font-weight: bold;
        margin-left: 10px;
    }
    .checkboxContainer input{
        width: auto;
    }

    .btn-submit{
        background-color: #222;
        color: #FCBA03;
        font-weight: bold;
        border: 2px solid #FCBA03;
        padding: 10px;
        font-size: 16px;
        width: 50%;
        margin: 0 auto;
        cursor: pointer;
        transition: 0.7s;
    }

    .btn-submit:hover{
        color: #222;
        border: 2px solid #222;
        background-color: transparent;
        transform: scale(101%);
    }
</style>