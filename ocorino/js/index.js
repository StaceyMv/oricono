// Importation de loadDoc
import {loadDoc} from "/js/modules/loadDoc.js";
// Mise en place des balises HTML et des liens unitaires des articles

// On récupère la variable loadDOc puis de la fonction getAllItem
 loadDoc.getAllItem().then(function(tableau){
    let ours = JSON.parse(tableau);
    var sectionProducts = document.getElementById("main_content");

    ours.forEach(element => {
    console.log(element);

    // Création de la div dans la section principale avec les produits

    let contentProduct = document.createElement("div");
    contentProduct.setAttribute("class","main_content");
    sectionProducts.appendChild(contentProduct);

    // Création du H3 nom du produit

    let nameProduct = document.createElement("h3");
    nameProduct.setAttribute("class","name_product");
    nameProduct.textContent = element.name;
    contentProduct.appendChild(nameProduct);

    // Création de l'élement image

    let productImage = document.createElement("img");
    productImage.setAttribute("class","image_product");
    productImage.src = element.imageUrl;
    contentProduct.appendChild(productImage);

    // Création du bouton le lien vers la fiche article

    let linkProduct = document.createElement("a");
    linkProduct.setAttribute("href", "article.html?id=" + element._id);
    linkProduct.setAttribute("class", "button_article");
    linkProduct.textContent = "Voir le produit";
    contentProduct.appendChild(linkProduct);

});


 });



