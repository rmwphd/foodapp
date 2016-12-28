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
      label: "Name",
      max: 200
    },
    book: {
      type: String,
      optional: true,
      label: "Book"
    },
    page: {
      type: Number,
      optional: true,
      label: "Page",
      min: 0
    },
    macros: {
      type: Object
    },
    'macros.calories': {
      type: Number,
      label: "Calories Per Serving",
      optional: true,
      min: 0,
      max: 2000
    },
    'macros.serves': {
      type: Number,
      label: "Number of Servings",
      optional: true,
      min: 0,
      max: 1000
    },
    'macros.fat': {
      type: Number,
      label: "Fat (g)",
      optional: true,
      min: 0,
      max: 1000
    },
    'macros.carbs': {
      type: Number,
      label: "Carbohydrates (g)",
      optional: true,
      min: 0,
      max: 1000
    },
    'macros.protein': {
      type: Number,
      label: "Protein (g)",
      optional: true,
      min: 0,
      max: 1000
    },
    description: {
      type: String,
      label: "Description"
    },
    tags: {
      type: String,
      label: "Tags"
    }
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
