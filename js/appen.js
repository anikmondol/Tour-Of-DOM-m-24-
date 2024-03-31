// 1. where to add
const placesList = document.getElementById('places_list');

//2. what to be added
const li = document.createElement('li');
li.innerText = 'dhaka';

// 3. add th child
placesList.appendChild(li);


const li1 = document.createElement('li');
li1.innerText = "bangladesh"
placesList.appendChild(li1);


// -------------------------------------


const mainContainer = document.getElementById('main_container');


const section = document.createElement('section');

const h = document.createElement('h1');
h.innerText = "my food list";
section.appendChild(h)

const ul = document.createElement('ul');
const li2 = document.createElement('li');
li2.innerText = 'vorta';
ul.appendChild(li2)


const li3 = document.createElement('li');
li3.innerText = 'dale';
ul.appendChild(li3);


const li4 = document.createElement('li');
li4.innerText = 'demvage';
ul.appendChild(li4)

section.appendChild(ul)


mainContainer.appendChild(section)

// -----------------------------------

// set innerHtml directly

const sectionDress = document.createElement('section');

sectionDress.innerHTML = `

<h1> My Dress section </h1>

<ul>

   <li>T-shirt</li>
   <li>Lungi</li>
   <li>Sando genji</li>

</ul>


`

mainContainer.appendChild(sectionDress)