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
json2xml(objeto, { header: true });
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
        <caperuza>Roja</caperuza>
    </vestimenta>
</persona:Hombre>
<persona nombre="Desconocido" />
<nada />
```