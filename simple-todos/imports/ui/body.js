import {Meteor} from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';

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
		
		Meteor.call('tasks.insert', text);
		
		target.text.value = '';
	},
});