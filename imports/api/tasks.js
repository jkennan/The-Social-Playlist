import { Mongo } from 'meteor/mongo';
import{check} from 'meteor/check';

export const Tasks = new Mongo.Collection('tasks');

Meteor.methods({
	
	'tasks.insert' (text, url, roomId) {
		alert("ive been called");
		check(text, String);

		if(! this.userId) {
			throw new Meteor.Error('not-authorized');
		}

		Tasks.insert({
			text,
			url,
			roomId,
			createdAt: new Date(),
			owner: this.userId,
			username: Meteor.users.findOne(this.userId).username,
		});
	},
	'tasks.remove'(taskId) {
    check(taskId, String);

    Tasks.remove(taskId);
  },
	
	'tasks.removeAll': function(roomId) {
		Tasks.remove({roomId: roomId});
	},
  	
	'tasks.setChecked'(taskId, setChecked) {
    check(taskId, String);
    check(setChecked, Boolean);

    Tasks.update(taskId, { $set: { checked: setChecked } });
  },

});
