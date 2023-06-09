const controle = document.querySelectorAll("[data-controle]") 
const estatistica = document.querySelectorAll("[data-estatistica]")
const iniciarProd = document.querySelector("[data-producao]")

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (element) => {
    element.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizarDados(evento.target.dataset.peca)
    })
})

function manipulaDados(operador, elemento){
    let atributo = elemento.querySelector("[data-contador]")

    if(operador === "-"){
        atributo.value = parseInt(atributo.value) - 1
    }else{
        atributo.value = parseInt(atributo.value) + 1
    }
}

function atualizarDados(peca){

    estatistica.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    });   
}

function trocaImagem(cor){
    document.querySelector(".robo").src="./img/Robotron 2000 - "+cor+"/Robotron 2000 - "+cor+".png";
 }

iniciarProd.addEventListener("click", ()=>{
    window.alert("**INICIANDO PRODUÇÃO*** VAMOS COMBATER OS ALIENS!")
})