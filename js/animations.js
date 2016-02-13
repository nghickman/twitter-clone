$(document).ready(function() {
	$('.tweet-compose').on('click', function () {
		$('.tweet-compose').css("height", '5.0em');
		$('#tweet-controls').show();
	});

$('#myTextarea').keyup(function () {
    var left = 140 - $(this).val().length;
    if (left < 0) {
        left = 0;
    }

    if(left <= 10){
        $('#counter').addClass('overlimit');
    }     

    if(left > 10){
        $('#counter').removeClass('overlimit');
    }   

    if ($(this).val().length > 140) {
    	$('#tweet-controls').addClass('button:disabled');
    }

    $('#counter').text(left);

   

});

});
