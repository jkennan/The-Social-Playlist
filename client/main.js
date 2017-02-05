import { Meteor } from 'meteor/meteor';
import { IronRouter } from 'meteor/iron:router';
import { Rooms } from '../imports/api/rooms.js'

import './bootstrap.css';
import '../imports/startup/accounts-config.js';
import '../imports/ui_new/host_index.js';
import '../imports/ui_new/make_guest.js';
import '../imports/ui_new/make_party.js';
import '../imports/ui_new/guest_index.js';
import '../imports/ui_new/embed_player.js';
import '../imports/ui_new/index.html';
import '../imports/ui_new/make_party.html';
import '../imports/ui_new/add_song.html';
import '../imports/ui_new/guest_index.html';
import '../imports/ui_new/host_index.html';
import '../imports/ui_new/make_guest.html';
import '../imports/ui_new/about_us.html';
import '../imports/ui_new/contact.html';
import '../imports/ui_new/404page.html';

Router.configure({
	noRoutesTemplate: '404page',
});

Router.route('/', function () {
  this.render('index');
});

Router.route('/index', function () {
  this.render('index');
});

//Router.route('/404page', function () {
//  this.render('404page');
//});

Router.route('/make_party', function () {
  this.render('make_party');
});

Router.route('/add_song', function () {
  this.render('add_song');
});

Router.route('/guest_index/:_room', function () {
  this.render('guest_index', { data : function () {
	return Rooms.findOne({_text: this.params._text});
  }});
});

Router.route('/host_index', function () {
  this.render('host_index');
});

Router.route('/make_guest', function () {
  this.render('make_guest');
});

Router.route('/about_us', function () {
  this.render('about_us');
});

Router.route('/contact', function () {
  this.render('contact');
});


