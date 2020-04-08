var colori = ["white","orange","#ff3300"];
var ind_c = 0;
var ind = 0;
var ind_a = 0;
var distanza = ["10px","30px","60px","100px","160px","300px"];

function cambioColore(td) {
  td.style.backgroundColor = colori[ind_c];
}

function cambioCampione(td) {
  ind_c+=1;
  if (ind_c > colori.length-1) ind_c=0;
     td.style.backgroundColor = colori[ind_c];
}

function cambioDistanza() {
  ind+=1;
  if (ind > distanza.length-1) ind=0;
  document.getElementById("griglia").style.borderSpacing=distanza[ind];
}

function cambioAnimazione() {
  if (document.getElementById("griglia").className=="vuoto") {
    document.getElementById("griglia").className="ruota";  
  }
  else {
    document.getElementById("griglia").className="vuoto";   
  }
}

