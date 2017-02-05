import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Rooms } from '../api/rooms.js';

import './make_party.html';

Template.make_party.events({
	'submit .new-room' (event) {
		event.preventDefault();
		
		const target = event.target;
		const text = target.text.value;
		const roomType = target.roomType.value;

		Meteor.call('rooms.insert', text, roomType);

		Router.go('host_index');
	},
});