let images = document.querySelectorAll('.thumbnails img');

let largeImage = document.createElement('img');
let viewer = document.querySelector('.viewer');
viewer.appendChild(largeImage);

let caption = document.createElement('p');
viewer.appendChild(caption);

images.forEach(function(image) {

image.onclick = function click(event){
	 let img = event.target;
	 viewer.src = img.src;
	 largeImage.src = img.src;
  	
  	
 let captionText = image.getAttribute('data-caption');
 caption.innerHTML = captionText;
  	

}
 })
// console.log(images);







// let elem = document.createElement('h2');
// console.log(elem);
// elem.innerHTML ="Hallelujah";
// let body = document.querySelector('body');
// body.appendChild(elem); 			



// let heading=document.getElementsByTagName('h1');

// console.log(heading);
// heading.style.backgroundColor = 'Green';
// heading.style.color = '#fff';
// heading.style.fontSize = '100px';
// heading.title='This is the site heading';