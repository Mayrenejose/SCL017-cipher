const cipher = { //Objeto cipher//

    encode: (word, originalDisplace) => {
        //Cadena vacia para devolver resultado//
        var outcome = ""; 
        //cadena con abecedario//
        var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        //calcular desplazamiento//
        originalDisplace = (originalDisplace % 26 + 26) % 26;

        if (word) {
            //Para recorrer cadena y verificar que sea una letra del abecedario//
            for (var i = 0; i < word.length; i++) {
                //rotacion para nuevo valor de letra//
                if (letters.indexOf(word[i]) != -1) {
                    //variable originalPosition guarda el nuevo valor de la letra //
                    var originalPosition = ((letters.indexOf(word[i]) + originalDisplace) % 26);
                    //resultado de la nueva letra//
                    outcome += letters[originalPosition];
                    //Error si se ingresa caracteres incorrecto//
                    if (typeof word !== "string") {
                        throw new TypeError("Error");
                    }
                    if (typeof originalDisplace !== "number") {
                        throw new TypeError("Error");
                    }

                } //Alerta a usuario si se ingresan caracteres incorrectos//
                else {
                    alert("introduce caracteres correctos")
                }
            }

        }
        return outcome;
    },

    decode: (word, originalDisplace) => {
        var outcome = "";
        var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        originalDisplace = (originalDisplace % 26 - 26) % 26;

        if (word) {
            for (var i = 0; i < word.length; i++) {
                if (letters.indexOf(word[i]) != -1) {
                    var originalPosition = ((letters.indexOf(word[i]) - originalDisplace) % 26);
                    outcome += letters[originalPosition];

                    if (typeof word != "string") {
                        throw new TypeError("Error");
                    }
                    if (typeof originalDisplace != "number") {
                        throw new TypeError("Error");
                    }
                }
                else {
                    alert("introduce caracteres correctos")
                }
            }

        }
        return outcome;
    },

};


export default cipher;
