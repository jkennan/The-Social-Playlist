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
		alert("you fucking twat");
		
//		event.preventDefault();
//
//		const target = event.target;
//		const text = target.text.value;
//
//
//		Meteor.call('tasks.insert', text);
//		Meteor.call('youtubeapi.searchIt', text);
//
//		target.text.value = '';
	},
});
