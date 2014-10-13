$(document).ready(function(){

/*create box quickly with higher resolution than an in-loop append as per Mohktari's solution*/
	$('.start').click(function(){
		var res = parseInt(prompt("Resolution?"));
		var pixSize = 960/res;
		var insert = [];
		/*validate user entry*/
		while (isNaN(res)|| res <1 || res > 350){
			res = parseInt(prompt("Must be an integer between 1 and 350"));
		}
		/*clean the slate*/
		$('.container').empty();
		/*fine tunes container size and adds divs to array*/
		$('.container').css('width', pixSize*res,'height', pixSize*res );
		for (i=0;i<res*res;i++){
			insert[i]="<div class='pix'></div>";
			}
		/*adds divs to array faster than individual appends in for-loop*/
		$('.container').append(insert.join(""));
			$('.pix').css('width', pixSize);
			$('.pix').css('height', pixSize);	
	});

/*paint brush*/
	/*whether or not the brush is touched to the canvas*/
	var brushState = false;
	/*change brush state relative to mouse status*/
	$(document).mousedown(function(){
		brushState = true;
	})
	.mouseup(function(){
		brushState = false;
	});
	/*catches pix that is clicked on*/
	$(document).on('mousedown', '.pix', function(){
		$(this).css('background-color', brushColor);
	})
	/*catches subsequent pixes dragged through*/
	.on('mouseover', '.pix', function(){
		if (brushState){
			$(this).css('background-color', brushColor);
		}
	});

/*color picker*/
	var brushColor = 'black';
	var wildCard = function(){
		return "#"+Math.floor(Math.random()*16777216).toString(16);
	};
	
	$('.picker').click(function(){
		if ((this).id === 'wild'){
			brushColor=wildCard();
		}
		else{
			brushColor = (this).id;
		}
	})	
	.click(function(){
		$('.picker').css("border", "2px solid black");
	})
	.click(function(){
		$(this).css("border", "2px solid red");
	});


});

