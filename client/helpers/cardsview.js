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

AutoForm.setDefaultTemplate('plain');


Template.NewRecipe.helpers({
  copyContent () {
    event.preventDefault();
    document.getElementById("new_name_form").value = document.getElementById("new_name").innerHTML;
    document.getElementById("new_book_form").value = document.getElementById("new_book").innerHTML;
    document.getElementById("new_page_form").value = document.getElementById("new_page").innerHTML;
    document.getElementById("new_calories_form").value = document.getElementById("new_calories").innerHTML;
    document.getElementById("new_serves_form").value = document.getElementById("new_serves").innerHTML;
    document.getElementById("new_fat_form").value = document.getElementById("new_fat").innerHTML;
    document.getElementById("new_carbs_form").value = document.getElementById("new_carbs").innerHTML;
    document.getElementById("new_protein_form").value = document.getElementById("new_protein").innerHTML;
    document.getElementById("new_desc_form").value = document.getElementById("new_desc").innerHTML;
    document.getElementById("new_tags_form").value = document.getElementById("new_tags").innerHTML;
    //console.log(document.getElementById("new_name").innerHTML);
    //console.log(document.getElementById("new_name_form").value);
    return true;
  }
});


Template.NewRecipe.events({
  'submit' : function(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    var yeah = Template.NewRecipe.__helpers[" copyContent"]();
    console.log(yeah)
    console.log(event);
    console.log(event.target);
    console.log(event.target.new_book_form);
    //   console.log(page);
    //
    //
    // Insert a task into the collection
    //Food.insert({
    //  name,
    //  createdAt: new Date(), // current time
    //});

  },
});
