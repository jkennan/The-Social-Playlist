import {Meteor} from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Rooms } from '../api/rooms.js';
import { Session } from 'meteor/session';

import './room.js';

import './make_guest.html';

Template.make_guest.helpers({
	rooms() {
		return Rooms.find({});
	},
});

Template.make_guest.events({
	'submit .enter-room' (event) {
		event.preventDefault();
		
		const target = event.target;
		const text = target.partycode.value;
		
		Session.set("curUserRoom", text);
		
		Router.go('/guest_index/' + text);
		//		  { data : function () {
		//	alert(text);
		//	return Rooms.findOne({text: text});
		//}});
	},
});
