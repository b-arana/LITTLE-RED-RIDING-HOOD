window.onload = function() {
	$(document).ready (function(){
		$('#section-front').on('mouseover',function(){
			$('.back').css({
				display:'initial'
			});
			$('.front').css({
				display: 'none'
			});
		})
		$('#section-front').on('mouseleave', function () {
			$('.back').css({
				display: 'none'
			});
			$('.front').css({
				display: 'initial'
			});
		})

	})
	
	
	
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
