module.exports = function reverse (n) {
    str = String(n);
    strReverse = ""
    for (let i = 0; i < str.length; i++){
        strReverse = strReverse + str[parseInt(str.length - 1 - i)];
    }
    return parseInt(strReverse);
}
