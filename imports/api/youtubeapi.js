import { HTTP } from 'meteor/http';

Meteor.methods({
  /*'youtubeapi.searchIt' (text) {
      this.unblock();
      console.log("AaaaaaaAAAAAAAAA");
      HTTP.get("https://httpbin.org/get", function(error, result) {
        console.log("Error: " + error + " Result: " + JSON.stringify(result));
      });
  }*/
  searchIt: function(text) {
      this.unblock();
      console.log("AaaaaaaAAAAAAAAA");
      HTTP.get("https://www.googleapis.com/youtube/v3/search", {params:{"part": "snippet", q: text, "key": "AIzaSyBTdJsfEeE2hyaeKU9sWILzktn9M7rDhdM"}}, function(error, result) {
        var resultObject = result.data.items;
        console.log(resultObject);
      });


  }
}
)
