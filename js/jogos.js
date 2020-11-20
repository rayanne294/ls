const busca = document.querySelector("#txtBusca")
const game = document.querySelector('#game')
const filtro = document.querySelector('#place')

exibirTudo()
function buscarNome(x) {
    let conc = '' 
    for (let i of jogos){
       if (i.nome.includes(x)){
           conc += `<div><img class = "jogo" src = "${i.img}"><p>${i.desc} ${i.plataforma} <br>${i.valor}</p></div>`
        }
    }
    game.innerHTML = conc
}

function exibirTudo() {
    let y = ''
    for (let i of jogos) {
        y += `<div><img class = "jogo" src = "${i.img}"><p>${i.desc} ${i.plataforma} <br>${i.valor}</p></div>`
    }           
    game.innerHTML = y
}


busca.addEventListener('keypress', function(event) {
       buscarNome(busca.value)
    
})


function filtrar(plat) {
    let b = ''
    if (filtro.value == 'Todos'){
        exibirTudo()
        return
    }
    for (let i of jogos){
        if (i.plataforma.includes(plat)){
        b += `<div><img class = "jogo" src = "${i.img}"><p>${i.desc} ${i.plataforma} <br>${i.valor}</p></div>`
    }
    
    }
    game.innerHTML = b
}
filtro.addEventListener('click',function(){
    filtrar(filtro.value)

})