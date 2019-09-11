
//Exercise 1
String.prototype.filter = function (badWord) {
    const splitedString = this.split(" ");

    const filtered= splitedString.filter(function (elem, i, array) {
        return elem !== badWord;

    });

    return filtered.reduce(function(prevValue, elem, i, array) {
        return prevValue + " " + elem;
    });
};
console.log("This house is not nice!".filter('not'));

//Exercise 2:
Array.prototype.bubbleSort = function(){
    // const temp = this[0];

    for(let i = 0; i < this.length; i++){
        if (this[i+1] < this[i]){
            let temp = this[i];
              this[i] = this[i+1];
              this[i+1] = temp;
        }

    }
    return this;
};
console.log([6,4,0, 3,-2,1].bubbleSort());