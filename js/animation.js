/*Sticky naviguation*/
(function() {
    let objNav = document.querySelector("nav");
    let memoPositionNav = objNav.offsetTop;
    function sticky(){
    // position du curseur au scroll
    var posCurseur = this.pageYOffset;
    // je teste la différence de distance entre le scroll et nav
    if(memoPositionNav-posCurseur<1){
      objNav.style.position = "fixed";
      objNav.style.top = 0;
      objNav.style.zIndex = 999;
    }
    if(posCurseur<101){
      objNav.style.position = "relative";
    }
    }
    // evenement
    window.addEventListener("scroll", sticky);
   })()


   /*Pop-up*/

   function Popup () {
       var prix="5€"
       window.onload = document.getElementById('meilleur').value = prix ;
       onLoad="setTimeout('Popup()', 5000);">

    }

/*Fonctions, conditions et arithmétiques*/

/* QUESTION 2*/
function getDivision(){
    var nb_1 = +document.getElementById("input1").value;
    var nb_2 = +document.getElementById("input2").value;
    document.getElementById("resultat").textContent = "Le résultat est : " + (nb_1 / nb_2);

}

/*QUESTION 3*/
/*
var chaine1="Entrez un entier"
document.getElementById('chaine1').value = "Entrez un entier" ;
function zero{
    chaine1= eval(chaine1 + "+" + 0);
    document.getElementById('resultat2').innerHTML =chaine1;
}

function plusone{
}

function plustwo{
}

function plusthree{
}

function plusfour{
}

function plusfive{
}

function plussix{
}

function plusseven{
}

function plusheight{
}

function plusnine{
*/


/*QUESTION 4*/
function convertToLitres() {
	var a=document.getElementById("inputquest4").value;
	var litres=a /1000;
    
    document.getElementById('resultatquest4').innerHTML = litres;

}
function convertToGrammes() {
	var b=document.getElementById("inputquest4-2").value;
    var grammes=b *1000;

    document.getElementById('resultquest4-2').innerHTML =grammes;

}

/*QUESTION 6*/
var phrase =" ";

function iterateWords(){
    var m=document.getElementById("inputquest6").value;
    phrase = phrase + m;
    document.getElementById('resultatquest6').innerHTML =phrase;
}

function supprimer(){
    phrase = "";
    document.getElementById('resultatquest6').innerHTML =phrase;

}