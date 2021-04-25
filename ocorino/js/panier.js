import { totalPanier } from "/js/modules/totalPanier.js";
import { formulaire } from "/js/modules/formulaire.js";
import { loadDoc } from "/js/modules/loadDoc.js";


totalPanier.affichage();

let buttonForm = document.getElementById("buttonFormulaire");
buttonForm.addEventListener("click", function (){ 
    let contact = formulaire.checkInput();
    let produits = formulaire.checkBasket();
    let objet = formulaire.checkFormulaire(contact, produits);
    console.log(objet);
    let objectOrder = loadDoc.postOrder(objet);
    console.log(objectOrder);
});


// Verification des données du formulaire

formulaire.checkInput();

// envoi des données


