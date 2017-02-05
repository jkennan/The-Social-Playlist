import {Meteor} from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import { YouTubeAPI } from '../api/youtubeapi.js';

import './task.js';

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
			Meteor.call('searchIt', text);
		} else {
			Meteor.call('tasks.insert', text, url);
		}

		target.text.value = '';
		target.url.value = '';
	},
});
