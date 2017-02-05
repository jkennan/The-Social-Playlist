import {Meteor} from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import { YouTubeAPI } from '../api/youtubeapi.js';

import './task.js';

import './guest_index.html';

Template.guest_index.helpers({
	tasks() {
		return Tasks.find({});
	},
});

Template.guest_index.events({
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