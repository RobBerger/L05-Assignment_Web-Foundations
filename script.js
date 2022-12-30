async function fetchCat() {
    var catFact = await fetch('https://catfact.ninja/fact?max_length=140')
        .then(response => response.json())

        var catFactTitle = document.createElement('h3');
        catFactTitle.innerHTML = "Random Cat Fact";

        var catFactText = document.createElement('p');
        catFactText.innerHTML = catFact.fact;

        var factWrapper = document.getElementById('factWrapper');
        factWrapper.appendChild(catFactTitle);
        factWrapper.appendChild(catFactText);
}

fetchCat();