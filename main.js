let createBtn = document.getElementById("btn")

function updateNote() {
      let countPartext = `Note count is ${document.querySelectorAll('article').length}.`;
    return countPartext
}

// Adding a click listener to the button and a function on what to do.
createBtn.addEventListener("click", function () {
    // Create a New article tag
    const newArticle = document.createElement('article');

    // Create the content of the new article h2, div_container and the <p> in the div_container
    const newH2 = document.createElement('h2');
    const newArticleDiv = document.createElement('div');
    const newPar = document.createElement('p');
    const img = document.createElement('img');

    // add class attribute
    newH2.className = 'h2-font'
    newPar.className = 'box-2'
    newArticleDiv.className = 'grid-container'
    img.className = 'box-1'
    img.id = 'img'
    img.src = 'https://picsum.photos/536/354'


    // Arranging the new elements in the right order
    newArticle.appendChild(newH2)
    newArticle.appendChild(newArticleDiv)
    newArticleDiv.appendChild(newPar)
    newArticleDiv.appendChild(img)

    // Targetting and setting the new article destination
    const articleDestination = document.querySelector('main');
    const article = document.querySelector('main article');
    articleDestination.insertBefore(newArticle, article);

    // Capture the input value for and adding the input to the right elements
    let h2Text = prompt('Please Enter Date in This Order DD/MM/YY: Title: ');
    newH2.append(h2Text);
    let parText = prompt('Enter your note: ');
    newPar.append(parText);
    newArticleDiv.append(img);
   
    document.querySelector('span').append(updateNote());
});