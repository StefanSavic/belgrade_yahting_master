var userFeed = new Instafeed({
	get:'user',
	userId:'3170820665',
	limit:'12',
	resolution:'standard_resolution',
	accessToken:'3170820665.1677ed0.2732238b22cc458ebe49fce4fe74b9d3',
	sortBy:'most-recent',
	template:'<div class="flex col-md-4 col-sm-12 col-xs-12"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>'
});
userFeed.run();
console.log('ello')