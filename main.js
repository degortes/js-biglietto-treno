var age = parseInt(prompt('inserisci la tua età'));
var distance = parseInt(prompt('inserisci i Km da percorrere'));
var price = distance*0.21;


document.getElementById('distance').innerHTML = distance;


if ( isNaN(age) || isNaN(distance) ) {
    alert('Devi inserire dei numeri!!! aggiorna la pagina e riprova')
} else if (age >= 18 && age <= 65) {
    console.log('il biglietto costa ' + Math.round(price*100)/100);
    document.getElementById('price').innerHTML = Math.round(price*100)/100;
} else if (age < 18) {
    console.log('il biglietto costa ' + Math.round((price-(price*0.2))*100)/100 + ' sei giovane e hai lo sconto del 20%');
    document.getElementById('price').innerHTML = Math.round((price-(price*0.2))*100)/100;
    document.getElementById('fare').innerHTML = 'tariffa Junior';
} else {
    console.log('il biglietto costa ' + Math.round((price-(price*0.4))*100)/100 + ' sei vecchio e hai lo sconto del 40%');
    document.getElementById('price').innerHTML = Math.round((price-(price*0.4))*100)/100;
    document.getElementById('fare').innerHTML = 'tariffa Senior';
}
