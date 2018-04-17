function Flickr(){
	var $wrapper = $('#wrapper');
	var $gallery_main = $('#gallery-main');
	var $gallery_secondary = $('#gallery-secondary');
	var url_flickr = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9614d4ab6df9a4930a27a6cbf0aa762d&text=cat&extras=url_o&per_page=20&format=json&nojsoncallback=1&api_sig=34026fd2f68711a81eb0066e6316ce9d'
	var nclicks = []
	var url_list = []

	$.ajax({
		url: url_flickr,
		dataType: "json",
		success: function(data){
			var pictures = data['photos']['photo'];
			for (var i = 0; i < pictures.length; i++) {
				var url_o = pictures[i]['url_o'];
				nclicks[i] = 0;
				url_list[i] = url_o;
				$gallery_secondary.append('<figure id='+i+'><img src='+url_o+' style="width:128px;height:128px;"><figcaption>Cat '+i+'</figcaption></figure>');
				
				var ii = 0;
				$("#"+i).click((function(iCopy){
					return function(){
						nclicks[iCopy]++;
						console.log(iCopy);
						console.log(nclicks[iCopy]);
						if (ii == 0) {
							$gallery_main.append('<figure id='+iCopy+'><img src='+url_list[iCopy]+' style="max-width:100%;max-height:100%;";><figcaption>Cat '+iCopy+' - Clicks: '+nclicks[iCopy]+'</figcaption></figure>');
							ii++;
						} else {
							$gallery_main.replaceWith('<div id="gallery-main"><figure id='+iCopy+'><img src='+url_list[iCopy]+' style="max-width:100%;max-height:100%;";><figcaption>Cat '+iCopy+' - Clicks: '+nclicks[iCopy]+'</figcaption></figure></div>');
						}
					};
				})(i));
			}
		}
	});


};

window.Flickr()
