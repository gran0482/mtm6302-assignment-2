//Data
const $header = document.getElementById('header');
const $container = document.getElementById('container');
const $button1 = document.getElementById('button');
const $button2 = document.getElementById('button2');
const $hover = document.getElementById('imageGallery');
const $footer = document.getElementById('footer');
// const $images = ['images/butterfly.jpg', 'images/geese.jpg','images/trail.jpg', 'images/greenCar.jpg', 'images/reflection.jpg', 'images/singleGoose.jpg', 'images/winterPath.jpg', 'images/crystalBall.jpg', 'images/watch.jpg', 'images/tree.jpg', 'images/leaf.jpg', 'images/lightTrail.jpg'];

const $images = [ 
    document.getElementById('imageGallery').src="images/butterfly.jpg",
    document.getElementById('imageGallery').src="images/geese.jpg",
    document.getElementById('imageGallery').src="images/trail.jpg",
    document.getElementById('imageGallery').src="images/greenCar.jpg",
    document.getElementById('imageGallery').src="images/reflection.jpg",
    document.getElementById('imageGallery').src="images/singleGoose.jpg",
    document.getElementById('imageGallery').src="images/winterPath.jpg",
    document.getElementById('imageGallery').src="images/crystalBall.jpg",
    document.getElementById('imageGallery').src="images/watch.jpg",
    document.getElementById('imageGallery').src="images/tree.jpg",
    document.getElementById('imageGallery').src="images/leaf.jpg",
    document.getElementById('imageGallery').src="images/lightTrail.jpg",
];


//Code
//reveal details about the image on hover(shot types)
$hover.addEventListener('mouseover', function(){
  $hover.setAttribute(
      $hover.innerHTML = 'image gallery',
  )
})

$hover.addEventListener('mouseout', function (){
  $hover.setAttribute(
      'style', 'background-color: #F5F5F5'
  )
})


//Showing a larger version of the image
$button1.addEventListener('click', function(event){
  console.log('button is working')
})

$button2.addEventListener('click', function(event){
  console.log('button 2 is working')
})

//Run



for (let i=0; i < $images.length; i++) {
  // const $images = document.getElementById('imageGallery').innerHTML
  const src = document.getElementById('imageGallery');

  console.log($images[i]);    
}


//header and footer text
$header.innerHTML = 'Image Gallery';
$footer.innerHTML += '&copy 2021 Ben Grant';

