import { Mongo } from 'meteor/mongo';
import { Tasks } from '../api/tasks.js';
import { Rooms } from '../api/rooms.js';
import { Session } from 'meteor/session';

import './embed_player.html';

Template.host_index.helpers({
	getNextUrl() {
		newUrl = Tasks.findOne({roomId: Rooms.findOne({text: Session.get("userHostedRoom")})._id}, {sort: {createdAt: -1}}).url;
		console.log(newUrl);
		return newUrl + "&autoplay=1";
	},
});