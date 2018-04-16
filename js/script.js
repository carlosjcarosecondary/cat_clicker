function Flickr(){
	var $gallery = $('#gallery');
	var url_flickr = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=4a8dbeea5d279a33fc8ecc91d8f9ea72&text=cats&extras=url_o&per_page=22&format=json&nojsoncallback=1&api_sig=51d32ecc20748b891986137831f66094'
	var nclicks = []

	$.ajax({
		url: url_flickr,
		dataType: "json",
		success: function(data){
			var pictures = data['photos']['photo'];
			for (var i = 0; i < pictures.length; i++) {
				var url_o = pictures[i]['url_o'];
				nclicks[i] = 0;
				$gallery.append('<figure id='+i+'><img src='+url_o+' style="width:128px;height:128px;"><figcaption>Cat '+i+' - Clicks: '+nclicks[i]+'</figcaption></figure>');
				
				$("#"+i).click((function(iCopy){
					return function(){
						nclicks[iCopy]++;
						console.log(iCopy);
						console.log(nclicks[iCopy]);

					};
				})(i));
			}
		}
	});


};

window.Flickr()
