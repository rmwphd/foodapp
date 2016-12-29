import { Meteor } from 'meteor/meteor';
import '../imports/food.js';
import { Mongo } from 'meteor/mongo';

Food = new Mongo.Collection('food');
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
    label: "fat",
    optional: true,
    min: 0,
    max: 1000
  },
  "macros.carbs": {
    type: Number,
    label: "carbs",
    optional: true,
    min: 0,
    max: 1000
  },
  "macros.protein": {
    type: Number,
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


if (!Food.findOne()) {
  Food.update("food",{
    "name" : "Pad Grapow Chicken",
    "book" : "Cravings",
    "author" : "Chrisy Tiegen",
    "page" : "45",
    "macros" : {
      "fat" : "12g",
      "carbs" : "34g",
      "protein" : "30g",
      "servingcals" : "350 w/ rice",
      "serves" : "4"
    },
    "description" : "A delicious Thai-style stir fried chicken with fresh basil.",
    "tags" : [
      "thai",
      "stir-fry",
      "with rice",
      "chicken",
      "main",
      "spicy"
    ],
    "ingredients" : [
      {"chicken breast" : "1.25 pounds"},
      {"thai chiles" : "a small handful"},
      {"garlic" : "5 cloves"},
      {"soy sauce" : "2 oz"},
      {"hoisin sauce" : "2 oz"},
      {"basil" : "a cup or more"}
    ]
  }, {upsert : true});
};

Meteor.startup(() => {
  // code to run on server at startup
  if (Meteor.isServer) {

    Meteor.publish('Food', function foodPublisher() {
      return Food.find({});
    });
  }
}
);
