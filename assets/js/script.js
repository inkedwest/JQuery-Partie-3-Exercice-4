$(function(){
        var $colorDefault = $('#rectangle').css('background-color'); // Fonction par défaut
        // Fonction de la taille du rectangle
        $('#btnSize').on('click', function(){
            if($('#rectangle').css('height') <= '100px'){
                $('#rectangle').css('height', '10px');
            }else{
                $('#rectangle').css('height', '+=10px');
            }
        });// Mets la couleur verte du rectangle
        $('#btnGreen').on('click', function(){
            $('#rectangle').css('background-color', 'green');
        });// Mets la couleur par défaut du rectangle (bleu)
        $('#btnColorReset').on('click', function(){
            $('#rectangle').css('background-color', $colorDefault);
        });// Cacher le rectangle
        $('#btnHide').on('click', function(){
            $('#rectangle').hide();
        });// Afficher le rectangle
        $('#btnShow').on('click', function(){
            $('#rectangle').show();
        });
});
