//Data
const $header = document.getElementById('header');
const $container = document.getElementById('container');
const $button1 = document.getElementById('button');
const $button2 = document.getElementById('button2');
const $footer = document.getElementById('footer');
const $hover = document.getElementById('imageGallery');
const $images = ['images/butterfly.jpg', 'images/geese.jpg','images/trail.jpg', 'images/greenCar.jpg', 'images/reflection.jpg', 'images/singleGoose.jpg', 'images/winterPath.jpg', 'images/crystalBall.jpg', 'images/watch.jpg', 'images/tree.jpg', 'images/leaf.jpg', 'images/lightTrail.jpg'];
const $shotTypes = ['Macro', 'Wildlife', 'leading lines', 'automotive', 'Nature reflection', 'wildlife', 'seasonal', 'mirror reflection', 'product', 'Nature reflection', 'Nature', 'long exposure'];

//Code

let text = '';
for (const image of $images){

  text += '<img src="' + image + '" alt=""></img>';
  
  console.log(image)
}
document.getElementById('container').innerHTML = text;

//reveal details about the image on hover(shot types)

// Macro, Wildlife, leading lines, automotive, Nature reflection, wildlife, seasonal, mirror reflection, product, Nature reflection, Nature, long exposure

$hover.addEventListener('mouseover', function(){
  $hover.setAttribute('style', `
    background-color: red; 
    display: block;
  ` 
  )
})

$hover.addEventListener('mouseout', function (){
  $hover.setAttribute('style', `
    background-color: #F5F5F5
    display: none;
    `
  )
})

// https://stackoverflow.com/questions/3559467/description-box-using-onmouseover


//Showing a larger version of the image
img = document.getElementById('imageGallery')

$button1.addEventListener('click', function(event){
  img.style.transform = "scale(1.5)"
  img.style.transition = "transform 0.5s ease-in-out";

  console.log('button is working')
})

$button2.addEventListener('click', function(event){
  img.style.transform = "scale(1)"
  img.style.transition = "transform 0.5s ease-in-out";

  console.log('button 2 is working')
})

//using https://www.geeksforgeeks.org/how-to-make-the-images-bigger-when-clicked/ as a resource to help with displaying a larger version of the image


//Run


//header and footer text
$header.innerHTML = 'Image Gallery';
$footer.innerHTML += '&copy 2021 Ben Grant';

