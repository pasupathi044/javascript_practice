new Promise((resolve) => {
    console.log("red");
    resolve();
}).then(() => {
    console.log("promise done");
});
