/* criar uma ação para a div menu-opener que é os 3 tracinhos, para quando ela 
 for clicada,  quando clicado ele pega o menuzinho ai ve se tem a class opened 
 ele esconde se não tem ele mostra o menu de navegação é isso que o toggle faz */
document.querySelector('.menu-opener').addEventListener('click', () =>{
let nav = document.querySelector('header nav');
nav.classList.toggle('opened');
});

/* função tempo em tempo para mudar os depoimentos da pagina um loop mudando um pro outo
 de tempo em tempo    */

/*/ procura os slide, se não achar nenhum returna*/
const toggleSlider = () => {
    const slides = document.querySelectorAll('input[name=slider]');
    if (slides.length === 0) return;
    /* pega o que ta marcado*/
    let current = document.querySelector('input[name=slider]:checked');
    /* se não achar nenhum vai marcar o primeiro chamado cheked e marca como true*/
    if(!current){
        current.document.querySelector('input[name=slider]');
        current.setAttribute('checked', true);
    } /*item que esta ai o id dele ai pega o 1 se existe o 2 pega o 2 */
    let id = parseInt(current.getAttribute('id').split('-')[1]);
    if(id + 1 <= slides.length){
        id++; 
        /* se não volta oa inicio*/       
    }else {
        id = 1;
    }
    /*da um loop para remover o atributo marcado o checked e  desmarca todo mundo,
     ai marca o id e seta o atributo novamente como true*/

    for (let slider of slides) slider.removeAttribute('checked');
    document.querySelector(`#slider-${id}`).setAttribute('checked', true);
}
setInterval(toggleSlider, 5000);/* setInterval chama a função de 5 em 5 seguntos*/