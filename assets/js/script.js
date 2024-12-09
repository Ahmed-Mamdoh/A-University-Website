document.getElementById("blogtab").addEventListener('mouseenter', function(){
    document.getElementById("blogcont").style.display = "block"
    if(document.getElementById("blogcont").style.display=="none"){
        document.getElementById("blogcont").style.display = "block"
    }
    document.getElementById("blogcont").addEventListener('mouseleave', function(){
        document.getElementById("blogcont").style.display = "none"
    })
})