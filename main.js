// Create Button 
const createBtn = document.createElement('button');
// Create Button Note
const btnNote = document.createTextNode('Create New Note');

// Add Note to the Button and add ID attribute
createBtn.appendChild(btnNote);
createBtn.setAttribute('id', 'btn');

// Add the Element to the page, by selcting destination and append
const element = document.querySelector('#btn_div');
element.append(createBtn);

// Adding a click listener to the button


// Create a New article tag
const newArticle = document.createElement('article');
// Create the content of the new article h2, div_container and the <p> in the div_container
const newH2 = document.createElement('h2')
const newArticleDiv = document.createElement('div')
const newPar = document.createElement('p')

// add class attribute
newH2.className = 'h2-font'
newPar.className = 'box-2'
newArticleDiv.className = 'grid-container'

// Arranging the new elements in the right order
newArticle.appendChild(newH2)
newArticle.appendChild(newArticleDiv)
newArticleDiv.appendChild(newPar)

console.log(newArticle)

// Targetting and setting the new article destination
const articleDestination = document.querySelector('main');
const article = document.querySelector('main article')
articleDestination.insertBefore(newArticle, article)

// const newArticlePosition = document.querySelectorAll('article')
// console.log(newArticlePosition)
