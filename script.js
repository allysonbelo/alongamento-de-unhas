//aplica a classe .show no container ao clicar no botão de menu
document.querySelector(".menu").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show")
)

//aplica a classe .scrolling no cabeçalho ao rolar a página
window.addEventListener("scroll", function () {
    let header = document.querySelector("header")
    header.classList.toggle("scrolling", window.scrollY > 0)
})

//pega a posição exata de um determinado elemento na página
const p = document.querySelector("#posicao")
const posicoes = p.getBoundingClientRect()
console.log(posicoes)


//animando elementos com scroll da página
const target = document.querySelectorAll("[data-anime]")
const animationClass = "animate"

function animeScroll() {
    const windowTop = window.scrollY + ((window.innerHeight * 3) / 4 + -30)
    target.forEach(function (element) {
        if ((windowTop) > element.offsetTop) {
            element.classList.add(animationClass)
        } else {
            element.classList.remove(animationClass)
        }
    })
}

animeScroll()

window.addEventListener('scroll', function () {
    animeScroll()
})



//galeria
let imagens = document.querySelectorAll('.small-img')
let modal = document.querySelector('.modal')
let modalImg = document.querySelector('#modal-img')
let btClose = document.querySelector('#bt-close')
let srcVal = ""

for(let i = 0; i < imagens.length; i++){
    imagens[i].addEventListener('click', function(){
        srcVal = imagens[i].getAttribute('src')
        modalImg.setAttribute('src', srcVal)
        modal.classList.toggle('modal-active')
    })
}

btClose.addEventListener('click', function(){
    modal.classList.toggle('modal-active')
})

//botão comprar
function comprar(){
    window.open("https://go.hotmart.com/F57786036J?ap=74d0", "_blank")
    // location.href = "https://go.hotmart.com/F57786036J?ap=74d0", "_blank";
}