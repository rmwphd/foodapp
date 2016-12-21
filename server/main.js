import { Meteor } from 'meteor/meteor';
import '../imports/food.js';
import { Mongo } from 'meteor/mongo';

Food = new Mongo.Collection('food');

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
