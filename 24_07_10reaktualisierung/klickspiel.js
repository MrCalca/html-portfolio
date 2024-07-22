
let score = 0;
let angeklickt = false;
let intervalID;
$(document).ready(function(){
        
        $('#tertiär-titel').html('Punkte: '+score);

            function zuordner(){

                let zufallszahl = Math.floor(Math.random() * 36);
                $('#'+zufallszahl).addClass('hide');

            };

            function anfang(){
                
                    for (let i= 0; i < 18; i++){
                        let anfangsZufallszahl = Math.floor(Math.random() * 36);
                        $('#'+anfangsZufallszahl).addClass('hide');
                    };

             };
               
            

    
            $('h3').one('click', function(){
                anfang();
                intervalID = setInterval(zuordner, 1000);
                angeklickt = true;
                        
                        if (angeklickt){
                            $('.kasten').click(function(){
                                if($(this).hasClass('hide')) {
                                    $(this).removeClass('hide');
                                    score += 1;
                                }
                                else {
                                    $(this).addClass('hide');
                                    score -= 2;
                                }
                                $('#tertiär-titel').html('Punkte: '+score);
                                if (score >= 18){
                                    $('h3').html('Gewonnen!');
                                    clearInterval(intervalID);
                                };
                                
                            });
                        }
            });
            
        
    });