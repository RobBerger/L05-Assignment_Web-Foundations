var fetchCat = new Promise((resolve, reject) => {
    resolve('Test');
});

fetchCat.then(function(result) {
    console.log('Fetch Cat Result: ', result);
});