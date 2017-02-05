import {HTTP} from 'meteor/http';


Meteor.methods({
	
	getSongs: function(text) {

		this.unblock();
		
		HTTP.get("http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=" + text + "&api_key=af79ea631dc2f6955f0f3a737cd2e81f&format=json", {}, 
				 
		function(error, result) {
			console.log(result.data);

			
			for (var index in result.data.tracks.track) {
				var track = result.data.tracks.track[index];
				var searchTerm = track.name + " " + track.artist.name;

				Meteor.call('searchIt', searchTerm);
				
			}
		});
	}
});