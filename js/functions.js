$(window).scroll(function(){

	var winscroll = $(this).scrollTop();
	var winheight = $(window).height();
	//console.log(winheight);

	$('.guy').css({
		'transform' : 'translate(0px, '+ winscroll /2 +'px)'
	});

	if (winscroll > $('.main-grid').offset().top - (winheight / 1.2)) {
		$('.main-grid .columns').each(function(i){
			setTimeout(function(){
				$('.main-grid .columns').eq(i).addClass('is-showing');
			},150 * (i+1));
		});
	}
});