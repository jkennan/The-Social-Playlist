import { HTTP } from 'meteor/http';

Meteor.methods({
  /*'youtubeapi.searchIt' (text) {
      this.unblock();
      console.log("AaaaaaaAAAAAAAAA");
      HTTP.get("https://httpbin.org/get", function(error, result) {
        console.log("Error: " + error + " Result: " + JSON.stringify(result));
      });
  }*/
  searchIt: function(text, boardId) {
      this.unblock();
      HTTP.get("https://www.googleapis.com/youtube/v3/search", {params:{"part": "snippet", q: text, "key": "AIzaSyBTdJsfEeE2hyaeKU9sWILzktn9M7rDhdM"}}, function(error, result) {
        var resultObjectTitle = result.data.items[0].snippet.title;
        var resultObjectID = result.data.items[0].id.videoId;
        console.log(resultObjectTitle);
        console.log(resultObjectID);
		  
			var url = "https://www.youtube.com/watch?v=" + resultObjectID;
			Meteor.call('tasks.insert', text, url, boardId);
     });


  }
}
)
