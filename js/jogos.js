const busca = document.querySelector("#txtBusca")
const game = document.querySelector('#game')

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

busca.addEventListener('keyup', function(event) {
    if (event.key == 'Enter') {
        buscarNome(busca.value)
        
}
    
})
