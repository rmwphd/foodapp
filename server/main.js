import { Meteor } from 'meteor/meteor';
import '../imports/food.js';
import '../imports/methods.js';
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
  order: {
    type: Number
  }
}));



Meteor.startup(() => {
  // code to run on server at startup
  if (Meteor.isServer) {

      if (Food.findOne()==undefined) {
        Food.update("food",{
          "name" : "Pad Grapow Chicken",
          "book" : "Cravings",
          "author" : "Chrisy Tiegen",
          "page" : 45,
          "macros" : {
            "fat" : 12,
            "carbs" : 34,
            "protein" : 30,
            "calories" : 350,
            "serves" : 4
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
          "order" : 1
        },{upsert: true, validate : false});
        console.log(Food.findOne());
      };


    Meteor.publish('Food', function foodPublisher() {
      return Food.find({});
    });
  }
}
);
