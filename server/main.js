import { Meteor } from 'meteor/meteor';
import '../imports/food.js';
import { Mongo } from 'meteor/mongo';

Food = new Mongo.Collection('food');

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
  calories: {
    type: Number,
    label: "Calories Per Serving",
    optional: true,
    min: 0,
    max: 2000
  },
  serves: {
    type: Number,
    label: "Number of Servings",
    optional: true,
    min: 0,
    max: 1000
  },
  fat: {
    type: Number,
    label: "Fat (g)",
    optional: true,
    min: 0,
    max: 1000
  },
  carbs: {
    type: Number,
    label: "Carbohydrates (g)",
    optional: true,
    min: 0,
    max: 1000
  },
  protein: {
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
    type: Array,
    label: 'tags'
  },
  'tags.$': {
    type: Object
  },
  'tags.$.tag': {
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
    "ingredients" : {
      "chicken breast" : "1.25 pounds",
      "thai chiles" : "a small handful",
      "garlic" : "5 cloves",
      "soy sauce" : "2 oz",
      "hoisin sauce" : "2 oz",
      "basil" : "a cup or more"
    }
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
