//console.log("Hello world");

//It will print Hello!!! in the console 3000 miliseconds after the app.js file has been called

/* setTimeout(() => {
    console.log('Hello!!!');
}, 3000); */

//It will print the value of count every two seconds

/* let count = 0;
setInterval(() => {
    count = count + 2;
    console.log(`${count} seconds have passed`);
}, 2000); */

//It will print the value of count every two seconds and stop when count reaches 8
/* let count = 0;
const timer = setInterval(() => {
    count = count + 2;
    console.log(`${count} seconds have passed`);
    if (count > 8) {
        clearInterval(timer);
    }
}, 2000); */

//Display directory name and filename
console.log(__dirname);
console.log(__filename);

