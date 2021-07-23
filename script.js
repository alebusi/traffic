var senso = ["orario","antiorario"];

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function aggiungiElemento() {
  // Disegna elementi
  let box = document.createElement('div');
  box.style.animationDuration = randomIntFromInterval(6, 20)+"s";
  box.className = senso[randomIntFromInterval(0, senso.length-1)];

  // create a new car and add it to the div
  let car = document.createElement('div');
  car.id = 'car';
  car.style.backgroundColor = randomColor();
  car.style.animationDuration = randomIntFromInterval(6, 20)+"s";
  box.appendChild(car);

  // add div to the document
  document.body.appendChild(box);
}

function togliElemento() {
  document.body.removeChild(document.body.lastElementChild);
}

function randomColor() {
    var hex = '0123456789ABC'.split('');
    var color = '#';
    for (i = 0; i < 6; i++) {
        color = color + hex[Math.floor(Math.random() * 13)];
    }
    return color;
}
