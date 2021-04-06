// La propriété onblur renvoie la façon de gérer l'évènement blur (perte de focus) pour l'élément courant


// Référence au nom d'une fonction (sans parenthèses ni arguments) et non un appel de cette fonction
// Ici, la façon de gérer le blur est displayAlert correspondant à l'id name du DOM
/*document.getElementById("name").onblur=displayAlert;*/

// Fonction préalablement définie qui affiche une alerte lors de la perte de focus de l'input
/*function displayAlert(){
    alert(`Merci !`);
}*/



// Autre façon en déclarant d'abord une variable :

// let element = document.getElementById("name");
// element.onblur = displayAlert;

// function displayAlert(){
    //alert(`Merci !`);
// }

// Syntaxe : 
// element.event = function (){ } --> idInput.onblur = function lostFocus() {alert("blablabla");}

document.getElementById("name").onblur = function displayAlert() {
    alert(`Merci !`);
}