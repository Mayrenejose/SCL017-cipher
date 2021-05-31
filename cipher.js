const cipher = { //Objeto cipher//

    encode: (word, originalDisplace) => {
        var outcome = "";
        var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        originalDisplace = (originalDisplace % 26 + 26) % 26;

        if (word) {
            for (var i = 0; i < word.length; i++) {
                if (letters.indexOf(word[i]) != -1) {
                    var originalPosition = ((letters.indexOf(word[i]) + originalDisplace) % 26);
                    outcome += letters[originalPosition];

                    if (typeof word !== "string") {
                        throw new TypeError("Error");
                    }
                    if (typeof originalDisplace !== "number") {
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
