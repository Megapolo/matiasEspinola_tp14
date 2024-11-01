//agregado para hacerlo mas bonito por terminal
let numeroParaConsola = ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
function separar (numero) {
console.log(`
----------------------
Ejercio 4.${numeroParaConsola[numero]}:
----------------------
`)
}

// Consigna n°3.
let electrodomesticos = ["Lavarropas", "Heladera", "Licuadora", "Microondas", "BatidoraElectrica", "Cafetera"];
let index = 0
let electro = []
// Consigna n°4:
// A)
separar(0)
while (index < electrodomesticos.length) {
    console.log(electrodomesticos[index]);
    index++
}
// B)
separar(1)
electro = electrodomesticos.shift()
electrodomesticos.push(electro)
console.log(electrodomesticos);

// C)
separar(2)
electrodomesticos.push("Aspiradora", "Multiprocesadora")
console.log(electrodomesticos);

// D)
separar(3)
console.log(electrodomesticos.length);
// E) (esta solución está hecha pero por algúna razón que no comprendo el "toLowerCase" no termina de funcionar al hacer la comparación dentro del "if")
separar(4)
function buscarElemento(elemento, array) {
    let buscado = array.find((element) => element == elemento);
    if (buscado) {
        elemento = elemento.toLowerCase();
        buscado = buscado.toLowerCase();
        if (buscado == elemento) {
            console.log("Producto encontrado");
        }
    } else {
        console.log("El producto buscado no existe");
    }
}
buscarElemento("Heladera", electrodomesticos);
// F)
separar(5)
let cadenaUnificada = electrodomesticos.join(" ");
console.log(cadenaUnificada);
// G)
separar(6)
console.log(cadenaUnificada.length)
// H)
separar(7)
function cambiarString (reemplazar, reemplazante) {
    console.log(cadenaUnificada = cadenaUnificada.replace(reemplazar, reemplazante))
}
cambiarString("Licuadora", "Trituradora")
// I)
separar(8)
let nuevoArray = cadenaUnificada.split(" ")
console.log(nuevoArray);

