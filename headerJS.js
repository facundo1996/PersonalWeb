window.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop === 0){
        document.getElementById("NavID").style.background ="white"
        document.getElementById("i_nav").style.color ="black"
        document.getElementById("h1_li_nav").style.color ="black"
        document.getElementById("li_nav1").style.color ="black"
        document.getElementById("li_nav2").style.color ="black"
        document.getElementById("li_nav3").style.color ="black"
        document.getElementById("li_nav4").style.color ="black"
    }
    else{
        document.getElementById("NavID").style.background ="black"
        document.getElementById("i_nav").style.color ="white"
        document.getElementById("h1_li_nav").style.color ="white"
        document.getElementById("li_nav1").style.color ="white"
        document.getElementById("li_nav2").style.color ="white"
        document.getElementById("li_nav3").style.color ="white"
        document.getElementById("li_nav4").style.color ="white"
    }
})

$('#exampleModalCenter').modal('show')
$(".btn-mis-redes").on('click', function(){
    $('#exampleModalCenter').modal('hide')
})
$("#btnMisRedes").on('click', function(){
    $('#exampleModalCenter').modal('hide')
})