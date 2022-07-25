const header = document.getElementById('header')

console.log(header.id)

header.innerText = 'There and Back Again'

frodo.innerText = "It's useless to meet revenge with revenge: it will heal nothing."

samwise.innerText = "Boil 'em, mash 'em, stick 'em in a stew"

const allP = document.getElementsByTagName('p')

// now loop through them all
for (let p of allP) {

  // we get the text inside the p
  let txt = p.innerText

  // add speech marks around it
  txt = '\"' + txt.toUpperCase() + '\"'

  // then we change the text inside the p
  p.innerText = txt

}