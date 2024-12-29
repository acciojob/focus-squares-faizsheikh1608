//your JS code here. If required.
const squares = document.querySelectorAll('.square');

squares.forEach((sqr) => {
	sqr.addEventListener('mouseover',function(e){
		squares.forEach((sqr) => {
			if(sqr !== e.target){
				sqr.style.backgroundColor = '#6F4E37';
			}
		})
	})

	sqr.addEventListener('mouseout',function(e) {
	squares.forEach((sqr) =>{
		sqr.style.backgroundColor = '#E6E6FA';
	})
	})
})