import { Template } from 'meteor/templating';
import '../templates/cardsview.html';
import { ReactiveVar } from 'meteor/reactive-var';
import '../templates/table.html';
import '../main.html';

Template.cardsview.helpers({
 foods () {
   var out = Food.find().fetch()
   console.log(out)
   return out;
 },

 howmanyfoods(){
   return Food.find().count();
 }
});

 Template.RecipeCard.helpers({

 lmao(thing){
   console.log(thing)
 }

});

Template.cardsview.events({
  'submit .new-recipe'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const name = target.name.value;

    // Insert a task into the collection
    Food.insert({
      name,
      createdAt: new Date(), // current time
    });

    // Clear form
    target.text.value = '';
  },
});
