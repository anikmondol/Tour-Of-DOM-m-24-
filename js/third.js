const main = document.getElementById('main');

const section = document.createElement('section');

section.innerHTML = `

<h1>My dynamic section</h1>
<p>Extra text added inside paragraph</p>
<ul>

  <li>first item</li>
  <li>second item</li>
  <li>third item</li>

</ul>

`

main.appendChild(section);