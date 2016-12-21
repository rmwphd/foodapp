import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './templates/cardsview.html'
import './templates/table.html';
import './main.html';

if (Meteor.isClient) {

  Food = new Meteor.Collection('food');

  Meteor.subscribe('food');



  /**
  * Router Configuration

  Router.configure({
    layoutTemplate: 'main'
  });
  Router.route('/', {
    name: 'dashboard',
    template: 'dashboard',
    waitOn: function() {
      return [Meteor.subscribe('fiscalYear'),
      Meteor.subscribe('dashboard'),
      Meteor.subscribe('employees'),
      Meteor.subscribe('settings'),
      Meteor.subscribe('projects'),
      Meteor.subscribe('userList')];
    },
  });
  */

};
