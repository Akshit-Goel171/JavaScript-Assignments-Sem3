// js for assignment 2

// creating variables
var largeImageDisplay = document.querySelector('.bigImg');
var smallImageDisplay = document.querySelector('.smallImg');
var figcaption = document.querySelector('.figcaption');
var paragraphInfo = document.querySelector('.paragraphInfo');




// creating function display image that will set large image
function displayImage(value) {
	largeImageDisplay.setAttribute('src', value);
}


function allWhite(){
    document.querySelector(".smallPurple-class").style.filter = "grayscale(1)";
    document.querySelector(".smallPink-class").style.filter = "grayscale(1)";
    document.querySelector(".smallYellow-class").style.filter = "grayscale(1)";
    document.querySelector(".smallWhite-class").style.filter = "grayscale(1)";
    document.querySelector(".smallRed-class").style.filter = "grayscale(1)";
    document.querySelector(".sakshamImage").style.filter = "grayscale(1)";
    document.querySelector(".akshitImage").style.filter = "grayscale(1)";
}

allWhite();





// adding event listener to thumbnail images
smallImageDisplay.addEventListener('click', function(event){

    if(event.target && event.target.nodeName === 'IMG'){

        allWhite();
        
        // getting source of image
        let imgSrc = event.target.getAttribute('src');

        // changing src of small purple flower image to large one 
        if(imgSrc == "images/flowers-purple-small.jpg"){
            document.querySelector(".smallPurple-class").style.webkitFilter = "grayscale(0)";
            document.querySelector(".smallPurple-class").style.filter = "grayscale(0)";
            imgSrc = "images/flowers-purple-large.jpg";
            document.getElementsByName(paragraphInfo).textContent = "Flowers of purple colour";
        }
        
        // changing src of small pink flower image to large one 
        else if(imgSrc == "images/flowers-pink-small.jpg"){
            document.querySelector(".smallPink-class").style.webkitFilter = "grayscale(0)";
            document.querySelector(".smallPink-class").style.filter = "grayscale(0)";
            imgSrc = "images/flowers-pink-large.jpg"; 
            document.getElementsByName(paragraphInfo).textContent = "Flowers of pink colour";  
        }

        // changing src of small yellow flower image to large one 
        if(imgSrc == "images/flowers-yellow-small.jpg"){
            document.querySelector(".smallYellow-class").style.webkitFilter = "grayscale(0)";
            document.querySelector(".smallYellow-class").style.filter = "grayscale(0)";
            imgSrc = "images/flowers-yellow-large.jpg"; 
            document.getElementsByName(paragraphInfo).textContent = "Flowers of yellow colour";
        }

        // changing src of small white flower image to large one 
        else if(imgSrc == "images/flowers-white-small.jpg"){
            document.querySelector(".smallWhite-class").style.webkitFilter = "grayscale(0)";
            document.querySelector(".smallWhite-class").style.filter = "grayscale(0)";
            imgSrc = "images/flowers-white-large.jpg";
            document.getElementsByName(paragraphInfo).textContent = "Flowers of purple colour";
        }

        // changing src of small red flower image to large one 
        else if(imgSrc == "images/flowers-red-small.jpg"){
            document.querySelector(".smallRed-class").style.webkitFilter = "grayscale(0)";
            document.querySelector(".smallRed-class").style.filter = "grayscale(0)";
            imgSrc = "images/flowers-red-large.jpg";
            document.getElementsByName(paragraphInfo).textContent = "Flowers of purple colour";
        }

        // changing src of small pink flower image to large one 
        else if(imgSrc == "images/Akshit.jpg"){
            document.querySelector(".akshitImage").style.webkitFilter = "grayscale(0)";
            document.querySelector(".akshitImage").style.filter = "grayscale(0)";
            imgSrc = "images/Akshit.jpg";
            document.getElementsByName(paragraphInfo).textContent = "My profile pic";   
        }

        // changing src of small pink flower image to large one 
        else if(imgSrc == "images/Saksham.jpg"){
            document.querySelector(".sakshamImage").style.webkitFilter = "grayscale(0)";
            document.querySelector(".sakshamImage").style.filter = "grayscale(0)";
            imgSrc = "images/saksham.jpg";
            document.getElementsByName(paragraphInfo).textContent = "Saksham's image";   
        }

        // calling function displayImage so as to paste it on large pic
        displayImage(imgSrc);

        // calling clearWayFinding function
        clearWayfinding();

        // setting border of thumbnail picture
        event.target.style.outline = "5px solid red";

        // setting thumbnail image position to relative
        event.target.style.position = "relative";

        // setting z-index to 10
        event.target.style.zIndex = 10;
        
    }

});



// creating object of .smallImg and img
var thumbImgs = document.querySelectorAll(".smallImg img");

// creating function named clearWayfinding
function clearWayfinding(){
    // for loop
	for(var i=0; i<thumbImgs.length; i++){
        // this will set border width to 0
		thumbImgs[i].style.outlineWidth = "0";
        // this will set z-index to 0 so it comes to its default position
		thumbImgs[i].style.zIndex = "0";

	}
}
