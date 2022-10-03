// Ex1
const TVA = 24 / 100;
const preturi = [25, 99.42, 553.32];

function calculTVA(preturi) {
  for (let i = 0; i <= preturi.length - 1; i++) {
    let calculTVA = preturi[i] * TVA;
    console.log(`TVA-ul pentru ${preturi[i]}RON este ${calculTVA}RON.`);
  }
}

//Ex2
const obiect = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

function changeData() {
  obiect.name = "Ovidiu Nicolaescu";
  obiect.email = "divoniu@yahoo.ro";
  obiect.city = "bucuresti";
  obiect.address.street = "nicaieri";
  obiect.address.geo.lat = "1234567";
  obiect.address.geo.lng = "7654321";
  console.log(obiect);
}
// Sa schimbati numele, emailul, city, street, lat si lung.

/*In a treia functie avem: 
- Un array de string la care sa vedem lungimea si adaugam inca 5 elemente.
- Un alt array de obiecte la care sa vedem lungimea si adaugam inca 5 elemente. */

function displayArrays() {
  const sirElemente = ["Ovidiu", "Nicolaescu", 25];
  console.log(sirElemente);
  console.log(`Lungime initiala:${sirElemente.length}`);
  sirElemente.push("Bucuresti", "front-end", "inginer", "pisici", "Design");
  console.log(sirElemente);
  console.log(
    `Lungimea array-ului dupa ce am adaugat elemente:${sirElemente.length}`
  );

  const orase = {
    a: {
      city: "Bucuresti",
      county: "Bucuresti",
    },
    b: {
      city: "Craiova",
      county: "Dolj",
    },
    c: {
      city: "Caracal",
      county: "Olt",
    },
    d: {
      city: "Iasi",
      city: "Iasi",
    },
  };

  let size = Object.keys(orase).length;
  console.log(size);
}
