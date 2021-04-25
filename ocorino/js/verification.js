const verification = {
    
    validForm: function () {

        let buttonForm = document.getElementById("buttonFormulaire");
        buttonForm.addEventListener("click", function () {
            if (checkBasket () = true && checkInput()!= null) {
                console.log("Panier et formulaire valide");
                let objet = {
                contact,
                produits,
                };
                console.log("compte rendu : " + objet);
                let objetRequest = JSON.stringify(objet);
                console.log("Resultat final de la requête :" + objetRequest);
                envoiCommande (objetRequest);
            }else {
                console.log("ERREUR, certaine informations sont manquantes");
                };
            });
    }
}

const validPanier = {

    checkBasket: function () {

        let stateBasket = JSON.parse (localStorage.getItem ("userPanier"));
        if (stateBasket == null) {
            alert("ERREUR, merci de rafraîchir la page");
            return false
        // Verification pour voir si il y a bien un article dans le panier pour passer commande
        } else if (stateBasket.lenght < 1 || stateBasket == null) {
            console.log ("Panier vide");
            alert("Votre panier est vide, vous ne pouvez pas passer commande");
            return false;
        // Il y a bien un article, la commande peut être faite
        }else {
            console.log ("Le panier n'est pas vide, la commande peut être effectuer");
            JSON.parse(localStorage.getitem("userPanier")).forEach((produit) => {products.push(produit._id);
            });
            console.log("tableau envoyer à l'API : " + products)
            return true;
        }
    }
}

