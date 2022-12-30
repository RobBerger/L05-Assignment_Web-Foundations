async function fetchCat() {
    var catFact = await fetch('https://catfact.ninja/fact?max_length=140')
        .then(response => response.json())
        console.log(catFact.fact);
}

fetchCat();