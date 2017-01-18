
(function($){

	const KEY = 'BANNED';
	let auto = false;

	function banId(id) {
		var ids = JSON.parse(localStorage.getItem(KEY) || '[]');
		if (!ids.includes(id)) {
			ids.push(id);
			localStorage.setItem(KEY, JSON.stringify(ids));
		}
	}

	function run(ids) {
		$(document).on('click', '.trololo-overlay', function(event) {
			$target = $(event.target)
			if ($target.hasClass('trololo-overlay')) {
				$($target.children(0)).unwrap()
			}
		});
		auto = true;
		$('table.comment').each(function (i, commentTable){
			var $commentTable = $(commentTable);
			if ($commentTable.find('a.lgshowprofile').length) {
				var profileId = parseInt($($commentTable.find('a.lgshowprofile').get(0)).data('href').split('uid=')[1], 10);
				$hideButton = $('<li class="trololo-ban"><a href="#" title="Скрий коментари от този потребител">X</a></li>')
				$commentTable.find('.evaluation').append($hideButton);
				$hideButton.click(function(event) {
					event.preventDefault();
					$overlay = $('<div class="trololo-overlay"></div>');
					$commentTable.wrap($overlay);
					if (!auto) {
						banId(profileId);
					}
				});
				if (ids.includes(profileId)) {
					$hideButton.click();
				}
			}
		});
		auto = false;
	}
	var ids = JSON.parse(localStorage.getItem(KEY) || '[]');
	run(ids);
}(jQuery))
console.log('LOADED');