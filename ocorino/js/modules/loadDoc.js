const loadDoc = {

    getAllItem : async function () {
        var tableau;
        await fetch('http://localhost:3000/api/teddies/')
  
    // Récupère une réponse au format json
        .then(response => response.json())  
    // Récupère la liste des produits
        .then(response => tableau = JSON.stringify(response)) 
    //gestion erreur 
        .catch((error) => {
        console.log(error)
        });
    return tableau;
    },

    getOneItem :  async function (id) {
        var tableau;
        await fetch("http://localhost:3000/api/teddies/"+id)
  
    // Récupère une réponse au format json
        .then(response => response.json())  
    // Récupère la liste des produits
        .then(response => tableau = JSON.stringify(response)) 
    //gestion erreur 
        .catch((error) => {
        console.log(error)
        });
    return tableau;
    },

    postOrder : function (orderTeddies) {
        console.log(orderTeddies);
            var teddies = new XMLHttpRequest();
            teddies.onreadystatechange = function() {
                if (this.readyState == XMLHttpRequest.DONE && this.status == 201) {
                    var response = JSON.parse(this.responseText);
                    console.log(response);
                    localStorage.setItem("order", JSON.stringify(response));
                    window.location.href = `confirmation.html`;
            }
        }     
        teddies.open("POST", "http://localhost:3000/api/teddies/order", false);
        teddies.setRequestHeader('Content-Type', 'application/json');
        teddies.send(JSON.stringify(orderTeddies));
    }

};

export { loadDoc };