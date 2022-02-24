
let price;
let age;
let discount;
let distance;
const namePassenger = document.getElementById('nome-cognome');
const ageButton = document.getElementById("eta");
const ageSelector = document.getElementById("seleziona-eta");
const underAge = document.getElementById("minorenne");
const stardardAge = document.getElementById("maggiorenne");
const overAge = document.getElementById("over-65");
const ticket = document.getElementById("my-ticket");
const generate = document.getElementById('genera');
const annull = document.getElementById('annulla');
const incorrectData = document.getElementById('warning');

ageButton.addEventListener('click', function(){
    ageSelector.classList.remove('d-none');
});

underAge.addEventListener('click' , function(){
    age = "Minorenne";    
    discount = 0.83;
    document.getElementById("eta").innerHTML = age ;
    document.getElementById("offerta").innerHTML = "Biglietto Junior";
    ageSelector.classList.add('d-none');
});
stardardAge.addEventListener('click' , function(){
    age = "Maggiorenne";    
    discount = 1;
    document.getElementById("eta").innerHTML = age;
    document.getElementById("offerta").innerHTML = "Biglietto Stardard";
    ageSelector.classList.add('d-none');
});
overAge.addEventListener('click' , function(){
    age = "Over 65";    
    discount = 0.67;
    document.getElementById("eta").innerHTML = age;
    document.getElementById("offerta").innerHTML = "Biglietto Over 65";
    ageSelector.classList.add('d-none');
});

generate.addEventListener('click', function(){
    distance = document.getElementById('distanza').value;
    incorrectData.classList.add('d-none');

    if(!/^[a-zA-Z\s]+$/.test(namePassenger.value) || isNaN(distance) || distance==''){
        incorrectData.classList.remove('d-none');
        ticket.classList.add('d-none');
    }
    else if(age == "Minorenne"){
        price = distance * 0.27 * discount;
        document.getElementById('costo').innerHTML = price.toFixed(2) ;
        document.getElementById('nome-biglietto').innerHTML = namePassenger.value;
        ticket.classList.remove('d-none');
    }
    else if(age == "Over 65"){
        price = distance * 0.27 * discount;
        document.getElementById('costo').innerHTML = price.toFixed(2) ;
        document.getElementById('nome-biglietto').innerHTML = namePassenger.value;
        ticket.classList.remove('d-none');
    }
    else if( age == "Maggiorenne" ){
        price = distance * 0.27 * discount;
        document.getElementById('costo').innerHTML = price.toFixed(2) ;
        document.getElementById('nome-biglietto').innerHTML = namePassenger.value;
        ticket.classList.remove('d-none');
    }
    else{
        age = "Maggiorenne";    
        discount = 1;
        document.getElementById("eta").innerHTML = age;
        document.getElementById("offerta").innerHTML = "Biglietto Stardard";
        price = distance * 0.27 * discount;
        document.getElementById('costo').innerHTML = price.toFixed(2) ;
        document.getElementById('nome-biglietto').innerHTML = namePassenger.value;
        ticket.classList.remove('d-none');
    }

    document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 10);
    document.getElementById("codice-cp").innerHTML = Math.floor(Math.random() * 100000);
});

annull.addEventListener('click', function(){
    document.getElementById('nome-cognome').value = '';
    document.getElementById('distanza').value = '';    
    document.getElementById('eta').innerHTML = 'Seleziona età <i class="fas fa-chevron-down"></i>';
    age = '';
    distance = '';
    ticket.classList.add('d-none');
    incorrectData.classList.add('d-none');

});

