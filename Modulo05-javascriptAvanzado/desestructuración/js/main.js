console.log(document.querySelector("title").textContent);

/* Desestructuración de ARRAYS */

const colores = ["rojo", "verde", "violeta", "rosa", "gris", "dorado"];

//Asi lo desestructuro:

const [colorRojo, colorVerde, , colorRosa] = colores;
//Guardo en un lugar de memoria, le asigno nombres y un array, y va a asignarle un nombre empezando por el indice 0.
//El espacio entre comas, es para saltarnos el elemento dentro del array que no queremos desestructurar. En este caso, violeta.

console.log(colorRojo, colorVerde, colorRosa);

/* Desestructuración de OBJETOS */

const objPersona = {
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

//Para desestructurar un objeto, tengo que usar el nombre de sus propiedades. (Ej: id)
//Si desestructuro una propiedad, que dentro tenga otras propiedades, me traerá todo lo que la propiedad desestructurada contenga. (Ej. address.)
//Tambine puedo desestructurar propiedades que estén dentro de propiedades. (Ej.: company => name y catchPhrase)
const {id, address, company: {name, catchPhrase}} = objPersona

console.log(id);
console.log(address); // Accediendo a address properties
console.log(name, catchPhrase); // Accediendo a company properties