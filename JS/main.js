$(document).ready(function(){
    $(".titleBar").on("click", function(){
        $(".body").removeClass("show");
        $(this).find("+ .body").addClass("show")
    })
})


 
