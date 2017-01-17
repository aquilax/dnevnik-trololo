var ids = [320465];
(function($){

	function create_overlay($, $el) {
		var d = document.createElement('div');
		$(d).css({
			background: 'black',
			opacity: '0.5',
			width: '100%',
			height: '100%',
			position: 'absolute',
			top: 0,
			left: 0,
			display: 'none',
			zIndex: 100
		}).attr('class', 'trololo-overlay');
		$el.prepend(d);
	}

	function run() {
		$('.comment').each(function (i, commentTable){
			$commentTable = $(commentTable);
			var profileId = parseInt($($commentTable.find('a.lgshowprofile').get(0)).data('href').split('uid=')[1], 10);
			if (profileId) {
				$commentTable.find('.cmntTxt').css('opacity', '0.05')
				// create_overlay($, $commentTable)
			}
			console.log($commentTable, profileId);
		});
		// $($([0])
	}

	run();
}(jQuery))
console.log('LOADED');