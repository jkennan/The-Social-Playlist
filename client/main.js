import { Meteor } from 'meteor/meteor';
import { IronRouter } from 'meteor/iron:router';

import './bootstrap.css';
import '../imports/startup/accounts-config.js';
import '../imports/ui_new/host_index.js';
import '../imports/ui_new/guest_index.js';
import '../imports/ui_new/index.html';
import '../imports/ui_new/make_party.html';
import '../imports/ui_new/add_song.html';
import '../imports/ui_new/guest_index.html';
import '../imports/ui_new/host_index.html';
import '../imports/ui_new/make_guest.html';
import '../imports/ui_new/about_us.html';
import '../imports/ui_new/contact.html';

Router.configure({
	noRoutesTemplate: "404page"
});

Router.route('/', function () {
  this.render('index');
});

Router.route('/index', function () {
  this.render('index');
});

Router.route('/make_party', function () {
  this.render('make_party');
});

Router.route('/add_song', function () {
  this.render('add_song');
});

Router.route('/guest_index', function () {
  this.render('guest_index');
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


