$(function(){
    var effect='animated'
    var end='animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd'
    $('#btn').click(function(){
        var text = $('#input').find(":selected").text();
        $('#title').addClass(effect+' '+text).one(end,function(){
            $(this).removeClass(effect+' '+text);
        });
    });
});