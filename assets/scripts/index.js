function handleMouseEnter() {
    this.classList.add('s-card--hovered');  /*this é o elem. c/ o mouse em cima, e modifica a classe*/
    document.body.id = `${this.id}-hovered`;  
}
function handleMouseLeave() {  /*qd mouse sair*/
    this.classList.remove('s-card--hovered');  /*remove essa classe hovered*/
    document.body.id = ``;
}

function addEventListenersToCards() {  
    const cardElements = document.getElementsByClassName('s-card');  
    
    for (let index = 0; index < cardElements.length; index++) {  /*loop p/ cada card*/
        const card = cardElements[index];  /*pega o elemento i do loop*/
        card.addEventListener('mouseenter', handleMouseEnter);  /*qd passa mouse chama funçao*/
        card.addEventListener('mouseleave', handleMouseLeave);  /*ao contrario*/
    }
}
document.addEventListener('DOMContentLoaded', addEventListenersToCards, false);

function selectCarouselItem(selectedButtonElement) {  //rotaçao bandeja qd clicar no botão
    const selectedItem = selectedButtonElement.id;
    const carousel = document.querySelector('.s-cards-carousel')  //pega elem 
    const transform = carousel.style.transform;  //pega valor do transform dentro do style
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);  //pegar valor rotateY
    const rotateYDeg = -120 * (Number(selectedItem) -1); //pegar novo grau rotaçao eixo y que precisamos aplicar em cada um, os 120 foram 360/3 cards, negativo é sentido anti-horario, number converte id em n
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`); //aplicar esse valor no transform para bandeja girar: novo valor pra transform, pega valor anterior, substituir 
    
    carousel.style.transform = newTransform;  //transforma img das figuras

    const activeButtonElement = document.querySelector('.s-controller__button--active'); //deixa botão ativo, que estava
    activeButtonElement.classList.remove('s-controller__button--active');  //remove do botão (ñ usar ponto)
    selectedButtonElement.classList.add('s-controller__button--active');  //pega elem que cliquei e add classe no ativo (ñ usar ponto)
}