// Recupération de tout les éléments panier et information du client

let order = JSON.parse(localStorage.getItem("order"));
console.log(order);


const firstName = localStorage.getItem("firstName");
document.getElementById("firstName").innerHTML = order.contact.firstName

const lastName = localStorage.getItem("lastName");
document.getElementById("lastName").innerHTML = order.contact.lastName

const orderId = localStorage.getItem ("orderId");
document.getElementById("orderId").innerHTML = order.orderId

// Suppression du local storage après validation du N° de commande

localStorage.clear();