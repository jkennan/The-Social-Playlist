import {Meteor} from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import { Rooms } from '../api/rooms.js';
import { Session } from 'meteor/session';
import { YouTubeAPI } from '../api/youtubeapi.js';

import './task.js';

import './guest_index.html';

Template.guest_index.helpers({
	tasks() {
		// get tasks with the room id under the room context
		return Tasks.find({roomId: Rooms.findOne({text: Session.get("curUserRoom")})._id}, {sort: {createdAt: -1}});
	},
	
	curUserRoom() {
		return Session.get("curUserRoom");
	},
	
	curUserRoomContext() {
		return Rooms.findOne({text: Session.get("curUserRoom")});
	}
});

Template.guest_index.events({
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

		Session.set("curUserRoom", this.text);
		
		Router.go('/guest_index/' + text);
		
		target.text.value = '';
		target.url.value = '';
	},
});