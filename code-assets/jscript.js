var images = [{"image":"images/dragonfly.jpg","label":"","caption":"This is an image"},
                {"image":"images/moneyplant.png","label":"","caption":"This is an image"},
                {"image":"images/ant.png","label":"","caption":"This is an image"}];

window.onload = function () {
    buildGaleryHTML();
}
var slideIndex = 0;

function plusSlides(n) {
    showThisSlide(slideIndex += n);
}
function buildGaleryHTML(){
    var galery = document.getElementById("galeryview");
    var html="";
    var n = images.length;
    for(var i=0;i<n;i++){
        html+='<div class="mySlides"><div class="numbertext">'+(i+1)+' / '+n+'</div>'+
               '<img src="'+images[i].image+'" /><div class="text">'+images[i].caption+'</div></div>';
    }
    galery.innerHTML=html;

    var dotcontainer =  document.getElementById("dotcontainer");
    html="";
    for(var i=0;i<n;i++){
        html+='<span class="dot" onclick="showThisSlide('+i+')"></span>';
    }
    dotcontainer.innerHTML=html;
    showThisSlide(0);
}
function showThisSlide(slideIndex){
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (slideIndex >= slides.length) {slideIndex = 0}    
    if (slideIndex < 0) {slideIndex = slides.length-1}
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex].style.display = "block";  
    dots[slideIndex].className += " active";
}