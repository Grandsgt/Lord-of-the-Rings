const header = document.getElementById('header')

console.log(header.id)

header.innerText = 'There and Back Again'

frodo.innerText = "It's useless to meet revenge with revenge: it will heal nothing."

samwise.innerText = "Boil 'em, mash 'em, stick 'em in a stew"

const allP = document.getElementsByTagName('p')


// create a new paragraph element
const newP = document.createElement('p')

// add the quote to the <p>'s inner text
newP.innerText = 'I can ride and wield blade, and I do not fear either pain or death.'

// let's add an id to the new <p> element
newP.setAttribute('id', 'eowyn')

// we can get the <article> element
const article = document.getElementById('quotes')

// now we add the new paragraph to the end of the body
article.appendChild(newP)

const newP1 = document.createElement('p')

newP1.innerText = 'A wizard is never late, Frodo Baggins. Nor is her early. He arrives precisly when he means to'

newP1.setAttribute('id', 'Gandalf')

article.appendChild(newP1)
// now loop through them all
for (let p of allP) {

  // we get the text inside the p
  let txt = p.innerText

  // add speech marks around it
  txt = '\"' + txt.toUpperCase() + '\"'

  // then we change the text inside the p
  p.innerText = txt

}
const btn = document.getElementById('my-btn')

// we listen to click events on the button, and execute the showQuote function
btn.addEventListener('click', showQuote)

// the DOM will pass the click event to whichever function we use,
// so we must accept it as a parameter
function showQuote (dwarf) {

  // we can have a look at all the information contained in the event
  // open the developer console to see
  console.log(dwarf)

  // show the user a new quote!
  window.alert('\"Nobody tosses a dwarf!\"')

}
const btn1 = document.getElementById('Secret')

btn1.addEventListener('click', secretLog)

function secretLog(){
  console.log('Fly you fools!')
}

const h = document.getElementById('header')
header.classList.add('fire');

let i = 0;
for (let p of allP) {
  i++
  if (i % 2 == 0) {
    p.style.fontStyle = "italic";
  } else {
    p.style.fontWeight = "bold";
  }

} 