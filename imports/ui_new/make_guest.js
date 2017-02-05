import {Meteor} from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Rooms } from '../api/rooms.js';

import './room.js';

import './make_guest.html';

Template.make_guest.helpers({
	rooms() {
		return Rooms.find({});
	},
});
