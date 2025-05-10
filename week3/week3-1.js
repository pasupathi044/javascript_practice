
function reading() {const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);

const contents2 = fs.readFileSync("b.txt", "utf-8");
console.log(contents2);
}

function random(resolve) {
    reading();
    resolve(); // Mark the promise as resolved
}

let p = new Promise(random);

function callback() {
    console.log("promise done");
}
p.then(callback);