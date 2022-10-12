const products = [
  {
    id: 1,
    price: "2500.5",
    name: "cuptor",
  },
  {
    id: 2,
    price: "1900.5",
    name: "plita",
  },
  {
    id: 3,
    price: "700",
    name: "hota",
  },
];

// 1 - sa creem o factura cu toate elementele de mai sus - suma totala, tva pe fiecare element și tva total.
// 2- sa stergem produsul plita din lista și sa refacem suma totala și tva
// 3 - sa modificam prețul la id cu nr 1
// 4 - sa sortam dupa pret
// 5 - sa mapam array-ul și daca avem pret mai mare de 2000 sa afișăm în alert(“Scump”) altefe (“Ieftin”)
// 6 sa crem o funcție de switch dupa nume și sa afisam în alert numele produsului
// 7 sa adăugăm în lista noastră încă 2 produse și sa calculam suma totala și ava

// calculez TVA pentru fiecare produs si il stochez intr-o variabila
// const VAT = products.map((x) => x.price * 0.19);
// console.log(VAT);

//calcul total TVA
// const totalVAT = VAT.reduce(
//   (previousValue, currentValue) => previousValue + currentValue
// );
// console.log(totalVAT);

// //calcul suma totala
// const prices = products.map((y) => Number(y.price));
// console.log(prices);

// const totalPrice = prices.reduce(
//   (previousValue, currentValue) => previousValue + currentValue
// );
// console.log(totalPrice);

function factura(x) {
  const priceVAT = products.map((x) => x.price * 0.19);
  const totalVAT = priceVAT.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
  const prices = products.map((y) => Number(y.price));
  const totalPrice = prices.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
  console.log(
    `TVA-ul produselor: ${priceVAT}\n TVA total: ${totalVAT}\n Pretul total al produselor: ${totalPrice} `
  );
}
factura(products);
//2
//am gasit produsul cautat
const found = products.findIndex((element) => element.name === "plita");
const removedItem = products.splice(found, 1);

console.log(products);
//refac suma totala si tva
factura(products);
//3.

const foundIndex = products.find((element) => element.id === 1);
foundIndex.price = 3000;
console.log(products);

//4

console.log(products.sort((a, b) => a.price - b.price));

//5
const checkPrices = products.map((z) =>
  Number(z.price) > 2000 ? alert(`Scump!`) : alert(`Ieftin!`)
);

// //7
products.push(
  { id: 4, price: 1254, name: "tava" },
  { id: 5, price: 6000, name: "calorifer" }
);
console.log(products);
// //6
let input = prompt("Please type an ID");
function showNameWithID() {
  let result = products.map((x) => x.name);
  console.log(result);
  switch (input) {
    case "0":
      alert(`${result[0]}`);
      break;
    case "1":
      alert(`${result[1]}`);
      break;
    case "2":
      alert(`${result[2]}`);
      break;
    case "3":
      alert(`${result[3]}`);
      break;
    default:
      alert(`Input inexistent`);
  }
}
showNameWithID();
