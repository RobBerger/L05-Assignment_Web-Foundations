async function fetchCat() {
    var catFact = await fetch('https://catfact.ninja/fact?max_length=140')
        .then(response => response.json())
        console.log(catFact.fact);

        var catFactTitle = document.createElement('h3');
        catFactTitle.innerHTML = "Random Cat Fact";

        var factWrapper = document.getElementById('factWrapper');
        factWrapper.appendChild(catFactTitle);
}

fetchCat();