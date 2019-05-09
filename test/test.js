const json_to_xml = require('../index');

const objeto = {
    "persona:Hombre": {
        $: {
            nombre: 'Juanito',
            apellido: "Dododo",
            edad: 100,
        },
        vestimenta: {
            pantalon: {
                $: {
                    color: "Negro",
                    talla: "M"
                },
                marca: "Pirata"
            },
            camiseta: {
                $: {
                    color: "Blanco"
                }
            },
            caperuza: 'Roja'
        }
    },
    persona: {
        $: {
            nombre: 'Desconocido'
        }
    },
    nada : null
};

console.log("----------------------------------------------");
console.log("-------------------- TEST --------------------");
console.log("----------------------------------------------");
// Objeto sin opciones
console.log(json_to_xml(objeto));
console.log("----------------------------------------------");
// Con header
console.log(json_to_xml(objeto, { header: true }));
console.log("----------------------------------------------");
// Con header y atributos
console.log(json_to_xml(objeto, { header: true, attribute: '$' }));
console.log("----------------------------------------------");