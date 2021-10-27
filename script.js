//Data
const $header = document.getElementById('header');
const $container = document.getElementById('container');
const $footer = document.getElementById('footer');
const $image = document.createElement("img");
const $images = ['images/butterfly.jpg', 'images/geese.jpg','images/trail.jpg', 'images/greenCar.jpg', 'images/reflection.jpg', 'images/singleGoose.jpg', 'images/winterPath.jpg', 'images/crystalBall.jpg', 'images/watch.jpg', 'images/tree.jpg', 'images/leaf.jpg', 'images/lightTrail.jpg'];




//Code

//Run



for (let i=0; i < $images.length; i++) {

  console.log($images[i]);    
}


//header and footer text
$header.innerHTML = 'Image Gallery';
$footer.innerHTML += '&copy 2021 Ben Grant';