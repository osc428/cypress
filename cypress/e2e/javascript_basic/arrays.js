var scores = new Array();//empty
var numbers = new Array(10);//size initalized
var myNumber = new Array(9, 10, 4, 2);//with initial elements

var athletes = Array(3);
var sings = Array('Red');  //array with one elemnt
var emptyArray = [];
var colors = ['red', 'green', 'blue']

//array examples
let tools = ['jest', 'selenium', 'cypress', 'phntomJS', 'protractor'];

//accessing elements
console.log(tools.toString());
console.log(tools);
console.log(tools[2]);


const string = tools.toString();
console.log(tools);


// add *between elemebts
const join = tools.join('*')
console.log(join)

//remove an element from the end of array
const pop = tools.pop()
console.log(tools)
console.log(pop)

//add an element to the end of array
const push = tools.push('slimerjs')
console.log(tools)
console.log(push)

//remove an element from the beginning of array
const shift = tools.shift()
console.log(tools)
console.log(shift)

//add an element to the beginning of array
const unshift = tools.push('selenoid')
console.log(tools)
console.log(unshift)


//add an element to the beginning of array
const sorted = tools.sort()
console.log(tools)
console.log(sorted)


tools.forEach((value) => {
    if (value == 'cypress') {
        console.log('cypress is trending now')
    } else {
        console.log('element is not found')
    }
})

