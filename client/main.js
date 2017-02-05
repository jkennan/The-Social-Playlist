import { Meteor } from 'meteor/meteor';
import { IronRouter } from 'meteor/iron:router';

import './bootstrap.css'
import '../imports/startup/accounts-config.js';
import '../imports/ui_new/home.js';
import '../imports/ui_new/make-party.html';

Router.route('/', function () {
  this.render('home');
});

Router.route('/home', function () {
  this.render('home');
});

Router.route('/make-party', function () {
  this.render('make-party');
});
