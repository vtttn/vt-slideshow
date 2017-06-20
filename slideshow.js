slideshow: {
	photoList: ['photo1' , 'photo2' , 'photo3', 'photo4'],
	currentPhotoIndex: 0,
	nextPhoto: function(n) {
		var nextPhoto = photoList[currentPhotoIndex++]

		for(var i = 0; i < slideshow.photoList.length; i++){
			photoList[i]}

			if (n < slideshow.photoList.length){
				console.log(this.photolist[n])
			} else {
				console.log('End of slideshow');
			}
		},

	prevPhoto:  function() { 
		for(var i = 0; i  slideshow.photoList.length; i){
			currentPhotoIndex
		},
	getCurrentPhoto: function() {
		return currentPhotoList
	},
}
