import { Mongo } from 'meteor/mongo';
import  { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import { Rooms } from '../api/rooms.js';
import { Session } from 'meteor/session';
import { IronRouter } from 'meteor/iron:router';

import './embed_player.html';

//Template.embed_player.helpers({
//
//});

function getNewUrl() {
	newTask = Tasks.findOne({roomId: Rooms.findOne({text: Session.get("userHostedRoom")})._id}, {sort: {createdAt: -1}});
	if (newTask.url === undefined) {
		alert("You don't have any songs!");
		} else {
	newUrl = newTask.url;
	console.log(newUrl);
	window.open(newUrl);
	Meteor.call('tasks.remove', newTask._id);
		}
}

//Templat7e.embed_player.onCreated(function () {
//		getNewUrl();
//});

Template.embed_player.events({
	'click #next-song' (event) {
		getNewUrl();
	},

})