const json2xml = require('../index');

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
            articulos: [
                {
                    $: {
                        cantidad: 1
                    },
                    audifonos: {
                        $: {
                            tipo: 'Bluetooth'
                        }
                    }
                },
                {
                    libros: [
                        {
                            autor: 'Patrick Rothfuss',
                            saga: 'Crónica del Asesino de Reyes'
                        },
                        {
                            autor: 'George R.R. Martin',
                            saga: 'Canción de Hielo y Fuego'
                        }
                    ]
                }
            ],
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
console.log(json2xml(objeto));
console.log("----------------------------------------------");
// Con header
console.log(json2xml(objeto, { header: true }));
console.log("----------------------------------------------");
// Con header y atributos
console.log(json2xml(objeto, { header: true, attribute: '$' }));
console.log("----------------------------------------------");