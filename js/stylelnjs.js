const sections = document.querySelectorAll('section');

for(const section of sections){
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '10px';
    section.style.paddingLeft = '10px';
    section.style.backgroundColor = 'lightgray';
}


// const placesContainer = document.getElementById('places_container');
// placesContainer.style.backgroundColor = 'yellow';


const placesContainer = document.getElementById('places_container');

placesContainer.classList.add('text_center');


placesContainer.classList.remove('text_big')

