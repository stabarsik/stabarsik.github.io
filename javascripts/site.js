$('document').ready(function() {

// show & hide columns

$('button[data-action="show"]').click(function(event) {
	event.preventDefault();
	$('*[data-action="show"]').attr('data-layout', 'hidden');
	$('*[data-action="hide"]').attr('data-layout', 'visible');
	$('#grid').attr('data-layout', 'visible');
});

$('button[data-action="hide"]').click(function(event) {
	event.preventDefault();
	$('*[data-action="show"]').attr('data-layout', 'visible');
	$('*[data-action="hide"]').attr('data-layout', 'hidden');
	$('#grid').attr('data-layout', 'hidden');
});

})