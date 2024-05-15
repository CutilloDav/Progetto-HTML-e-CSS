let parole = [ 'RUGBY LOVER','PROBLEM SOLVER','NAP LOVER','GAMER'];

let contatore = 0;

let paragrafo= document.querySelector(".carosello");

setInterval(update_carosello_parola, 1000);

function update_carosello_parola() {

    paragrafo.innerHTML= parole[contatore]

    contatore++;
    if (contatore >= parole.length){
        contatore= 0;
    }
}




