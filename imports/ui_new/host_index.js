import {Meteor} from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import { Rooms } from '../api/rooms.js';
import { YouTubeAPI } from '../api/youtubeapi.js';
import { Session } from 'meteor/session';

import './task.js';

import './host_index.html';

Template.host_index.helpers({
	tasks() {
		// get tasks with the room id under the room context
		return Tasks.find({roomId: Rooms.findOne({text: Session.get("userHostedRoom")})._id});
	},
	userHostedRoom() {
		return Session.get("userHostedRoom");
	},
	
	userHostedRoomContext() {
		return Rooms.findOne({text: Session.get("userHostedRoom")});
	}
});

Template.host_index.events({
	'submit .new-task' (event) {
		event.preventDefault();

		const target = event.target;
		const text = target.text.value;
		const url = target.url.value;

		if (url == '') {
			Meteor.call('searchIt', text);
		} else {
			// this is the ROOM context
			Meteor.call('tasks.insert', text, url, this._id);
		}

		target.text.value = '';
		target.url.value = '';
	},
	'click .deleteRoom'() {
		// this is also the ROOM context
		Meteor.call('rooms.remove', this._id);
		Session.set("userHostedRoom", null)
		Router.go('index');
	},
});
