var age = parseInt(prompt('inserisci la tua età'));
var distance = parseInt(prompt('inserisci i Km da percorrere'));
var price = distance*0.21;

document.getElementById('distance').innerHTML = distance;

if ( isNaN(age) || isNaN(distance) ) {
    alert('Devi inserire dei numeri!!! aggiorna la pagina e riprova')
} else if (age >= 18 && age <= 65) {
    document.getElementById('price').innerHTML = price.toFixed(2);
} else if (age < 18) {
    document.getElementById('price').innerHTML = (price-(price*0.2)).toFixed(2);
    document.getElementById('fare').innerHTML = 'Tariffa Junior';
} else {
    document.getElementById('price').innerHTML = (price-(price*0.4)).toFixed(2);
    document.getElementById('fare').innerHTML = 'Tariffa Senior';
}
