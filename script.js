//Data
const $header = document.getElementById('header');
const $container = document.getElementById('container');
const $button1 = document.getElementById('button');
const $button2 = document.getElementById('button2');
const $hover = document.getElementById('imageGallery');
const $footer = document.getElementById('footer');
const images = ['images/butterfly.jpg', 'images/geese.jpg','images/trail.jpg', 'images/greenCar.jpg', 'images/reflection.jpg', 'images/singleGoose.jpg', 'images/winterPath.jpg', 'images/crystalBall.jpg', 'images/watch.jpg', 'images/tree.jpg', 'images/leaf.jpg', 'images/lightTrail.jpg'];



for (const image of images){
  console.log(images)
}



//Code
//reveal details about the image on hover(shot types)
$hover.addEventListener('mouseover', function(){
  $hover.setAttribute(
    'style', 'background-color: red'
  )
})

$hover.addEventListener('mouseout', function (){
  $hover.setAttribute(
      'style', 'background-color: #F5F5F5'
  )
})


//Showing a larger version of the image
$button1.addEventListener('click', function(event){
  'style', 'height: 275px';
  console.log('button is working')
})

$button2.addEventListener('click', function(event){
  'style', 'height: 200px';
  console.log('button 2 is working')
})

//Run



//header and footer text
$header.innerHTML = 'Image Gallery';
$footer.innerHTML += '&copy 2021 Ben Grant';

