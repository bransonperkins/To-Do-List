$(".txtb").on("keyup",function(e){
    if(e.keyCode == 13 && $(".txtb").val() != "") {
        var task = $("<div class='task'></div>").text($(".txtb").val());
        var del = $("<i class='fas fa-trash-alt' id='trash'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                p.remove();
            });
        });

        var check = $("<i class='fas fa-check' id='done'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                $(".complete").append(p);
                p.fadeIn();
            });
            $(this).remove();
        });

        task.append(del,check);

        $(".incomplete").append(task);
        // to clear the input
        $(".txtb").val("");
    }
});

