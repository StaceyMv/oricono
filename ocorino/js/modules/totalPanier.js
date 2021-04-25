const totalPanier = {

  affichage: function() {

    if(JSON.parse(localStorage.getItem("userPanier")).length > 0){
        //S'il n'est pas vide on supprime le message et on créé le tableau récapitulatif
      document.getElementById("panierVide").remove();
  
        //Création de la structure principale du tableau  
      let facture = document.createElement("div");
      let ligneTableau = document.createElement("div");
      let colonneNom = document.createElement("div");
      let colonnePrixUnitaire = document.createElement("div");
    // let colonneRemove = document.createElement("div");
      let ligneTotal = document.createElement("div");
      let colonneRefTotal = document.createElement("div");
      let colonnePrixPaye = document.createElement("div");
  
    //   Attribution des classes pour le tableau
  
      facture.setAttribute("class", "content_facturation");
      ligneTableau.setAttribute("class","content_titre");
      colonneNom.setAttribute("class", "titre_article");
      colonnePrixUnitaire.setAttribute("class", "titre_prix");
      ligneTotal.setAttribute("class","total");
      colonneRefTotal.setAttribute("class","titre_total1");
      colonnePrixPaye.setAttribute("class", "total2");
  
    //Placement de la structure dans la page et du contenu des entetes

      let factureSection = document.getElementById("articlePanier");
      factureSection.appendChild(facture);
      facture.appendChild(ligneTableau);
      ligneTableau.appendChild(colonneNom);
      colonneNom.textContent = "Article";
      ligneTableau.appendChild(colonnePrixUnitaire);
      colonnePrixUnitaire.textContent = "Prix";
  
    //   Initiation du panier à 0
      let i = 0;
        
      JSON.parse(localStorage.getItem("userPanier")).forEach((produit, index, array)=>{

    //Création de la ligne
      let contentArticles = document.createElement("div");
      let ligneProduit = document.createElement("div");
      let imagePanier = document.createElement("img");
      let nomProduit = document.createElement("div");
      let prixUnitProduit = document.createElement("div");
      let removeProduit = document.createElement("i");
    // Retirer un artcile du panier
      removeProduit.addEventListener("click", function () {
          array.splice(index, 1);
          console.log(array);
          localStorage.setItem("userPanier", JSON.stringify(array));
          window.location.reload();
      } );


      contentArticles.setAttribute("class", "content_articles");
      imagePanier.setAttribute("class", "image_panier");
      imagePanier.src = produit.imageUrl;
      nomProduit.setAttribute("class","nom_produit");
      prixUnitProduit.setAttribute("class","prix_article_unitaire");
          
  
    //Attribution des class pour le css
          
      ligneProduit.setAttribute("id", "produit"+i);
      removeProduit.setAttribute("id", "remove"+i);
      removeProduit.setAttribute('class', "annulerProduit");
      removeProduit.innerHTML = "X";
  
    //Insertion dans le HTML

      facture.appendChild(ligneProduit);
      ligneProduit.appendChild(contentArticles);
      contentArticles.appendChild(imagePanier);
      contentArticles.appendChild(nomProduit);
      contentArticles.appendChild(prixUnitProduit);
      contentArticles.appendChild(removeProduit);
  
    //Contenu des lignes
          
      nomProduit.innerHTML = produit.name;
      prixUnitProduit.textContent = produit.price /100 + " €"; 
    });
  
    //Dernière ligne du tableau : Total

      facture.appendChild(ligneTotal);
      ligneTotal.appendChild(colonneRefTotal);
      colonneRefTotal.textContent = "Total de votre panier"
      ligneTotal.appendChild(colonnePrixPaye);
      colonnePrixPaye.setAttribute("id", "sommeTotal")
  
        //Calcule de l'addition total

      let totalPaye = 0;
      JSON.parse(localStorage.getItem("userPanier")).forEach((produit)=>{
        totalPaye += produit.price / 100;
      });
  
        //Affichage du prix total à payer dans l'addition
        
      console.log("total du panier : " + totalPaye);
      console.log(localStorage);
      document.getElementById("sommeTotal").textContent = totalPaye + " €";
    };
  }
  
};


 export { totalPanier };

 