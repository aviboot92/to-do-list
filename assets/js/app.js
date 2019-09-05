
const li = $("li");
li.on("click", function () {
    $(this).toggleClass("done");
    // alert("CLicked");
});

const del = $(".del");
del.on("click", function (event) {
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});
