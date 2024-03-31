// console.log('this is a second js file');

const added = document.getElementById('added');

const li = document.createElement("li");
li.innerText = 'My dynamic item';

added.appendChild(li);