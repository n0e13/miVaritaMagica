// 1. Evita el comportamiento por defecto al hacer click. 
// Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.
let aLinks = document.getElementsByTagName("a");
for (let i = 0; i < aLinks.length; i++) {
    aLinks[i].addEventListener('click', function (event) {
        event.preventDefault();
    });
}




// 2. Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:

// 2.1 Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.
let aImgs = document.getElementsByTagName("img");
for (let i = 0; i < aImgs.length; i++) {
    // Calculamos un número entre 1 y 6 para asignar un gif a la foto
    let max = 6;
    let min = 1;
    let numRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    let lNewImg = (`./assets/magic-${numRandom}.gif`);
    aImgs[i].setAttribute('src', lNewImg);
}



// 2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
let aParrafos = document.getElementsByTagName("p");
for (let i = 0; i < aParrafos.length; i++) {
    aParrafos[i].style = "color: darkblue; background-color: grey";
}




// 2.3 Bloques de article o section: Cambia el color de fondo.
let aSection = document.getElementsByTagName("section");
for (let i = 0; i < aSection.length; i++) {
    aSection[i].style = "background-color: green";
}

let aArticle = document.getElementsByTagName("article");
for (let i = 0; i < aArticle.length; i++) {
    aArticle[i].style = "background-color: rebeccapurple";
}




// 3. Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes, 
//    y devolver dicho elemento a su estado original cuando salga el cursor.

// 3.1 Imágenes: Cambia la imagen por el gif abracadabra.gif.

// el array de imágenes lo tengo de antes
for (let i = 0; i < aImgs.length; i++) {
    aImgs[i].addEventListener('mouseover', function (event) {
        aImgs[i].setAttribute('src', './assets/abracadabra.gif');
    });
}




// 3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

// el array de párrafos lo tengo de antes
for (let i = 0; i < aParrafos.length; i++) {
    aParrafos[i].addEventListener('mouseover', function (event) {
        aParrafos[i].style = "color: white; background-color: black";
    });
}




// 3.3 Bloques de article o section: Color de fondo distinto al de párrafo.

// los arrays de secciones y artículos los tengo de antes
for (let i = 0; i < aSection.length; i++) {
    aSection[i].addEventListener('mouseover', function (event) {
        aSection[i].style = "background-color: pink";
    });
}

for (let i = 0; i < aArticle.length; i++) {
    aArticle[i].addEventListener('mouseover', function (event) {
        aArticle[i].style = "background-color: aqua";
    });
}




// 4. Crea una función de nombre getRandom que acepte un array con valores y devuelva uno de ellos de manera aleatoria.
const colors = ['red', 'blue', 'green']

const getRandom = (array) => {
    let nMax = array.length - 1;
    let nMin = 0;
    let numRandom = Math.floor(Math.random() * (nMax - nMin + 1)) + nMin;
    return array[numRandom];
}
// console.log(getRandom(colors));
// imprime 'red', 'blue' o 'green'




// 5. Utiliza la función creada getRandom para utilizar colores aleatorios de una paleta 
//    que hayas escogido de coolors.co en los apartados anteriores.
const aColores = ["#119da4", "#0b3948", "#802392", "#bced09", "#b191ff"];

for (let i = 0; i < aParrafos.length; i++) {
    aParrafos[i].style = `color: ${getRandom(aColores)}; background-color: ${getRandom(aColores)}`;
}



// 6. Utiliza la función creada getRandom para utilizar gifs aleatorios en los apartados anteriores.
let aGIFs = [`./assets/magic-1.gif`, `./assets/magic-2.gif`, `./assets/magic-3.gif`, `./assets/magic-4.gif`, `./assets/magic-5.gif`, `./assets/magic-6.gif`];
for (let i = 0; i < aImgs.length; i++) {
    aImgs[i].setAttribute('src', getRandom(aGIFs));
}