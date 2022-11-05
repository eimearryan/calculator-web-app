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
        if (ch == "e") {
            hasExponents = true;
        }
        if (ch == "l") {
            hasLogs = true;
        }
        if (ch == "^") {
            hasPowers = true;
        }
    }


    if (hasExponents == true || hasLogs == true){
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
                        }
                    }
                }
            }
        }

        /*  if (hasPowers == true) {
              for (var i = 0; i < str.length; i++) {
                  var ch = str.charAt(i);
                  if (ch == "^") {
                      var endIndex;
                      for (var j = i+1; j < str.length; j++) {
                          var currCh = str.charAt(j);
                          if (currCh ==")") {
                              endIndex = j;
                              let currExp = str.substring(i + 1, j);
                              currExp = eval(currExp);

                              currExp = Math.pow(base, currExp).toFixed(3);
                              str = str.substring(0, i) + currExp + str.substring(j, str.length);
                              form.display.value = str;
                          }
                      }
                  }
              }
          }
      */
    }
        form.display.value = eval(str).toFixed(3);
}

    else {
        form.display.value = eval(form.display.value);
    }
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