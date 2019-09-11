
// function filter(arrayString){
//     String.prototype.
//
// }

String.prototype.filter = function (badWord) {
    const splitedString = this.split(" ");

    const filtered= splitedString.filter(function (elem, i, array) {
        return elem !== badWord;

    });

    return filtered.reduce(function(prevValue, elem, i, array) {
        return prevValue + " " + elem;
    });
}
console.log("This house is not nice!".filter('not'));