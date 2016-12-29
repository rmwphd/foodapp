import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './templates/cardsview.html'
import './templates/table.html';
import './main.html';

if (Meteor.isClient) {

  Food = new Meteor.Collection('food');
  Food.attachSchema(new SimpleSchema({
    name: {
      type: String,
      label: "name",
      max: 200
    },
    author: {
      type: String,
      label: "name",
      optional: true,
      max: 200
    },
    book: {
      type: String,
      optional: true,
      label: "book"
    },
    page: {
      type: Number,
      optional: true,
      label: "page",
      min: 0
    },
    'ingredients.$': {
      type: String,
    },
    macros: {
      type: Object,
      optional: true
    },
    "macros.calories": {
      type: Number,
      label: "calories",
      optional: true,
      min: 0,
      max: 2000
    },
    "macros.serves": {
      type: Number,
      label: "serves",
      optional: true,
      min: 0,
      max: 1000
    },
    "macros.fat": {
      type: Number,
      decimal: true,
      label: "fat",
      optional: true,
      min: 0,
      max: 1000
    },
    "macros.carbs": {
      type: Number,
      decimal: true,
      label: "carbs",
      optional: true,
      min: 0,
      max: 1000
    },
    "macros.protein": {
      type: Number,
      decimal: true,
      label: "protein",
      optional: true,
      min: 0,
      max: 1000
    },
    description: {
      type: String,
      label: "description"
    },
    tags: {
      type: Array,
      label: 'tags'
    },
    'tags.$': {
      type: String
    },
  }));

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
