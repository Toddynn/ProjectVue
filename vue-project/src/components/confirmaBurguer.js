async function fetchPost(){
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
    return fetchPost();
}

export default confirmaBurguer