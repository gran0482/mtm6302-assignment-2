//Data
const $header = document.getElementById('header');
const $container = document.getElementById('container');
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

//Run



for (let i=0; i < $images.length; i++) {

  console.log($images[i]);    
}


//header and footer text
$header.innerHTML = 'Image Gallery';
$footer.innerHTML += '&copy 2021 Ben Grant';

