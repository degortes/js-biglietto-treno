var age = parseInt(prompt('inserisci la tua età'));
var distance = parseInt(prompt('inserisci i Km da percorrere'));
var price = distance*0.21;

document.getElementById('distance').innerHTML = distance;

if ( isNaN(age) || isNaN(distance) || distance < 0 || age > 0) {
    alert('Devi inserire dei numeri validi!!! aggiorna la pagina e riprova')
    document.getElementById('null').innerHTML = 'aggiorna e riprova'
} else if (age >= 18 && age <= 65) {
    document.getElementById('price').innerHTML = price.toFixed(2);
} else if (age < 18) {
    document.getElementById('price').innerHTML = (price-(price*0.2)).toFixed(2);
    document.getElementById('fare').innerHTML = 'Tariffa Junior';
} else {
    document.getElementById('price').innerHTML = (price-(price*0.4)).toFixed(2);
    document.getElementById('fare').innerHTML = 'Tariffa Senior';
}
