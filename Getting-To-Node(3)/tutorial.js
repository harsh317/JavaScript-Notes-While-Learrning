// The module that we will import in app.js file
// All these functions , classes , consts we will use in the app.js file
const sum = (num, num2) => num + num2;
const a_string = 'This is a string';
const a_no = 123.0
class A_class {
    constructor(argu) {
        console.log(`object created with the argument ${argu}`)
    }

}
module.exports = { sum: sum, a_string: a_string, a_no: a_no, A_class: A_class };