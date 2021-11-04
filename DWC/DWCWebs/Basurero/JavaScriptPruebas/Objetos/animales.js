var sAnimales = `[
    {
            "Nombre":"Elefante",
            "Mamifero":true
        },
        {
            "Nombre":"Colibrí",
            "Mamifero":false
        },
        {
            "Nombre":"Buho",
            "Mamifero":false
        },
        {
            "Nombre":"Caballo",
            "Mamifero":true
        },        
        {
            "Nombre":"Avestruz",
            "Mamifero":false
        },
        {
            "Nombre":"Txantxangorri",
            "Mamifero":false
        }
    ]`;

var aAnimales = JSON.parse(sAnimales);

// aAnimales.forEach(function (animal) {
//   for (prop in animal) {
//     console.log(animal[prop]);
//   }
// });

// for (const prop in aAnimales) {
//   if (Object.hasOwnProperty.call(aAnimales, prop)) {
//     const element = aAnimales[prop];
//   }
// }

aAnimales.forEach(function (element) {
  console.log(element.Nombre);
});

aAnimales.forEach((element) => {
  console.log(element.Nombre);
});
