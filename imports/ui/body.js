import {Meteor} from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import { YouTubeAPI } from '../api/youtubeapi.js';

import './task.js';

import './body.html';

Template.body.helpers({
	tasks() {
		return Tasks.find({});
	},
});

Template.body.events({
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
	
	'click button' (event) {
	
	event.preventDefault();
		Meteor.call('tasks.removeAll');

	},
});
