$(window).load(function(){
		var pages = $('#scrolling_container li'), current=0;
		var currentPage,nextPage;

		$('#scrolling_container .button').click(function(){
			currentPage= pages.eq(current);
			if($(this).hasClass('prev'))
			{

				if (current <= 0)
					current=pages.length-1;
				else
					current=current-1;
			}
			else
			{
				if (current >= pages.length-1)
					current=0;
				else
					current=current+1;
			}
			nextPage = pages.eq(current);	
			currentPage.hide();	
			nextPage.show();		
		});
});