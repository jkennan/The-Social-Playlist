import { Mongo } from 'meteor/mongo';
import{check} from 'meteor/check';

export const Rooms = new Mongo.Collection('rooms');

Meteor.methods({
	'rooms.insert' (text, roomType) {
		check(text, String);

		if(! this.userId) {
			throw new Meteor.Error('not-authorized');
		}
		
		// TODO:
		var existingRoom = Rooms.findOne(text);
		console.log(existingRoom);
		//if(existingRoom !== undefined ||
		//   (existingRoom !== undefined && existingRoom.found().owner === this.userId)) {
		//	throw new Meteor.Error('room-unavailable');
		//}

		Rooms.insert({
			text,
			roomType,
			createdAt: new Date(),
			owner: this.userId,
			username: Meteor.users.findOne(this.userId).username,
		});
		
		console.log(Rooms.find({}));
	},
	'rooms.remove'(roomId) {
		check(roomId, String);

		Rooms.remove(roomId);
  },
  	
	'rooms.setType'(roomId, roomType) {
		check(roomId, String);
		check(roomType, String);
	
		Rooms.update(roomId, { $set: { roomType: roomType } });
  },

});
