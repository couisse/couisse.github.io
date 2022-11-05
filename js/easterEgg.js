$(document).ready(function() {
    let pass = "mp2i";
    let progress = 0;
    $(document).on("keydown", function(e){
        if(e.key == pass[progress]){
            progress += 1;
            if(progress >= 4){
                window.open("https://www.youtube.com/watch?v=xvFZjo5PgG0", "_blank");//easter egg
            }
        }else{
            progress = 0;
        }
    })
});
