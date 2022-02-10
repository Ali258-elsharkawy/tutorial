//getting slider elements

//groubing all imgs in one array
let sliderImage = Array.from(document.querySelectorAll("img"));

//getting number of array of slides
let slidsNumber = sliderImage.length;

// Set current slid
var currentSlide = 1;

if(window.localStorage.getItem("current-slide")){
    currentSlide = window.localStorage.getItem("current-slide")
}

// Element to show slide number
var shownSlide = document.querySelector("#slide-number")

// Getting the previous and next Buttons
var prevBtn = document.querySelector("#prev"),
nextBtn = document.querySelector("#next");

// Creat the main ul
let navUl = document.createElement("ul")
// Setting id atteribute
navUl.setAttribute("id","nav-ul");


// Creat lis as number as images

for(let i =1; i<=slidsNumber; i++){
    //creat li
    let li= document.createElement("li");
    // setting attributes for lis
    li.setAttribute("data-index",i)
    // adding the number of image for each li
    li.appendChild(document.createTextNode(i));
    //adding created li to ul
    navUl.appendChild(li);
}
//appending navUl to the main container
document.querySelector(".indicators").appendChild(navUl);

// Groubing uls into array
let createdLis = Array.from(document.querySelectorAll("ul li"));

// setting click function
nextBtn.addEventListener("click", nextSlide);

// Setting click function for previos
prevBtn.addEventListener("click", previousSlide);

addClassTOCurrentSlide();
// disable();

// apdateCurrentSlide();
function addClassTOCurrentSlide(){
    // Remove active class from all li
    createdLis.forEach((li)=>{
        li.classList.remove("active")
    });
    // Adding active class to current li
    createdLis[currentSlide-1].classList.add("active");
    // Showing navigation data
    shownSlide.innerHTML =`slide # ${currentSlide} of ${slidsNumber}`;
    // Remove class active from all photos and it to current slide
    sliderImage.forEach((slide)=>{
        slide.classList.remove("active");
    })
    sliderImage[currentSlide-1].classList.add("active");
    // disable();
    window.localStorage.setItem("current-slide", currentSlide);
}

// showing tne next slide
function nextSlide(){
    if(currentSlide < slidsNumber){
        currentSlide = currentSlide+1
        addClassTOCurrentSlide();
    }
    if(currentSlide=== slidsNumber){
        nextBtn.classList.add("disabled")
    }
}

function previousSlide(){
    if(currentSlide >= 1){
        currentSlide = currentSlide-1
        addClassTOCurrentSlide();
    }
}
function disable(){
    if(currentSlide >= slidsNumber){
        nextBtn.classList.add("disabled")
    }
    if(currentSlide == 1){
        prevBtn.classList.add("disabled")
    }
    else{
        prevBtn.classList.remove("disabled");
    }
}


// Getting slide by its number
navUl.addEventListener("click", (e)=>{
    currentSlide = parseInt(e.target.getAttribute("data-index"));
    addClassTOCurrentSlide();
})

