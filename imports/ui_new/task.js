import {Template} from 'meteor/templating';
import {Tasks} from '../api/tasks.js';

import './task.html';

Template.task.helpers({
	checkOwner(owner) {
		return owner == this.userId || Session.get("userHostedRoom") !== null;
		
	},
});

Template.task.events({
	'click .toggle-checked'() {
		Meteor.call('tasks.setChecked', this._id, !this.checked);
	},
	'click .delete'() {
		Meteor.call('tasks.remove', this._id);
	},
});