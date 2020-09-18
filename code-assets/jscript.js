var images = [{"image":"images/galery/dragonfly.jpeg","label":"","caption":"A dragon fly. Taken on 12 Sep 2020 @ Mirzapur"},
                {"image":"images/galery/plant.jpeg","label":"","caption":"A tiny plant while dropping water. Perfect timing :P. Taken on 10 Jun 2020 @ Hyderabad"},
                {"image":"images/galery/leaf.jpeg","label":"","caption":"A peepal leaf covering the sun. Taken on 11 Nov 2019 @ Varanasi"},
                {"image":"images/galery/moneyplant.jpg","label":"","caption":"Money Plant. Taken on 5 May 2020 @ Hyderabad"},
                {"image":"images/galery/starfish.jpeg","label":"","caption":"A live star fish in the sand and water. Taken on 4 Oct 2018 @ Goa"},
                {"image":"images/galery/ant.jpg","label":"","caption":"An ant sitting on my meal bowl. Taken on 20 Aug 2020 @ Varanasi"},
                {"image":"images/galery/bullet.jpeg","label":"","caption":"My Royal Enfield Thunderbird 2010 Model. Taken on 15 Feb 2019 @ Hyderabad "},
                {"image":"images/galery/deep.jpeg","label":"","caption":"A mud lamp (diya) on Diwali 27 Oct 2019 @ Hyderabad"}];

window.onload = function () {
    buildGaleryHTML();
}
var slideIndex = 0;

function plusSlides(n) {
    showThisSlide(slideIndex+n);
}
function buildGaleryHTML(){
    
    var n = images.length;
    /*var html="";
    
    for(var i=0;i<n;i++){
        html+='<div class="mySlides"><div class="numbertext">'+(i+1)+' / '+n+'</div>'+
               '<img src="'+images[i].image+'" /><div class="text">'+images[i].caption+'</div></div>';
    }
    var galery = document.getElementById("galeryview");
    galery.innerHTML=html;*/

    var dotcontainer =  document.getElementById("dotcontainer");
    var html="";
    for(var i=0;i<n;i++){
        html+='<span class="dot" onclick="showThisSlide('+i+')"></span>';
    }
    dotcontainer.innerHTML=html;
    showThisSlide(0);
}
function showThisSlide(idx){
    if (idx >= images.length) {idx = 0}
    else if (idx < 0) {idx = images.length-1}
    var dots = document.getElementsByClassName("dot");
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[idx].className += " active";
    $(".blur-bg").css("background",'url('+images[idx].image+')');
    $("#galeryImage").fadeOut(200, function(){
        $("#galeryImage").attr("src",images[idx].image);
    });
    $("#galeryImage").fadeIn(300);
    $("#numbertext").text((idx+1) +" / "+images.length);
    $("#caption").text(images[idx].caption);
    slideIndex = idx;
}