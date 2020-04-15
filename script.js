var colori = ["white","#FF3300","orange","#4285F4","#0F9D58","black"];
var ind_c = 0;
var distanza = ["30px","60px","100px","160px","220px"];
var ind = 0;
var dimensioni = ["20px","30px","50px","80px"];
ind_dim = 0;
var animazioni = ["vuoto","ruota","ruota_a","allarga"];
ind_anim = 0;

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

function cambioDimensione() {
  ind_dim+=1;
  if (ind_dim > dimensioni.length-1) ind_dim=0;
  var x = document.getElementsByTagName("TD");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.width = dimensioni[ind_dim];
    x[i].style.height = dimensioni[ind_dim];
  }
}

function cambioAnimazione() {
  ind_anim+=1;
  if (ind_anim > animazioni.length-1) ind_anim=0;
  document.getElementById("griglia").className=animazioni[ind_anim];
}
