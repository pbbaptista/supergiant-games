//Menu navigation
$('#menu a').click(function(){

    
    var target = $(this).attr('href');
    
    var distance_top = $(target).offset().top;
    
    $('html').animate({scrollTop:distance_top-20},500);
});

$('.menu-item') .click (function(){
  
  event.preventDefault();
  
  //alterar cor letras menu
  $(".menu-item").removeClass('active-menu');
  $(this).addClass('active-menu');

});


//opacidade team

$(".team-member img").hover(function(){

    
    $('.team-member img').css({'opacity':'0.2'});
    $(this).css({'opacity':'1'});
    
    },
    
    function(){
    
     $('.team-member img').css({'opacity':'0.2'});
    
});

var indexGameClick = 0;

$('.game-preview').click(function(){
    
    indexGameClick = ($(this).index()) + 1;
    
    
    if (indexGameClick == 1){
        window.location.href='http://store.steampowered.com/app/107100/Bastion/';
    }
    
    if (indexGameClick == 2){
        window.location.href='http://store.steampowered.com/app/237930/Transistor/';
    }
    
    if (indexGameClick == 3){
       window.location.href='http://store.steampowered.com/app/462770/Pyre/';
    }
    
});


var indexBlogClick = 0;
$('.blog-preview').click(function(){
    
    indexBlogClick = this.id;
    window.location.href='./blog/post.php?id='+indexBlogClick;
    
});


var indexPostClick = 0;
$('.post_preview').click(function(){
    
    indexPostClick = this.id;
    window.location.href='post.php?id='+indexPostClick;
    
});

function link() {
    window.location.href='../blog/';
}

function openEvent(evt, eventName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(eventName).style.display = "block";
    evt.currentTarget.className += " active";
}

