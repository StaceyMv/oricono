import {loadDoc} from "/js/modules/loadDoc.js";

 const params = new URLSearchParams(window.location.search);
 const id = params.get("id");

//  Affichages des élément en HTML

loadDoc.getOneItem(id).then(function(tableau){
    let ours = JSON.parse(tableau);
 console.log("Detail de l'article :" + ours);


var detailsProduit = document.getElementById("detailsProduct");

// Contenant principal

let contentDetails = document.createElement("div");
contentDetails.setAttribute("class", "main_details");
detailsProduit.appendChild(contentDetails);

// Contenant de l'image

let firstContent = document.createElement("div");
firstContent.setAttribute("class", "first_content");
contentDetails.appendChild(firstContent);

let contentImage = document.createElement("img");
contentImage.src = ours.imageUrl;
contentImage.setAttribute("class", "image_article");
firstContent.appendChild(contentImage);


// Contenant / nom / description 

let itemDetail = document.createElement("div");
itemDetail.setAttribute("class","second_content");
contentDetails.appendChild(itemDetail);

//  Création h3
let nameProduct = document.createElement ("p");
nameProduct.setAttribute("class", "name_article");
nameProduct.textContent= ours.name;
itemDetail.appendChild(nameProduct);

// Description

let detailProduct = document.createElement("div");
detailProduct.setAttribute("class", "description_product");
detailProduct.textContent = ours.description;
itemDetail.appendChild(detailProduct);


// Contenant / choix 

let optionProduct = document.createElement("div");
optionProduct.setAttribute("class","Content_option");
itemDetail.appendChild(optionProduct);

let optionDetail = document.createElement("label");
optionDetail.textContent = "Choix des options";
optionDetail.setAttribute("class","label_detail");
optionProduct.appendChild(optionDetail);
let color = document.createElement("select");
let option = ours.color;
optionDetail.appendChild(color);


ours.colors.forEach((product) => {
    let choix = document.createElement("option");
    document.getElementById("choixOption");
    color.appendChild(choix).innerHTML = product;
});

// prix

let productPrice = document.createElement("p");
productPrice.setAttribute("class", "price");
productPrice.textContent = ours.price;
productPrice.innerHTML = ours.price/100 + " €";
itemDetail.appendChild(productPrice);

// Création de la div pour le panier

let contentBasket = document.createElement("div");
contentBasket.setAttribute("class", "content_panier");
itemDetail.appendChild(contentBasket);
// Création du panier

let panier = document.getElementById('panier');
panier.setAttribute("class", "panier")
panier.textContent ="Ajouter dans le panier";
contentBasket.appendChild(panier);


// Création du panier client


if(localStorage.getItem("userPanier")){
}else{
	console.log("Il n'y a pas de panier");
  	//Le panier est un tableau de produits
  	let panierInit = [];
  	localStorage.setItem("userPanier", JSON.stringify(panierInit));
  };

	//L'user a maintenant un panier
	let userPanier = JSON.parse(localStorage.getItem("userPanier"));

        //Ajout de l'article au click de l'utilisateur
        let inputBuy = document.getElementById("panier");
        inputBuy.addEventListener("click", async function() {

        //Ajout du produit dans le localStorage
        userPanier.push(ours);
        localStorage.setItem("userPanier", JSON.stringify(userPanier));
        alert("Article ajouter à votre panier")
    });

});