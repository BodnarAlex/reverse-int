module.exports = function reverse(n) {
    let result = '';
    let init = String(Math.abs(n));

    for (var i = init.length - 1; i >= 0; i--) {
        result = result + init[i];
    }
    return Number(result);
}
