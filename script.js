var senso = ["orario","antiorario"];
var variaDim = false;

document.body.style.backgroundColor="black";

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function randomColor() {
    var hex = '0123456789ABC'.split('');
    var color = '#';
    for (i = 0; i < 6; i++) {
        color = color + hex[Math.floor(Math.random() * 13)];
    }
    return color;
}

function aggiungiElemento() {
  var dim;
  
  // Disegna elementi
  let box = document.createElement('div');
  box.style.animationDuration = randomIntFromInterval(6, 20)+"s";
  box.className = senso[randomIntFromInterval(0, senso.length-1)];
  
  // create a new car and add it to the div
  let car = document.createElement('div');
  car.id = 'car';
  car.style.backgroundColor = randomColor();
  if (variaDim) {
    dim = randomIntFromInterval(40, 100);
  }
  else {
    dim=80;
  }
  car.style.width = dim+"px";
  car.style.height = dim+"px";
  car.style.animationDuration = randomIntFromInterval(6, 20)+"s";
  box.appendChild(car);

  // add div to the document
  document.body.appendChild(box);
}

function togliElemento() {
  document.body.removeChild(document.body.lastElementChild);
}

function cambiaSfondo() {
  if (document.body.style.backgroundColor == "black") {
    document.body.style.backgroundColor=randomColor();
  }
  else {
    document.body.style.backgroundColor="black";
  }
}

function cambiaDimensione() {
  if (variaDim) {
    variaDim = false;
    alert("false");
  }
  else {
    variaDim = true;
    alert("true");
  }
}
