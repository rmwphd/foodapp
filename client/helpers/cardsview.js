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

  'mousedown button' : function(){
    Template.NewRecipe.__helpers[" copyContent"]();
  },

  'submit' : function(event, templ) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    //var yeah = Template.NewRecipe.__helpers[" copyContent"]();
    //console.log(yeah)
    console.log(event);
    console.log(event.target);
    console.log(event.target.new_name_form.value);
    //console.log(event.target.new_tags_form.value.split(';'));

    // Insert a task into the collection
    Food.insert({
      name : event.target.new_name_form.value,
      book : event.target.new_book_form.value,
      page : event.target.new_page_form.value,
      macros :{
        calories : event.target.new_calories_form.value,
        serves : event.target.new_serves_form.value,
        fat : event.target.new_fat_form.value,
        carbs : event.target.new_carbs_form.value,
        protein : event.target.new_protein_form.value
      },
      description : event.target.new_desc_form.value,
      tags : event.target.new_tags_form.value.split(';')
    });

  }
});
