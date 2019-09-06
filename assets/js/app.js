const li = $("li");
li.on("click", function () {
    $(this).toggleClass("done");
    // alert("CLicked");
});

const del = $(".del");
del.on("click", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

const nTd = $("#new_todo");
nTd.keypress(function (event) {
    if ((event.charCode || event.which) === 13) {
        if ($(this).val() !== "") {
            const newTodo = $(this).val();
            const newTdHtml = ('<li><span class="del"><i class="far fa-trash-alt"></i> </span> ' + newTodo + '</li>');
            $("ul").append(newTdHtml);
            console.log($(this));
            nTd.val("");
        }
    }
});

const plus = $(".fa-plus-square");
plus.on("click",()=>{
    nTd.toggleClass("d-none");
});