module.exports = function check(str, bracketsConfig) {

    if ( (arguments.length != 2) || (typeof str != "string") || (!Array.isArray(bracketsConfig)) ) {
        return new Error('wrong or missing arguments');
    }

    let out = [];
    let openBrackets = [], closeBrackets = [];

    for (let i = 0; i < bracketsConfig.length; i++){
        openBrackets.push(bracketsConfig[i][0]);
        closeBrackets.push(bracketsConfig[i][1]);
    }
    
    for (let i = 0; i < str.length; i++){
        if ( closeBrackets.includes(str[i]) ) {

            if (out.length == 0) {
                out.push(str[i]);
                continue;
            }

            if ( out[out.length - 1] == str[i] ) {
                out.pop();
                continue;
            }

            if ( out[out.length - 1] == openBrackets[closeBrackets.indexOf(str[i])] ) {
                out.pop();
            } else {
                out.push(str[i]);
            }
          
        } else {
          out.push(str[i]);
        }
    }

    return out.length == 0;
}
