//Display directory name and filename
console.log (__dirname);
console.log(__filename);

//Anonymous function
function orange() {
    console.log('Function orange');
}
orange();

//Function expression

let red = function() {
    console.log('Red fucntion');
}
red();

//Pass functions as arguments of another function

function callbackFunc(func) {
    func();
}
callbackFunc(orange);

