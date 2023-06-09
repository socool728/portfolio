jQuery(function($){
	count = 0;
	all_texts = new Array();
	$('.mg_ajax_widget').each(function(){
		$widget = $(this);
		$widget.attr('id','mg_widget'+count);
		var text = $widget.attr('data-text');
		
		if( text !== null && typeof text !== 'undefined' )
			all_texts[count] = text;

		if( $('.mg_ajax_widget').length == count+1 ){
			$.post(mg_ajax.ajax_url, { action: 'mg_ajax_text', data: all_texts }, function(response){
				response = $.parseJSON(response);
				for( i=0; i <= response.length; i++ ){
					$('#mg_widget'+i).html(response[i]);
				}
			});
		}
		count++;
	});
});