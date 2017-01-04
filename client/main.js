import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './templates/cardsview.html'
import './templates/table.html';
import './main.html';
import '../imports/methods.js'

if (Meteor.isClient) {

    Meteor.startup(function() {
        WebFontConfig = {
            google: { families: [ 'Open Sans', 'Lato',
            'Junction',
            'Ubuntu',
            'Space Mono',
            'BioRhyme',
            'Anonymous Pro'] }
        };
        (function() {
            var wf = document.createElement('script');
            wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
            '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
            wf.type = 'text/javascript';
            wf.async = 'true';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(wf, s);
            console.log("async fonts loaded", WebFontConfig);
        })();
    });



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
        ingredients: {
            type: String,
            blackbox: true,
            optional: true
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
        order: {
            type: Number
        }
    }));

    Meteor.subscribe('Food');
    Food.allow({
        'insert': function (userId,doc) {
            /* user and doc checks ,
            return true to allow insert */
            return true;
        }
    });

    Template.body.events({
        'click .nuke': function (e) {
            yo = $.getJSON('../../server/food.json');
            console.log(yo);
            var uppy = JSON.parse(yo);
            Food.update("food", uppy, {upsert : true});
            console.log('Database Destroyed!!');
        },
        'click .save': function (e) {
            e.preventDefault();
            JSONout = Food.find().fetch();
            JSONout["_id"] = "food";
            var blob = new Blob([JSON.stringify(JSONout, null, 4)]);
            var a = window.document.createElement("a");
            a.href = window.URL.createObjectURL(blob, {type: "text/plain"});
            a.download = "food.json";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            console.log(JSONout)
            console.log(blob)
        }
    });




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
