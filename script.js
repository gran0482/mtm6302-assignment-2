//Data
const $header = document.getElementById('header');
const $container = document.getElementById('container');
const $footer = document.getElementById('footer');
const $images = ['images/butterfly.jpg', 'images/geese.jpg','images/trail.jpg', 'images/greenCar.jpg', 'images/reflection.jpg', 'images/singleGoose.jpg', 'images/winterPath.jpg', 'images/crystalBall.jpg', 'images/watch.jpg', 'images/tree.jpg', 'images/mapleLeaf.jpg', 'images/lightTrail.jpg'];
const $shotTypes = ['Macro Photograph', 'Wildlife Photograph', 'Leading Lines Photograph', 'Automotive Photograph', 'Nature Reflection Photograph', 'Wildlife Photograph', 'Seasonal Photograph', 'Mirror Reflection Photograph', 'Product Photograph', 'Nature Reflection Photograph', 'Nature Photograph', 'Long Exposure Photograph'];

//Code


//Run
let text = '';
for (let i=0; i < $images.length; i++) {
  text += '<div class=imageContainer>'
  text += '<img src="' + $images[i] + '"></img>';
  text += '<button class="button" data-additionalinfo="' + $shotTypes[i] + '">View Details</button>';
  text += '</div>'

  console.log($images[i]);
  console.log($shotTypes[i])
}
document.getElementById('container').innerHTML = text;

// Revealing more details of the image
const container = document.querySelectorAll('.button')

for (const button of container){
  button.addEventListener('click', popUp)
}

function popUp (e){
  const button = e.target
  alert (button.dataset.additionalinfo);
}

//Adding a border around the image
const images = document.querySelectorAll('img')

for (const img of images){
  img.addEventListener('mouseover', borderColor)
}

function borderColor (e){
  const img = e.target
  e.target.style.border="5px solid blue";
  setTimeout(function(){
    e.target.style.border = "";
  }, 500);
}

//header and footer text
$header.innerHTML = 'Image Gallery';
$footer.innerHTML += '&copy 2021 Ben Grant';


