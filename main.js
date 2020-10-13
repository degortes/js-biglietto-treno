var age = prompt('inserisci la tua età');
var distance = prompt('inserisci i Km da percorrere');
var price = distance*0.21;
var senior_fare = price-(price*0.2)
var junior_fare = price-(price*0.4)


document.getElementById('distance').innerHTML = distance;


if (age < 18) {
    console.log('il biglietto costa ' + Math.round(junior_fare*100)/100 + ' sei giovane e hai lo sconto del 20%');
    document.getElementById('price').innerHTML = Math.round(junior_fare*100)/100;
    document.getElementById('fare').innerHTML = 'tariffa Junior';
} else if (age > 65) {
    console.log('il biglietto costa ' + Math.round(senior_fare*100)/100 + ' sei vecchio e hai lo sconto del 40%');
    document.getElementById('price').innerHTML = Math.round(senior_fare*100)/100;
    document.getElementById('fare').innerHTML = 'tariffa Senior';


} else {
    console.log('il biglietto costa ' + Math.round(price*100)/100);
    document.getElementById('price').innerHTML = Math.round(price*100)/100;

}
