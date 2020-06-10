// var userFeed = new Instafeed({
// 	get:'user',
// 	userId:'3170820665',
// 	limit:'8',
// 	resolution:'standard_resolution',
// 	accessToken:'3170820665.1677ed0.2732238b22cc458ebe49fce4fe74b9d3',
// 	sortBy:'most-recent',
// 	template:'<div class="flex col-md-3 col-sm-12 col-xs-12"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>'
// });
// userFeed.run();
// console.log('ello')
var d = new Date();
var n = d.getFullYear();
document.getElementById("currentYear").innerHTML = n;
var Instagramfeed = [];
fetch("https://www.instagram.com/belgradeyachting/?__a=1") // Call the fetch function passing the url of the API as a parameter
	.then((resp) => resp.json()) // Transform the data into json
	.then(function (data) {
		data.graphql.user.edge_owner_to_timeline_media.edges.forEach(image => {
			this.Instagramfeed.push(image.node.display_url)
		});

		console.log(data.graphql);
		console.log(this.Instagramfeed);
		// Create and append the li's to the ul
	})
	.catch(function () {
		// This is where you run code if the server returns any errors
	});

setInterval(() => {
	var str = '<div class="row">'
	Instagramfeed.forEach(function (image) {
		
		// str += `<img src="${image}"/>`
		str += `<div class="flex image-wrapper col-md-3 col-sm-6 col-xs-12"><a target='_blank' href="https://www.instagram.com/belgradeyachting/"><img src="${image}" alt="{{caption}}" class="img-fluid"/></a></div>`
	});

	str += '</div>';
	document.getElementById("instafeed").innerHTML = str;
}, 700);