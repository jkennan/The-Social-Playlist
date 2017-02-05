import { Meteor } from 'meteor/meteor';
import { IronRouter } from 'meteor/iron:router';

import './bootstrap.css'
import '../imports/startup/accounts-config.js';
import '../imports/ui_new/index.html';
import '../imports/ui_new/make-party.html';
import '../imports/ui_new/add-song.html';
import '../imports/ui_new/guest-index.html';
import '../imports/ui_new/host-index.html';
import '../imports/ui_new/make-guest.html';
import '../imports/ui_new/about-us.html';
import '../imports/ui_new/contact.html';


Router.route('/', function () {
  this.render('index');
});

Router.route('/index', function () {
  this.render('index');
});

Router.route('/make-party', function () {
  this.render('make-party');
});

Router.route('/add-song', function () {
  this.render('add-song');
});

Router.route('/guest-index', function () {
  this.render('guest-index');
});

Router.route('/host-index', function () {
  this.render('host-index');
});

Router.route('/make-guest', function () {
  this.render('make-guest');
});

Router.route('/about-us', function () {
  this.render('about-us');
});

Router.route('/contact', function () {
  this.render('contact');
});


