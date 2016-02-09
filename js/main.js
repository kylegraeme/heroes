$('.hero').first().addClass('shown');

$('h1.name').text( $('.shown').attr('title'));

$('button.next').on('click', function() {

	if ( $('.shown').is(':last-child') ) {
		$('.shown')
		.removeClass('shown')
		.siblings()
		.first()
		.addClass('shown');
	}

	else {
		$('.shown')
		.removeClass('shown')
		.next()
		.addClass('shown');
	} 

	$('h1').text( $('.shown').attr('title') );

});

$('button.prev').on('click', function() {

	if ( $('.shown').is(':first-child') ) {
		$('.shown')
		.removeClass('shown')
		.siblings()
		.last()
		.addClass('shown');
	}

	else {
		$('.shown')
		.removeClass('shown')
		.prev()
		.addClass('shown');
	} 

	$('h1').text( $('.shown').attr('title') );

});		










/*$('button.next').on('click', function(index){

	if ('.hero').last().hasClass('shown')
		$('.shown').each(function(){
			$(this).first().addClass('shown' + (index + 1));

$('hero').each(function( index ) {
	console.log( index + ": " + $( this ).)
}*/

	



/*if ('.hero').hasClass('shown', function(){
		('.hero').last().removeClass('shown') 
		('.hero').first().addClass('shown');*/