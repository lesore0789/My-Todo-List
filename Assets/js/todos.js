// Check off specific todos by clicking

$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// Click on X to delete todo

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
    event.stopPropagation();
});

// Add a listener to text input that fires when hit enter key

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //extracting value out from input
        var todoText = $(this).val();
        //clear out input (after you press enter)
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fas fa-times'></i></span> " + todoText + "</li>")
    }
})