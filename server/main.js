import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
 import '../imports/api/tasks.js';
 import '../imports/api/rooms.js';
});
