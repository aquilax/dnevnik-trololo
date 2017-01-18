var ids = [320465];
(function($){

	function run() {
		$(document).on('click', function(event) {
			$target = $(event.target)
			if ($target.hasClass('trololo-overlay')) {
				$($target.children(0)).unwrap()
			}
		});
		$('table.comment').each(function (i, commentTable){
			$commentTable = $(commentTable);
			console.log($commentTable);
			var profileId = parseInt($($commentTable.find('a.lgshowprofile').get(0)).data('href').split('uid=')[1], 10);
			if (profileId) {
				$overlay = $('<div class="trololo-overlay"></div>');
				$commentTable.wrap($overlay)
			}
			console.log($commentTable, profileId);
		});
	}

	run();
}(jQuery))
console.log('LOADED');