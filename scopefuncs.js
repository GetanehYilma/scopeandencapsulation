
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

    for(let i = 0; i < this.length; i++){
        for (let j = i+1; j < this.length; j++){
            if (this[j] < this[i]){
                let temp = this[i];
                this[i] = this[j];
                this[j] = temp;
            }
        }
    }

    return this;
};
console.log([6,4,0, 3,-2,1].bubbleSort());

//Exercise 3
function Person() {

}
Person.prototype.name = "";
Person.prototype.subject = "";
const teacher = new Person();
teacher.teach = function (subject) {
    
}
