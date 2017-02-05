import { Mongo } from 'meteor/mongo';
import{check} from 'meteor/check';

export const Tasks = new Mongo.Collection('tasks');

Meteor.methods({
	'tasks.insert' (text, url) {
		check(text, String);

		if(! this.userId) {
			throw new Meteor.Error('not-authorized');
		}

		Tasks.insert({
			text,
			url, 
			createdAt: new Date(),
			owner: this.userId,
			username: Meteor.users.findOne(this.userId).username,
		});
	},
	'tasks.remove'(taskId) {
    check(taskId, String);

    Tasks.remove(taskId);
  },
	
	'tasks.removeAll': function() {
		Tasks.remove({});
	},
  	
	'tasks.setChecked'(taskId, setChecked) {
    check(taskId, String);
    check(setChecked, Boolean);

    Tasks.update(taskId, { $set: { checked: setChecked } });
  },

});
