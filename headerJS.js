window.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop === 0){
        document.getElementById("NavID").style.background ="none"
    }
    else{
        document.getElementById("NavID").style.background ="rgb(243, 191, 94)"
    }
})