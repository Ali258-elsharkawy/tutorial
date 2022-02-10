var sections = document.querySelectorAll('section')
var ul = document.querySelector('ul');
for(const section of sections){
    let creatLink = document.createElement('a');
    let createLi = document.createElement('li');
    createLi.appendChild(creatLink);
    ul.appendChild(createLi);
    creatLink.innerHTML=section.dataset.nav;
    creatLink.href="#"+section.id;

}

var iSInViewport = function(elem){
    var distance = elem.getBoundingClientRect();
    return(
        distance.top >=0 &&
        distance.left >=0 &&
        distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
window.addEventListener('scroll',function(_event){
    sections.forEach(Element=> {
        if (iSInViewport(Element)){
            Element.classList.add("your-active-class");
            
            var selector = `a[href="#${Element.id}"]`
            document.querySelector(selector).classList.add('active')
            
        }
        else{
            Element.classList.remove("your-active-class");
            var selector = `a[href="#${Element.id}"]`
            document.querySelector(selector).classList.remove('active')
        }
    });
});

var
moon = document.querySelector('.moon'),
stars = document.querySelector('.stars'),
backtMountain = document.querySelector('.back-mountain'),
explore = document.querySelector('.explore'),
light = document.querySelector('.light');
window.addEventListener('scroll', function(){
    let value = window.scrollY;
    moon.style.top = value*1.2 +"px";
    stars.style.left = `${value * 0.3}px`;
    backtMountain.style.top = `${value * 0.3}px`;
    light.style.marginRight = `${value * 4}px`;
    explore.style.marginTop = `${value * 1.2}px`;
} )















