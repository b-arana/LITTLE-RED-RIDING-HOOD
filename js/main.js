window.onload = function() {
	document.getElementById('start-button').onclick = function() {
		var game = new Game('canvas');
		$('#canvas').css({
			display: 'initial'
		});
		$('#container').css({
			display: 'none'
		});
		game.start();
	};
};
