const json_to_xml = (obj = {}, options = {}) => {

    if (typeof obj !== 'object' || typeof options !== 'object') {
        throw new Error('Los parámetros del método no son validos.');
    }

    const { header = false } = options;

    return (header ? '<?xml version="1.0" encoding="UTF-8"?>' : '') + xmlString(obj, options);

}

const xmlString = (obj = {}, options = {}) => {

    if (typeof obj !== 'object' || typeof options !== 'object') { return ''; }

    let xml = '';
    const { attribute } = options;
    const objKeys = typeof obj === 'object' && !Array.isArray(obj) && obj !== undefined && obj !== null ? Object.keys(obj) : '';

    if (objKeys.length > 0) {

        for (let i = 0; i < objKeys.length; i++) {

            const objVal = obj[objKeys[i]];
            const objKeysVal = typeof objVal === 'object' && !Array.isArray(objVal) && objVal !== undefined && objVal !== null ? Object.keys(objVal) : '';

            let attr = '', elem = '';

            if (objKeysVal.length > 0) {

                for (let a = 0; a < objKeysVal.length; a++) {

                    if (objKeysVal[a] === attribute) {

                        const objAttr = objVal[objKeysVal[a]];
                        const objKeysAttr = typeof objAttr === 'object' && !Array.isArray(objAttr) && objAttr !== undefined && objAttr !== null ? Object.keys(objAttr) : '';

                        if (objKeysAttr.length > 0) {

                            for (let e = 0; e < objKeysAttr.length; e++) {
                                attr += ` ${objKeysAttr[e]}="${objAttr[objKeysAttr[e]]}"`;
                            }

                        }

                    } else {

                        let obj = {};
                        obj[objKeysVal[a]] = objVal[objKeysVal[a]];
                        elem += xmlString(obj, options);

                    }
                }

                xml += `<${objKeys[i]}${attr}`;
                xml += elem === '' ? ' />' : `>${elem}</${objKeys[i]}>`;

            } else {

                xml += `<${objKeys[i]}`;
                xml += objVal ? `>${objVal}</${objKeys[i]}>` : ' />';

            }
        }
    }

    return xml;

}

module.exports = json_to_xml;