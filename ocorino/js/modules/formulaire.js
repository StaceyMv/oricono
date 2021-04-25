// Création de la constante du panier + formulaire
const formulaire = {
  checkInput: function () {
    let checkNumber = /[0-9]/;
    //Source: emailregex.com
    let checkMail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/y;
    let checkSpecialCharacter = /[§!@#$%^&*(),.?":{}|<>]/;

    //message fin de controle
    let checkMessage = "";

    //Récupération des inputs
    let nomForm = document.getElementById("nomForm").value;
    let prenomForm = document.getElementById("prenomForm").value;
    let mailForm = document.getElementById("mailForm").value;
    let adresseForm = document.getElementById("adresseForm").value;
    let villeForm = document.getElementById("villeForm").value;

    //tests des différents input du formulaire Test du nom => aucun chiffre ou charactère spécial
    if(checkNumber.test(nomForm) == true || checkSpecialCharacter.test(nomForm) == true || nomForm == ""){
      checkMessage = "Information manquante : votre nom";
    }
    //Test du nom => aucun chiffre ou charactère spécial permis
    if(checkNumber.test(prenomForm) == true || checkSpecialCharacter.test(prenomForm) == true || prenomForm == ""){
      checkMessage = checkMessage + "\n" + "Information manquante : votre prénom";
    }
    //Test du mail selon le regex de la source L256
    if(checkMail.test(mailForm) == false){
      checkMessage = checkMessage + "\n" + "Information manquante : votre email";
    };
    //Test de l'adresse => l'adresse ne contient pas obligatoirement un numéro de rue mais n'a pas de characteres spéciaux
    if(checkSpecialCharacter.test(adresseForm) == true || adresseForm == ""){
      checkMessage = checkMessage + "\n" + "Information manquante : votre adresse";
    }
    //Test de la ville => aucune ville en France ne comporte de chiffre ou charactères spéciaux
    if(checkSpecialCharacter.test(villeForm) == true && checkNumber.test(villeForm) == true || villeForm == ""){
      checkMessage = checkMessage + "\n" + "Information manquante : votre ville"
    }
    //Si un des champs n'est pas bon => message d'alert avec la raison
     else if(checkMessage != ""){
      alert("Veuillez verifier les informations :" + "\n" + checkMessage);
    }
    //Si tout est ok construction de l'objet contact => a revoir
    else{
       let contact = {
        firstName : nomForm,
        lastName : prenomForm,
        address : adresseForm,
        city : villeForm,
        email : codeForm
      };
      return contact;
  
    };

  },

  // Vérification et validation du panier en cliquant sur valider mes informations

  checkBasket: function() {

    let stateBasket = JSON.parse (localStorage.getItem ("userPanier"));
      if (stateBasket == null) {
        alert("ERREUR, merci de rafraîchir la page");
        return false
    } else if (stateBasket.lenght < 1 || stateBasket == null) {
        console.log ("Panier vide");
        alert("Votre panier est vide, vous ne pouvez pas passer commande");
        return false;
    }else {
        // console.log(localStorage.getItem("userPanier"));
        let listProduct = [];
        JSON.parse(localStorage.getItem("userPanier")).forEach((produit) => {listProduct.push(produit._id);
    });
    console.log(listProduct);
        console.log("Envoi à l'API : " + listProduct)
        return listProduct;
    }
  },

  // Création du bouton pour l'envoi du panier et du formulaire

  checkFormulaire: function (contact, produits) {

    let buttonForm = document.getElementById("buttonFormulaire");
    buttonForm.setAttribute("class", "bouton_form");
      console.log("Panier et formulaire valide");
    let objet = {
      "contact" : contact,
      "products": produits,
    };
      console.log("compte rendu : " + objet);
    let objetRequest = JSON.stringify(objet);
      // console.log("Resultat final de la requête :" + objetRequest);
      console.log("Confirmation de requête valide !")
    return objet;
  }
  
};

export {formulaire };
   


