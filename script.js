//Data
const $header = document.getElementById('header');
const $container = document.getElementById('container');
const $button1 = document.getElementById('button');
const $button2 = document.getElementById('button2');
const $footer = document.getElementById('footer');
const $hover = document.getElementById('imageGallery');
const $images = ['images/butterfly.jpg', 'images/geese.jpg','images/trail.jpg', 'images/greenCar.jpg', 'images/reflection.jpg', 'images/singleGoose.jpg', 'images/winterPath.jpg', 'images/crystalBall.jpg', 'images/watch.jpg', 'images/tree.jpg', 'images/leaf.jpg', 'images/lightTrail.jpg'];


for (const image of $images){

  const img = document.querySelector('img');
  img.src = 'images/butterfly.jpg'


}

console.log($images)



//Code
//reveal details about the image on hover(shot types)

// Macro, Wildlife, leading lines, automotive, Nature reflection, wildlife (2), seasonal, mirror reflection, product, Nature reflection(2), Nature, long exposure

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


//Showing a larger version of the image
$button1.addEventListener('click', function(event){
  // img.style.transform = "scale(2)"
  // img.style.transition = "transform 0.5s ease-in-out";

  console.log('button is working')
})

$button2.addEventListener('click', function(event){
  // img.style.transform = "scale(1)"
  // img.style.transition = "transform 0.5s ease-in-out";

  console.log('button 2 is working')
})

//using https://www.geeksforgeeks.org/how-to-make-the-images-bigger-when-clicked/ as a resource to help with displaying a larger version of the image


//Run


//header and footer text
$header.innerHTML = 'Image Gallery';
$footer.innerHTML += '&copy 2021 Ben Grant';

