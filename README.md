# JSON to XML

## Install
```
npm i @arskang/json2xml
```

## Test
```
npm test
```

## Ejemplos de uso

```javascript
const json2xml = require('@arskang/json2xml');

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
```

#### Ejemplo 1
```javascript
// Objeto sin opciones
json2xml(objeto);
```

#### Resultado 1
```xml
<persona:Hombre>
    <$>
        <nombre>Juanito</nombre>
        <apellido>Dododo</apellido>
        <edad>100</edad>
    </$>
    <vestimenta>
        <pantalon>
            <$>
                <color>Negro</color>
                <talla>M</talla>
            </$>
            <marca>Pirata</marca>
        </pantalon>
        <camiseta>
            <$>
                <color>Blanco</color>
            </$>
        </camiseta>
    <articulos>
        <$>
            <cantidad>1</cantidad>
        </$>
        <audifonos>
            <$>
                <tipo>Bluetooth</tipo>
            </$>
        </audifonos>
    </articulos>
    <articulos>
        <libros>
            <autor>Patrick Rothfuss</autor>
            <saga>Crónica del Asesino de Reyes</saga>
        </libros>
        <libros>
            <autor>George R.R. Martin</autor>
            <saga>Canción de Hielo y Fuego</saga>
        </libros>
    </articulos>
    <caperuza>Roja</caperuza>
</vestimenta>
</persona:Hombre>
    <persona>
        <$>
            <nombre>Desconocido</nombre>
        </$>
    </persona>
<nada />
```

#### Ejemplo 2
```javascript
// Con Header
json2xml(objeto, { header: true });
```

#### Resultado 2
```xml
<?xml version="1.0" encoding="UTF-8"?>
<persona:Hombre>
    <$>
        <nombre>Juanito</nombre>
        <apellido>Dododo</apellido>
        <edad>100</edad>
    </$>
    <vestimenta>
        <pantalon>
            <$>
                <color>Negro</color>
                <talla>M</talla>
            </$>
            <marca>Pirata</marca>
        </pantalon>
        <camiseta>
            <$>
                <color>Blanco</color>
            </$>
        </camiseta>
    <articulos>
        <$>
            <cantidad>1</cantidad>
        </$>
        <audifonos>
            <$>
                <tipo>Bluetooth</tipo>
            </$>
        </audifonos>
    </articulos>
    <articulos>
        <libros>
            <autor>Patrick Rothfuss</autor>
            <saga>Crónica del Asesino de Reyes</saga>
        </libros>
        <libros>
            <autor>George R.R. Martin</autor>
            <saga>Canción de Hielo y Fuego</saga>
        </libros>
    </articulos>
    <caperuza>Roja</caperuza>
</vestimenta>
</persona:Hombre>
    <persona>
        <$>
            <nombre>Desconocido</nombre>
        </$>
    </persona>
<nada />
```

#### Ejemplo 3
```javascript
// Con Header y Atributos
json2xml(objeto,  { header: true, attribute: '$' });
```

#### Resultado 3
```xml
<?xml version="1.0" encoding="UTF-8"?>
<persona:Hombre nombre="Juanito" apellido="Dododo" edad="100">
    <vestimenta>
        <pantalon color="Negro" talla="M">
            <marca>Pirata</marca>
        </pantalon>
        <camiseta color="Blanco" />
        <articulos cantidad="1">
            <audifonos tipo="Bluetooth" />
        </articulos>
        <articulos>
            <libros>
                <autor>Patrick Rothfuss</autor>
                <saga>Crónica del Asesino de Reyes</saga>
            </libros>
            <libros>
                <autor>George R.R. Martin</autor>
                <saga>Canción de Hielo y Fuego</saga>
            </libros>
        </articulos>
        <caperuza>Roja</caperuza>
    </vestimenta>
</persona:Hombre>
<persona nombre="Desconocido" />
<nada />
```