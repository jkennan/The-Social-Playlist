Meteor.methods({
  'youtubeapi.searchIt' (text) {
    this.unblock();
    console.log("I AM NOT GOOD WITH COMPUTER OH MAN");
    return Meteor.http.call("GET", "https://httpbin.org/get");
  }
}
)
