$(document).ready(function(){

    //Uhr//
    $("#verschwindebutton").click(function(){
        $("#clock").removeClass('hide');
    });

    
    $("#zurückbutton").click(function(){
        $("#clock").addClass('hide'); 
    });
    
    function uhrZeit(){

        let d = new Date();
        let hours = d.getHours();
        let minutes = d.getMinutes();
        let seconds = d.getSeconds();

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        let jetzigeUhrzeit = hours + ":" + minutes + ":" + seconds;

        $("#clock").html(jetzigeUhrzeit);
      
    };
    
    setInterval(uhrZeit, 1000);
   
});

