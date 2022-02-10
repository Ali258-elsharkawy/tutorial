var links = document.querySelectorAll('nav a')

function addClassList(){
    for (const link of links){
        link.classList.remove('hovered');
        this.classList.add('hovered');
}}
links.forEach((link) => link.addEventListener('click', addClassList))

//to toggle between opened and closed menu

var toggle = document.querySelector('.toggle');
var nav = document.querySelector('nav');

toggle.onclick = function(){
    let links = document.querySelectorAll('nav a')
    nav.classList.toggle('not-active')
    links.forEach((link)=> 
        link.classList.toggle('not-active')
    )
}
links.forEach((link)=>{
    link.preventDefault()
})
var iframe = document.querySelector('.frame')
var nav = document.querySelector('nav');
nav.addEventListener("click", displayLink)
function displayLink(event){
    var iframe = document.querySelector('.frame')
    const clickedThing = event.target 
    iframe.src = clickedThing.href
}
