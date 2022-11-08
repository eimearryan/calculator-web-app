function addChar(input, character) {
    if(input.value == null || input.value == "0")
        input.value = character
    else
        input.value += character
}



function deleteChar(input) {
    input.value = input.value.substring(0, input.value.length - 1)
}


function compute(form) {
//look for log and exp functions, then evaluate
    let hasExponents = false;
    let hasLogs = false;
    let hasPowers = false;
    for (var i = 0; i < form.display.value.length; i++) {
        var ch = form.display.value.charAt(i);

        if (ch == "^") {
            hasPowers = true;
        }
        if (ch == "e") {
            hasExponents = true;
        }
        if (ch == "l") {
            hasLogs = true;
        }
    }



    var str = form.display.value;

    for (var i = 0; i < str.length; i++) {
        if (hasExponents == true) {
            for (var i = 0; i < str.length; i++) {
                var ch = str.charAt(i);
                if (ch == "e") {
                    var endIndex;
                    for (var j = i; j < str.length; j++) {
                        var currCh = str.charAt(j);
                        if (currCh == ")") {
                            endIndex = j;
                            let currExp = str.substring(i + 1, j + 1);

                            currExp = eval(currExp);
                            currExp = Math.exp(currExp).toFixed(3);
                            str = str.substring(0, i) + currExp + str.substring(j + 1, str.length);
                            break;
                        }
                    }
                }
            }
        }
        if (hasLogs == true) {
            for (var i = 0; i < str.length; i++) {
                var ch = str.charAt(i);
                if (ch == "l") {
                    var endIndex;
                    for (var j = i; j < str.length; j++) {
                        var currCh = str.charAt(j);
                        if (currCh == ")") {
                            endIndex = j;
                            let currExp = str.substring(i + 2, j + 1);
                            currExp = eval(currExp);
                            currExp = Math.log(currExp).toFixed(3);
                            str = str.substring(0, i) + currExp + str.substring(j + 1, str.length);
                            break;
                        }
                    }
                }
            }
        }
        if (hasPowers == true) {
            for (var i = 0; i < str.length; i++) {
                var ch = str.charAt(i);
                if (ch == "^") {
                    var endIndex;
                    for (var j = i + 1; j < str.length; j++) {
                        var currCh = str.charAt(j);
                        if (currCh == ")") {
                            endIndex = j;
                            let currExp = str.substring(i + 2, j);

                            //power value
                            currExp = eval(currExp);

                            var lastOpIndex;
                            var base;
                            for (var k = i - 1; k > 0; k--) {
                                var lastOperator = str.charAt(k);
                                if (lastOperator < "0" || lastOperator > "9") {
                                    lastOpIndex = k;
                                    break;
                                }
                            }
                            base = str.substring(k, i);

                            currExp = Math.pow(base, currExp);


                            if (str.charAt(k) < "0" || str.charAt(k) > "9") {
                                str = str.substring(0, k+1) + currExp + str.substring(j + 1, str.length);
                            } else {
                                str = currExp + str.substring(j + 1, str.length);
                            }
                        }

                    }
                }
            }
        }
    }
    form.display.value = eval(str).toFixed(3);

}



function checkNum(str) {
    for (var i = 0; i < str.length; i++) {
        var ch = str.charAt(i);
        if (ch < "0" || ch > "9") {
            if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
                && ch != "(" && ch!= ")" && ch != "^" && ch!= "l" && ch != "n"
                && ch != "e")
            {
                alert("invalid entry!")
                return false
            }
        }
    }
    return true
}
module.exports= checkNum, addChar, deleteChar, compute
