import {Meteor} from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import { Rooms } from '../api/rooms.js';
import { YouTubeAPI } from '../api/youtubeapi.js';
import {LastAPI} from '../api/lastapi.js';
import { Session } from 'meteor/session';
import oxford from 'project-oxford';

import './task.js';

import './embed_player';

import './host_index.html';


Template.host_index.helpers({
	tasks() {
		// get tasks with the room id under the room context
		return Tasks.find({roomId: Rooms.findOne({text: Session.get("userHostedRoom")})._id}, {sort: {createdAt: -1}});
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
			Meteor.call('searchIt', text, this._id);
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
	
	'click #plz' (event) {
		Meteor.call('analyzeIm' )
	}

	'click #plz' (event) {
		Meteor.call('analyzeIm');
	},
});

Meteor.methods({
	analyzeIm: function (img) {
	const oxford = require('project-oxford');
	var key = "cf8a98ef55764e0bb3129e66dd8b3294";	
	var client = new oxford.Client(key);

	client.emotion.analyzeEmotion({
		data: img,
	}).then(function (emotionresponse) {
		console.log(emotionresponse);

		var happyscore = 0;

		emotionresponse.forEach(function (element) {
			var happiness = element.scores.happiness
			var sadness = element.scores.sadness

			if (happiness > sadness)
				happyscore = happyscore + 1
			else
				happyscore = happyscore - 1
		}, this);
		return happyscore;
		})
	}
});
