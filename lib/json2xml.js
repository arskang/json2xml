
const json2xml = ((() => {

    const xmlString = (obj = {}, options = {}) => {

        if (typeof obj !== 'object' || typeof options !== 'object') { return ''; }

        let xml = '';
        const objKeys = keys(obj);

        if (objKeys.length > 0) {

            for (let i = 0; i < objKeys.length; i++) {

                const objVal = obj[objKeys[i]];
                const objKeysVal = keys(objVal);

                if (objKeysVal.length > 0) {

                    let { attr, elem } = iterar(objVal, objKeysVal, options);

                    xml += simpleTag(objKeys[i], elem, attr);

                } else {

                    if(Array.isArray(objVal)) { 

                        objVal.forEach(o => {

                            const oKeys = keys(o);

                            if (oKeys.length > 0) {

                                let { attr, elem } = iterar(o, oKeys, options);

                                xml += simpleTag(objKeys[i], elem, attr);

                            } else { xml += simpleTag(objKeys[i], o); }
                        });

                    } else { xml += simpleTag(objKeys[i], objVal); }
                }
            }
        }
        return xml;
    }

    const simpleTag = (etiqueta, valor, atributo='') => {
        let xml = `<${etiqueta}${atributo}`;
        xml += valor ? `>${valor}</${etiqueta}>` : ' />';
        return xml;
    }

    const keys = objeto => {
        return typeof objeto === 'object' && !Array.isArray(objeto) && objeto !== undefined && objeto !== null ? Object.keys(objeto) : '';
    }

    const objAttribute = (objAttr, objKeysAttr) => {
        let attr = '';
        if (objKeysAttr.length > 0) {
            for (let e = 0; e < objKeysAttr.length; e++) {
                attr += ` ${objKeysAttr[e]}="${objAttr[objKeysAttr[e]]}"`;
            }
        }
        return attr;
    }

    const stringAttributeElement = (attr, objAttr, objKeysAttr, objVal, options) => {
        const { attribute } = options;
        let attrData = '', elemData = '';

        if (attr === attribute) {

            attrData += objAttribute(objAttr, objKeysAttr);

        } else {

            if (typeof objAttr === 'object' || Array.isArray(objAttr)) {

                let obj = {};
                obj[attr] = objVal[attr];
                elemData += xmlString(obj, options);

            } else {
                elemData += simpleTag(attr, objAttr);
            }

        }

        return { attrData, elemData }
    }

    const iterar = (objVal, objKeysVal, options) => {
        let attr = '', elem = '';
        for (let a = 0; a < objKeysVal.length; a++) {

            const objAttr = objVal[objKeysVal[a]];
            const objKeysAttr = keys(objAttr);

            let { attrData, elemData } = stringAttributeElement(objKeysVal[a], objAttr, objKeysAttr, objVal, options);

            attr += attrData;
            elem += elemData;

        }
        return { attr, elem }
    }

    return {
        convertir: (obj = {}, options = {}) => {

            if(typeof obj !== 'object' || typeof options !== 'object') {
                throw new Error('Los parámetros del método no son validos.');
            }

            const { header = false } = options;

            return (header ? '<?xml version="1.0" encoding="UTF-8"?>' : '') + xmlString(obj, options);
        }
    }

})());

module.exports = json2xml.convertir;