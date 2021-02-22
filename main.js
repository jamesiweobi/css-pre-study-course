// Create Button 
const createBtn = document.createElement('button');
// Add label on the button
const btnNote = document.createTextNode('Create New Note');

// Add Note to the Button and add ID attribute
createBtn.appendChild(btnNote);
createBtn.setAttribute('id', 'btn');

// Add the Element to the page, by selcting destination and append
const element = document.querySelector('#btn_div');
element.append(createBtn);

// Adding a click listener to the button and a function on what to do.
createBtn.onclick = function() {
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
    const article = document.querySelector('main article')
    articleDestination.insertBefore(newArticle, article)
    let h2Text = prompt('Please enter date DD/MM/YY: Title: ')
    newH2.append(h2Text)
    let parText = prompt('Enter your note: ')
    newPar.append(parText)
    newArticleDiv.append(img)
}
