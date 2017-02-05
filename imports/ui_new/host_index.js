import {Meteor} from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import oxford from 'project-oxford';

import './task.js';
//import './mood_manager.js';
import './host_index.html';


Template.host_index.helpers({
	tasks() {
		return Tasks.find({});
	},
});

Template.host_index.events({
	'submit .new-task' (event) {
		event.preventDefault();

		const target = event.target;
		const text = target.text.value;
		const url = target.url.value;

		if (url == '') {
			Meteor.call('youtubeapi.searchIt', text);
		} else {
			Meteor.call('tasks.insert', text, url);
		}

		target.text.value = '';
		target.url.value = '';
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
		});
	},
});
